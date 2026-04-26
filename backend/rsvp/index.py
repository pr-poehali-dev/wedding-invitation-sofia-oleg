import json
import os
import urllib.request
import urllib.parse


def handler(event: dict, context) -> dict:
    '''
    Бизнес: приём анкет RSVP со свадебного приглашения и отправка в Telegram организаторам
    Args: event с httpMethod, body (JSON с полями name, attendance, guests, wishes, alcohol)
          context с request_id
    Returns: HTTP-ответ со статусом отправки
    '''
    method = event.get('httpMethod', 'GET')

    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
    }

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Method not allowed'}),
        }

    try:
        body = json.loads(event.get('body') or '{}')
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Invalid JSON'}),
        }

    name = (body.get('name') or '').strip()
    attendance = body.get('attendance') or ''
    guests = body.get('guests') or '1'
    wishes = (body.get('wishes') or '').strip()
    alcohol = body.get('alcohol') or []

    if not name or not attendance:
        return {
            'statusCode': 400,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'name and attendance are required'}),
        }

    alcohol_labels = {
        'white-wine': 'Белое вино',
        'red-wine': 'Красное вино',
        'champagne': 'Шампанское',
        'vodka': 'Водка',
        'moonshine': 'Самогон',
    }
    alcohol_text = ', '.join(alcohol_labels.get(a, a) for a in alcohol) if alcohol else '—'

    attendance_text = 'Да, придёт' if attendance == 'yes' else 'Не сможет прийти'

    message_lines = [
        '<b>Новая анкета RSVP</b>',
        '',
        f'<b>Имя:</b> {name}',
        f'<b>Присутствие:</b> {attendance_text}',
    ]
    if attendance == 'yes':
        message_lines.append(f'<b>Количество гостей:</b> {guests}')
        message_lines.append(f'<b>Алкоголь:</b> {alcohol_text}')
    if wishes:
        message_lines.append(f'<b>Пожелания:</b> {wishes}')

    message = '\n'.join(message_lines)

    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID', '')

    if not bot_token or not chat_id:
        return {
            'statusCode': 500,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Telegram credentials not configured'}),
        }

    url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    data = urllib.parse.urlencode({
        'chat_id': chat_id,
        'text': message,
        'parse_mode': 'HTML',
    }).encode('utf-8')

    req = urllib.request.Request(url, data=data, method='POST')
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            resp.read()
    except Exception as e:
        return {
            'statusCode': 502,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': f'Telegram API error: {str(e)}'}),
        }

    return {
        'statusCode': 200,
        'headers': {**cors_headers, 'Content-Type': 'application/json'},
        'body': json.dumps({'success': True}),
    }
