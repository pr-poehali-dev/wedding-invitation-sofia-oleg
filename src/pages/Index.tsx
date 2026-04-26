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
    <div className="min-h-screen bg-[#f5efe6] text-[#3a2e25] font-sans-clean">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf6ef] via-[#f5efe6] to-[#ede4d3]" />

        <div className="relative z-10 flex flex-col items-center max-w-3xl w-full">
          <p className="font-sans-clean uppercase tracking-[0.5em] text-xs md:text-sm text-[#8a7560] mb-8 animate-fade-up">
            Приглашаем вас на нашу свадьбу
          </p>

          <div className="relative mb-10 animate-fade-up-delay-1">
            <div className="absolute -inset-4 border border-[#bfa888]/60" />
            <img
              src="https://cdn.poehali.dev/files/53b2b252-c41b-40a3-b87b-226d8125090b.jpg"
              alt="София и Олег"
              className="relative w-64 md:w-80 h-auto sepia-[0.15] shadow-2xl"
            />
          </div>

          <div className="text-center animate-fade-up-delay-2">
            <h1 className="font-script text-7xl md:text-9xl text-[#3a2e25] leading-none mb-2">
              София
            </h1>
            <p className="font-serif-elegant text-2xl md:text-3xl italic text-[#8a7560] my-2">
              &
            </p>
            <h1 className="font-script text-7xl md:text-9xl text-[#3a2e25] leading-none">
              Олег
            </h1>
          </div>

          <div className="mt-10 flex items-center gap-6 animate-fade-up-delay-3">
            <div className="h-px w-12 md:w-20 bg-[#8a7560]" />
            <div className="text-center">
              <p className="font-serif-elegant text-3xl md:text-4xl tracking-widest text-[#3a2e25]">
                08 . 08 . 26
              </p>
              <p className="font-sans-clean uppercase tracking-[0.4em] text-xs text-[#8a7560] mt-2">
                Уфа
              </p>
            </div>
            <div className="h-px w-12 md:w-20 bg-[#8a7560]" />
          </div>

          <div className="mt-16 animate-fade-up-delay-3">
            <Icon name="ChevronDown" size={28} className="animate-bounce text-[#bfa888]" />
          </div>
        </div>
      </section>

      {/* Story / Quote */}
      <section className="py-24 px-6 bg-[#3a2e25] text-[#f5efe6]">
        <div className="max-w-2xl mx-auto text-center">
          <Icon name="Heart" size={32} className="mx-auto mb-8 text-[#d4b896]" />
          <p className="font-serif-elegant text-2xl md:text-3xl italic leading-relaxed">
            «Найти свою половинку — это значит найти того,<br />
            рядом с кем ты становишься лучшей версией себя»
          </p>
          <p className="font-sans-clean uppercase tracking-[0.4em] text-xs text-[#bfa888] mt-8">
            Дорогие наши, мы будем счастливы разделить этот день с вами
          </p>
        </div>
      </section>

      {/* Venue */}
      <section className="py-24 px-6 bg-[#faf6ef]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans-clean uppercase tracking-[0.5em] text-xs text-[#8a7560] mb-4">
              Место и время
            </p>
            <h2 className="font-script text-6xl md:text-7xl text-[#3a2e25]">Где и когда</h2>
            <div className="h-px w-16 bg-[#8a7560] mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="border border-[#bfa888]/60 p-10 text-center bg-white/40">
              <Icon name="Calendar" size={36} className="mx-auto mb-6 text-[#3a2e25]" />
              <p className="font-sans-clean uppercase tracking-[0.4em] text-xs text-[#8a7560] mb-3">
                Дата
              </p>
              <p className="font-serif-elegant text-4xl mb-2 text-[#3a2e25]">8 августа</p>
              <p className="font-serif-elegant text-2xl text-[#8a7560] italic">2026 года</p>
              <div className="h-px w-12 bg-[#8a7560] mx-auto my-6" />
              <p className="font-sans-clean uppercase tracking-[0.4em] text-xs text-[#8a7560] mb-3">
                Сбор гостей
              </p>
              <p className="font-serif-elegant text-3xl text-[#3a2e25]">17:00</p>
            </div>

            <div className="border border-[#bfa888]/60 p-10 text-center bg-white/40">
              <Icon name="MapPin" size={36} className="mx-auto mb-6 text-[#3a2e25]" />
              <p className="font-sans-clean uppercase tracking-[0.4em] text-xs text-[#8a7560] mb-3">
                Место
              </p>
              <p className="font-serif-elegant text-4xl mb-2 text-[#3a2e25]">Версаль</p>
              <p className="font-serif-elegant text-xl text-[#8a7560] italic">Ресторан</p>
              <div className="h-px w-12 bg-[#8a7560] mx-auto my-6" />
              <p className="font-sans-clean uppercase tracking-[0.4em] text-xs text-[#8a7560] mb-3">
                Адрес
              </p>
              <p className="font-serif-elegant text-2xl text-[#3a2e25]">г. Уфа</p>
              <p className="font-serif-elegant text-xl text-[#3a2e25]">ул. Элеваторная, 13</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dress code */}
      <section className="py-24 px-6 bg-[#ede4d3]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans-clean uppercase tracking-[0.5em] text-xs text-[#8a7560] mb-4">
            Просьба к гостям
          </p>
          <h2 className="font-script text-6xl md:text-7xl mb-4 text-[#3a2e25]">Дресс-код</h2>
          <div className="h-px w-16 bg-[#8a7560] mx-auto mb-10" />

          <p className="font-serif-elegant text-xl md:text-2xl text-[#5a4a3c] leading-relaxed mb-12 italic">
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
            <div className="border border-[#bfa888]/60 p-6 bg-white/50">
              <Icon name="User" size={24} className="mb-3 text-[#3a2e25]" />
              <p className="font-serif-elegant text-2xl mb-2 text-[#3a2e25]">Для неё</p>
              <p className="font-sans-clean text-base text-[#5a4a3c] leading-relaxed">
                Элегантное платье в нежных тонах: бежевый, шампань, пудровый, оливковый или пыльно-голубой.
              </p>
            </div>
            <div className="border border-[#bfa888]/60 p-6 bg-white/50">
              <Icon name="User" size={24} className="mb-3 text-[#3a2e25]" />
              <p className="font-serif-elegant text-2xl mb-2 text-[#3a2e25]">Для него</p>
              <p className="font-sans-clean text-base text-[#5a4a3c] leading-relaxed">
                Костюм в мягких оттенках: бежевый, кофейный, графитовый или глубокий шоколадный.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section className="py-24 px-6 bg-[#3a2e25] text-[#f5efe6]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans-clean uppercase tracking-[0.5em] text-xs text-[#bfa888] mb-4">
            Связь с нами
          </p>
          <h2 className="font-script text-6xl md:text-7xl mb-4 text-[#f5efe6]">Контакты</h2>
          <div className="h-px w-16 bg-[#d4b896] mx-auto mb-12" />

          <p className="font-serif-elegant text-lg md:text-xl text-[#d4b896] mb-12 italic">
            Если у вас остались вопросы — свяжитесь с организаторами
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-[#bfa888]/40 p-8">
              <Icon name="Phone" size={28} className="mx-auto mb-4 text-[#d4b896]" />
              <p className="font-sans-clean uppercase tracking-[0.4em] text-xs text-[#bfa888] mb-2">
                София
              </p>
              <a href="tel:+79991234567" className="font-serif-elegant text-2xl hover:text-[#d4b896] transition-colors">
                +7 (999) 123-45-67
              </a>
            </div>
            <div className="border border-[#bfa888]/40 p-8">
              <Icon name="Phone" size={28} className="mx-auto mb-4 text-[#d4b896]" />
              <p className="font-sans-clean uppercase tracking-[0.4em] text-xs text-[#bfa888] mb-2">
                Олег
              </p>
              <a href="tel:+79997654321" className="font-serif-elegant text-2xl hover:text-[#d4b896] transition-colors">
                +7 (999) 765-43-21
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://t.me/"
              className="w-12 h-12 border border-[#bfa888]/40 rounded-full flex items-center justify-center hover:bg-[#d4b896] hover:text-[#3a2e25] transition-colors"
              aria-label="Telegram"
            >
              <Icon name="Send" size={20} />
            </a>
            <a
              href="https://wa.me/79991234567"
              className="w-12 h-12 border border-[#bfa888]/40 rounded-full flex items-center justify-center hover:bg-[#d4b896] hover:text-[#3a2e25] transition-colors"
              aria-label="WhatsApp"
            >
              <Icon name="MessageCircle" size={20} />
            </a>
            <a
              href="mailto:wedding@example.com"
              className="w-12 h-12 border border-[#bfa888]/40 rounded-full flex items-center justify-center hover:bg-[#d4b896] hover:text-[#3a2e25] transition-colors"
              aria-label="Email"
            >
              <Icon name="Mail" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section className="py-24 px-6 bg-[#faf6ef]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans-clean uppercase tracking-[0.5em] text-xs text-[#8a7560] mb-4">
              Подтверждение присутствия
            </p>
            <h2 className="font-script text-6xl md:text-7xl mb-4 text-[#3a2e25]">Будете ли вы с нами?</h2>
            <div className="h-px w-16 bg-[#8a7560] mx-auto mb-6" />
            <p className="font-serif-elegant text-lg text-[#5a4a3c] italic">
              Просим подтвердить присутствие до 1 июля 2026 года
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 border border-[#bfa888]/60 p-8 md:p-12 bg-white/50">
            <div className="space-y-2">
              <Label className="font-sans-clean uppercase tracking-[0.3em] text-xs text-[#5a4a3c]">
                Ваше имя
              </Label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Имя и фамилия"
                className="border-0 border-b border-[#8a7560]/40 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#3a2e25] font-serif-elegant text-lg bg-transparent"
              />
            </div>

            <div className="space-y-3">
              <Label className="font-sans-clean uppercase tracking-[0.3em] text-xs text-[#5a4a3c]">
                Сможете прийти?
              </Label>
              <RadioGroup
                value={formData.attendance}
                onValueChange={(v) => setFormData({ ...formData, attendance: v })}
                className="space-y-2 pt-2"
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes" className="font-serif-elegant text-lg cursor-pointer text-[#3a2e25]">
                    Да, с радостью буду
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no" className="font-serif-elegant text-lg cursor-pointer text-[#3a2e25]">
                    К сожалению, не смогу
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {formData.attendance === 'yes' && (
              <div className="space-y-2 animate-fade-up">
                <Label className="font-sans-clean uppercase tracking-[0.3em] text-xs text-[#5a4a3c]">
                  Количество гостей
                </Label>
                <RadioGroup
                  value={formData.guests}
                  onValueChange={(v) => setFormData({ ...formData, guests: v })}
                  className="flex gap-6 pt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="g1" />
                    <Label htmlFor="g1" className="font-serif-elegant text-lg cursor-pointer text-[#3a2e25]">1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="g2" />
                    <Label htmlFor="g2" className="font-serif-elegant text-lg cursor-pointer text-[#3a2e25]">2</Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            <div className="space-y-2">
              <Label className="font-sans-clean uppercase tracking-[0.3em] text-xs text-[#5a4a3c]">
                Пожелания (необязательно)
              </Label>
              <Input
                value={formData.wishes}
                onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                placeholder="Особые предпочтения по меню и др."
                className="border-0 border-b border-[#8a7560]/40 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#3a2e25] font-serif-elegant text-lg bg-transparent"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#3a2e25] text-[#f5efe6] hover:bg-[#5a4a3c] rounded-none py-6 font-sans-clean uppercase tracking-[0.4em] text-xs"
            >
              Отправить
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-[#ede4d3] border-t border-[#bfa888]/40">
        <div className="text-center">
          <p className="font-script text-5xl mb-4 text-[#3a2e25]">София & Олег</p>
          <p className="font-serif-elegant text-lg tracking-widest text-[#3a2e25]">08 . 08 . 26</p>
          <p className="font-sans-clean uppercase tracking-[0.4em] text-xs text-[#8a7560] mt-6">
            Ждём вас с любовью
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
