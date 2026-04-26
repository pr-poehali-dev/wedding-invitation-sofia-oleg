import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    guests: '1',
    wishes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.attendance) {
      toast.error('Пожалуйста, заполните имя и подтверждение');
      return;
    }
    toast.success('Спасибо! Ваш ответ получен');
    setFormData({ name: '', attendance: '', guests: '1', wishes: '' });
  };

  const timeline = [
    {
      time: '14:20',
      title: 'Сбор гостей',
      desc: 'Встреча близких родственников у ЗАГСа',
      icon: 'Users',
      onlyClose: true,
    },
    {
      time: '14:40',
      title: 'Регистрация брака',
      desc: 'ЗАГС Калининского района, ул. Орджоникидзе, 18. Только для близких родственников',
      icon: 'Heart',
      onlyClose: true,
    },
    {
      time: '17:00',
      title: 'Начало банкета',
      desc: 'Ресторан «Версаль», ул. Элеваторная, 13',
      icon: 'Wine',
      onlyClose: false,
    },
    {
      time: '23:00',
      title: 'Окончание банкета',
      desc: 'Завершение торжественного вечера',
      icon: 'Sparkles',
      onlyClose: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans-clean">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />

        <div className="relative z-10 flex flex-col items-center max-w-3xl w-full">
          <p className="font-sans-clean uppercase tracking-[0.5em] text-xs md:text-sm text-gray-500 mb-8 animate-fade-up">
            Приглашаем вас на нашу свадьбу
          </p>

          <div className="relative mb-10 animate-fade-up-delay-1">
            <div className="absolute -inset-4 border border-black/20" />
            <img
              src="https://cdn.poehali.dev/files/53b2b252-c41b-40a3-b87b-226d8125090b.jpg"
              alt="София и Олег"
              className="relative w-64 md:w-80 h-auto grayscale shadow-2xl"
            />
          </div>

          <div className="text-center animate-fade-up-delay-2">
            <h1 className="font-script text-7xl md:text-9xl text-black leading-none mb-2">
              София
            </h1>
            <p className="font-serif-elegant text-2xl md:text-3xl italic text-gray-600 my-2">
              &
            </p>
            <h1 className="font-script text-7xl md:text-9xl text-black leading-none">
              Олег
            </h1>
          </div>

          <div className="mt-10 flex items-center gap-6 animate-fade-up-delay-3">
            <div className="h-px w-12 md:w-20 bg-black" />
            <div className="text-center">
              <p className="font-serif-elegant text-3xl md:text-4xl tracking-widest text-black">
                08 . 08 . 26
              </p>
              <p className="font-sans-clean uppercase tracking-[0.4em] text-xs text-gray-500 mt-2">
                Уфа
              </p>
            </div>
            <div className="h-px w-12 md:w-20 bg-black" />
          </div>

          <div className="mt-16 animate-fade-up-delay-3">
            <Icon name="ChevronDown" size={28} className="animate-bounce text-gray-400" />
          </div>
        </div>
      </section>

      {/* Story / Quote */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-2xl mx-auto text-center">
          <Icon name="Heart" size={32} className="mx-auto mb-8 text-white" />
          <p className="font-serif-elegant text-2xl md:text-3xl italic leading-relaxed">
            «Найти свою половинку — это значит найти того,<br />
            рядом с кем ты становишься лучшей версией себя»
          </p>
          <p className="font-sans-clean uppercase tracking-[0.4em] text-xs text-gray-400 mt-8">
            Дорогие наши, мы будем счастливы разделить этот день с вами
          </p>
        </div>
      </section>

      {/* Venue */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans-clean uppercase tracking-[0.5em] text-xs text-gray-500 mb-4">
              Место и время
            </p>
            <h2 className="font-script text-6xl md:text-7xl text-black">Где и когда</h2>
            <div className="h-px w-16 bg-black mx-auto mt-6" />
          </div>

          <div className="mb-12">
            <img
              src="https://cdn.poehali.dev/projects/750034f7-933b-41cd-8fd2-9c7a1cdf468f/bucket/072bf031-41b7-4873-a42a-b8da13cbf533.jpg"
              alt="Ресторан Версаль"
              className="w-full h-auto grayscale shadow-2xl"
            />
            <p className="font-serif-elegant text-center text-xl italic text-gray-600 mt-6">
              Ресторан «Версаль»
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="border border-black/20 p-10 text-center bg-white">
              <Icon name="Calendar" size={36} className="mx-auto mb-6 text-black" />
              <p className="font-sans-clean uppercase tracking-[0.4em] text-xs text-gray-500 mb-3">
                Дата
              </p>
              <p className="font-serif-elegant text-4xl mb-2 text-black">8 августа</p>
              <p className="font-serif-elegant text-2xl text-gray-600 italic">2026 года</p>
              <div className="h-px w-12 bg-black mx-auto my-6" />
              <p className="font-sans-clean uppercase tracking-[0.4em] text-xs text-gray-500 mb-3">
                Начало банкета
              </p>
              <p className="font-serif-elegant text-3xl text-black">17:00</p>
            </div>

            <div className="border border-black/20 p-10 text-center bg-white">
              <Icon name="MapPin" size={36} className="mx-auto mb-6 text-black" />
              <p className="font-sans-clean uppercase tracking-[0.4em] text-xs text-gray-500 mb-3">
                Место
              </p>
              <p className="font-serif-elegant text-4xl mb-2 text-black">Версаль</p>
              <p className="font-serif-elegant text-xl text-gray-600 italic">Ресторан</p>
              <div className="h-px w-12 bg-black mx-auto my-6" />
              <p className="font-sans-clean uppercase tracking-[0.4em] text-xs text-gray-500 mb-3">
                Адрес
              </p>
              <p className="font-serif-elegant text-2xl text-black">г. Уфа</p>
              <p className="font-serif-elegant text-xl text-black">ул. Элеваторная, 13</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans-clean uppercase tracking-[0.5em] text-xs text-gray-500 mb-4">
              Программа торжества
            </p>
            <h2 className="font-script text-6xl md:text-7xl text-black">Тайминг дня</h2>
            <div className="h-px w-16 bg-black mx-auto mt-6" />
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/20 -translate-x-1/2 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <div key={idx} className="md:grid md:grid-cols-2 md:gap-12 items-center relative">
                  <div className={`${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                    <div className="border border-black/20 p-6 bg-white">
                      <div className={`flex items-center gap-3 mb-3 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <Icon name={item.icon as 'Heart'} size={20} className="text-black" />
                        <p className="font-serif-elegant text-3xl text-black">{item.time}</p>
                      </div>
                      <p className="font-serif-elegant text-2xl mb-2 text-black">{item.title}</p>
                      <p className="font-sans-clean text-base text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                      {item.onlyClose && (
                        <p className="font-sans-clean uppercase tracking-[0.2em] text-[10px] text-gray-500 mt-3 italic">
                          Только для близких родственников
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-black rounded-full hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dress code */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans-clean uppercase tracking-[0.5em] text-xs text-gray-500 mb-4">
            Просьба к гостям
          </p>
          <h2 className="font-script text-6xl md:text-7xl mb-4 text-black">Дресс-код</h2>
          <div className="h-px w-16 bg-black mx-auto mb-10" />

          <p className="font-serif-elegant text-xl md:text-2xl text-gray-700 leading-relaxed mb-12 italic">
            Мы будем благодарны, если вы поддержите стилистику торжества<br />
            и оденетесь в палитре нежных пастельных оттенков
          </p>

          <div className="mb-12">
            <img
              src="https://cdn.poehali.dev/projects/750034f7-933b-41cd-8fd2-9c7a1cdf468f/bucket/be91bcb7-500a-4eea-a833-0a6172dcb90b.jpg"
              alt="Палитра дресс-кода"
              className="max-w-md mx-auto w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="border border-black/20 p-6 bg-white">
              <Icon name="User" size={24} className="mb-3 text-black" />
              <p className="font-serif-elegant text-2xl mb-2 text-black">Для неё</p>
              <p className="font-sans-clean text-base text-gray-600 leading-relaxed">
                Элегантное платье в нежных тонах: бежевый, шампань, пудровый, оливковый или пыльно-голубой.
              </p>
            </div>
            <div className="border border-black/20 p-6 bg-white">
              <Icon name="User" size={24} className="mb-3 text-black" />
              <p className="font-serif-elegant text-2xl mb-2 text-black">Для него</p>
              <p className="font-sans-clean text-base text-gray-600 leading-relaxed">
                Костюм в мягких оттенках: бежевый, кофейный, графитовый или глубокий шоколадный.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans-clean uppercase tracking-[0.5em] text-xs text-gray-400 mb-4">
            Связь с нами
          </p>
          <h2 className="font-script text-6xl md:text-7xl mb-4 text-white">Контакты</h2>
          <div className="h-px w-16 bg-white mx-auto mb-12" />

          <p className="font-serif-elegant text-lg md:text-xl text-gray-300 mb-12 italic">
            Если у вас остались вопросы — свяжитесь с нами
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-white/30 p-8">
              <Icon name="Phone" size={28} className="mx-auto mb-4 text-white" />
              <p className="font-sans-clean uppercase tracking-[0.4em] text-xs text-gray-400 mb-2">
                София
              </p>
              <a href="tel:+79371646338" className="font-serif-elegant text-2xl hover:text-gray-300 transition-colors">
                8 (937) 164-63-38
              </a>
            </div>
            <div className="border border-white/30 p-8">
              <Icon name="Phone" size={28} className="mx-auto mb-4 text-white" />
              <p className="font-sans-clean uppercase tracking-[0.4em] text-xs text-gray-400 mb-2">
                Олег
              </p>
              <a href="tel:+79965811769" className="font-serif-elegant text-2xl hover:text-gray-300 transition-colors">
                8 (996) 581-17-69
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://t.me/"
              className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              aria-label="Telegram"
            >
              <Icon name="Send" size={20} />
            </a>
            <a
              href="https://wa.me/79371646338"
              className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              aria-label="WhatsApp"
            >
              <Icon name="MessageCircle" size={20} />
            </a>
            <a
              href="mailto:wedding@example.com"
              className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              aria-label="Email"
            >
              <Icon name="Mail" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans-clean uppercase tracking-[0.5em] text-xs text-gray-500 mb-4">
              Подтверждение присутствия
            </p>
            <h2 className="font-script text-6xl md:text-7xl mb-4 text-black">Будете ли вы с нами?</h2>
            <div className="h-px w-16 bg-black mx-auto mb-6" />
            <p className="font-serif-elegant text-lg text-gray-600 italic">
              Просим подтвердить присутствие до 1 июля 2026 года
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 border border-black/20 p-8 md:p-12 bg-white">
            <div className="space-y-2">
              <Label className="font-sans-clean uppercase tracking-[0.3em] text-xs text-gray-700">
                Ваше имя
              </Label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Имя и фамилия"
                className="border-0 border-b border-black/30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black font-serif-elegant text-lg bg-transparent"
              />
            </div>

            <div className="space-y-3">
              <Label className="font-sans-clean uppercase tracking-[0.3em] text-xs text-gray-700">
                Сможете прийти?
              </Label>
              <RadioGroup
                value={formData.attendance}
                onValueChange={(v) => setFormData({ ...formData, attendance: v })}
                className="space-y-2 pt-2"
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes" className="font-serif-elegant text-lg cursor-pointer text-black">
                    Да, с радостью буду
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no" className="font-serif-elegant text-lg cursor-pointer text-black">
                    К сожалению, не смогу
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {formData.attendance === 'yes' && (
              <div className="space-y-2 animate-fade-up">
                <Label className="font-sans-clean uppercase tracking-[0.3em] text-xs text-gray-700">
                  Количество гостей
                </Label>
                <RadioGroup
                  value={formData.guests}
                  onValueChange={(v) => setFormData({ ...formData, guests: v })}
                  className="flex gap-6 pt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="g1" />
                    <Label htmlFor="g1" className="font-serif-elegant text-lg cursor-pointer text-black">1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="g2" />
                    <Label htmlFor="g2" className="font-serif-elegant text-lg cursor-pointer text-black">2</Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            <div className="space-y-2">
              <Label className="font-sans-clean uppercase tracking-[0.3em] text-xs text-gray-700">
                Пожелания (необязательно)
              </Label>
              <Input
                value={formData.wishes}
                onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                placeholder="Особые предпочтения по меню и др."
                className="border-0 border-b border-black/30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black font-serif-elegant text-lg bg-transparent"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-gray-800 rounded-none py-6 font-sans-clean uppercase tracking-[0.4em] text-xs"
            >
              Отправить
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-white border-t border-black/20">
        <div className="text-center">
          <p className="font-script text-5xl mb-4 text-black">София & Олег</p>
          <p className="font-serif-elegant text-lg tracking-widest text-black">08 . 08 . 26</p>
          <p className="font-sans-clean uppercase tracking-[0.4em] text-xs text-gray-500 mt-6">
            Ждём вас с любовью
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
