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

  return (
    <div className="min-h-screen bg-white text-black font-sans-clean">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />

        <div className="relative z-10 flex flex-col items-center max-w-3xl w-full">
          <p className="font-sans-clean uppercase tracking-[0.4em] text-xs md:text-sm text-gray-500 mb-8 animate-fade-up">
            Приглашаем вас на нашу свадьбу
          </p>

          <div className="relative mb-10 animate-fade-up-delay-1">
            <div className="absolute -inset-4 border border-black/10" />
            <img
              src="https://cdn.poehali.dev/files/53b2b252-c41b-40a3-b87b-226d8125090b.jpg"
              alt="София и Олег"
              className="relative w-64 md:w-80 h-auto grayscale shadow-2xl"
            />
          </div>

          <div className="text-center animate-fade-up-delay-2">
            <h1 className="font-script text-6xl md:text-8xl text-black leading-none mb-2">
              София
            </h1>
            <p className="font-serif-elegant text-2xl md:text-3xl italic text-gray-600 my-2">
              &
            </p>
            <h1 className="font-script text-6xl md:text-8xl text-black leading-none">
              Олег
            </h1>
          </div>

          <div className="mt-10 flex items-center gap-6 animate-fade-up-delay-3">
            <div className="h-px w-12 md:w-20 bg-black" />
            <div className="text-center">
              <p className="font-serif-elegant text-3xl md:text-4xl tracking-widest">
                08 . 08 . 26
              </p>
              <p className="font-sans-clean uppercase tracking-[0.3em] text-xs text-gray-500 mt-2">
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
            «Любовь — единственное, что мы можем взять с собой,<br />
            когда уходим, и она делает конец таким лёгким»
          </p>
          <p className="font-sans-clean uppercase tracking-[0.3em] text-xs text-gray-400 mt-8">
            Дорогие наши, мы будем счастливы разделить этот день с вами
          </p>
        </div>
      </section>

      {/* Venue */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans-clean uppercase tracking-[0.4em] text-xs text-gray-500 mb-4">
              Место и время
            </p>
            <h2 className="font-script text-5xl md:text-6xl">Где и когда</h2>
            <div className="h-px w-16 bg-black mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="border border-black/20 p-10 text-center">
              <Icon name="Calendar" size={36} className="mx-auto mb-6" />
              <p className="font-sans-clean uppercase tracking-[0.3em] text-xs text-gray-500 mb-3">
                Дата
              </p>
              <p className="font-serif-elegant text-4xl mb-2">8 августа</p>
              <p className="font-serif-elegant text-2xl text-gray-600">2026 года</p>
              <div className="h-px w-12 bg-black mx-auto my-6" />
              <p className="font-sans-clean uppercase tracking-[0.3em] text-xs text-gray-500 mb-3">
                Сбор гостей
              </p>
              <p className="font-serif-elegant text-3xl">17:00</p>
            </div>

            <div className="border border-black/20 p-10 text-center">
              <Icon name="MapPin" size={36} className="mx-auto mb-6" />
              <p className="font-sans-clean uppercase tracking-[0.3em] text-xs text-gray-500 mb-3">
                Место
              </p>
              <p className="font-serif-elegant text-4xl mb-2">Версаль</p>
              <p className="font-serif-elegant text-xl text-gray-600 italic">Ресторан</p>
              <div className="h-px w-12 bg-black mx-auto my-6" />
              <p className="font-sans-clean uppercase tracking-[0.3em] text-xs text-gray-500 mb-3">
                Адрес
              </p>
              <p className="font-serif-elegant text-2xl">г. Уфа</p>
              <p className="font-serif-elegant text-xl text-gray-700">ул. Элеваторная, 13</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dress code */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans-clean uppercase tracking-[0.4em] text-xs text-gray-500 mb-4">
            Просьба к гостям
          </p>
          <h2 className="font-script text-5xl md:text-6xl mb-4">Дресс-код</h2>
          <div className="h-px w-16 bg-black mx-auto mb-10" />

          <p className="font-serif-elegant text-xl md:text-2xl text-gray-700 leading-relaxed mb-12 italic">
            Мы будем благодарны, если вы поддержите стилистику торжества<br />
            и оденетесь в чёрно-белой палитре
          </p>

          <div className="flex justify-center gap-6 md:gap-10 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-2 border-black" />
              <p className="font-sans-clean uppercase tracking-[0.2em] text-xs mt-3">Белый</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-300" />
              <p className="font-sans-clean uppercase tracking-[0.2em] text-xs mt-3">Серый</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black" />
              <p className="font-sans-clean uppercase tracking-[0.2em] text-xs mt-3">Чёрный</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="border border-black/20 p-6 bg-white">
              <Icon name="User" size={24} className="mb-3" />
              <p className="font-serif-elegant text-xl mb-2">Для неё</p>
              <p className="font-sans-clean text-sm text-gray-600 leading-relaxed">
                Элегантное платье в чёрном, белом или сером цвете. Каблук — на ваше усмотрение.
              </p>
            </div>
            <div className="border border-black/20 p-6 bg-white">
              <Icon name="User" size={24} className="mb-3" />
              <p className="font-serif-elegant text-xl mb-2">Для него</p>
              <p className="font-sans-clean text-sm text-gray-600 leading-relaxed">
                Костюм классических тонов: чёрный, графитовый или белый. Бабочка приветствуется.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans-clean uppercase tracking-[0.4em] text-xs text-gray-400 mb-4">
            Связь с нами
          </p>
          <h2 className="font-script text-5xl md:text-6xl mb-4">Контакты</h2>
          <div className="h-px w-16 bg-white mx-auto mb-12" />

          <p className="font-serif-elegant text-lg md:text-xl text-gray-300 mb-12 italic">
            Если у вас остались вопросы — свяжитесь с организаторами
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-white/30 p-8">
              <Icon name="Phone" size={28} className="mx-auto mb-4" />
              <p className="font-sans-clean uppercase tracking-[0.3em] text-xs text-gray-400 mb-2">
                София
              </p>
              <a href="tel:+79991234567" className="font-serif-elegant text-2xl hover:text-gray-300 transition-colors">
                +7 (999) 123-45-67
              </a>
            </div>
            <div className="border border-white/30 p-8">
              <Icon name="Phone" size={28} className="mx-auto mb-4" />
              <p className="font-sans-clean uppercase tracking-[0.3em] text-xs text-gray-400 mb-2">
                Олег
              </p>
              <a href="tel:+79997654321" className="font-serif-elegant text-2xl hover:text-gray-300 transition-colors">
                +7 (999) 765-43-21
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
              href="https://wa.me/79991234567"
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
      <section className="py-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans-clean uppercase tracking-[0.4em] text-xs text-gray-500 mb-4">
              Подтверждение присутствия
            </p>
            <h2 className="font-script text-5xl md:text-6xl mb-4">Будете ли вы с нами?</h2>
            <div className="h-px w-16 bg-black mx-auto mb-6" />
            <p className="font-serif-elegant text-lg text-gray-600 italic">
              Просим подтвердить присутствие до 1 июля 2026 года
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 border border-black/20 p-8 md:p-12">
            <div className="space-y-2">
              <Label className="font-sans-clean uppercase tracking-[0.2em] text-xs">
                Ваше имя
              </Label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Имя и фамилия"
                className="border-0 border-b border-black/30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black font-serif-elegant text-lg"
              />
            </div>

            <div className="space-y-3">
              <Label className="font-sans-clean uppercase tracking-[0.2em] text-xs">
                Сможете прийти?
              </Label>
              <RadioGroup
                value={formData.attendance}
                onValueChange={(v) => setFormData({ ...formData, attendance: v })}
                className="space-y-2 pt-2"
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes" className="font-serif-elegant text-lg cursor-pointer">
                    Да, с радостью буду
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no" className="font-serif-elegant text-lg cursor-pointer">
                    К сожалению, не смогу
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {formData.attendance === 'yes' && (
              <div className="space-y-2 animate-fade-up">
                <Label className="font-sans-clean uppercase tracking-[0.2em] text-xs">
                  Количество гостей
                </Label>
                <RadioGroup
                  value={formData.guests}
                  onValueChange={(v) => setFormData({ ...formData, guests: v })}
                  className="flex gap-6 pt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="g1" />
                    <Label htmlFor="g1" className="font-serif-elegant text-lg cursor-pointer">1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="g2" />
                    <Label htmlFor="g2" className="font-serif-elegant text-lg cursor-pointer">2</Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            <div className="space-y-2">
              <Label className="font-sans-clean uppercase tracking-[0.2em] text-xs">
                Пожелания (необязательно)
              </Label>
              <Input
                value={formData.wishes}
                onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                placeholder="Особые предпочтения по меню и др."
                className="border-0 border-b border-black/30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black font-serif-elegant text-lg"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-gray-800 rounded-none py-6 font-sans-clean uppercase tracking-[0.3em] text-xs"
            >
              Отправить
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-white border-t border-black/10">
        <div className="text-center">
          <p className="font-script text-4xl mb-4">София & Олег</p>
          <p className="font-serif-elegant text-lg tracking-widest">08 . 08 . 26</p>
          <p className="font-sans-clean uppercase tracking-[0.3em] text-xs text-gray-500 mt-6">
            Ждём вас с любовью
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
