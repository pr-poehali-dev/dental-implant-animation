import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const STAGES = [
  {
    id: '01',
    title: 'Установка имплантата',
    subtitle: 'Хирургический этап',
    text: 'Титановый имплантат вводится в подготовленное ложе челюстной кости. Хирургические инструменты крупным планом, область установки подсвечена на 3D-модели челюсти.',
    image: 'https://cdn.poehali.dev/projects/12413652-a0ae-42b6-805d-bd03f63dd9ad/files/3ebf1869-3c38-49f2-9ec1-f2d578e2da3d.jpg',
    duration: '00:00 — 00:04',
    icon: 'Wrench',
  },
  {
    id: '02',
    title: 'Остеоинтеграция',
    subtitle: 'Заживление кости',
    text: 'Костная ткань срастается с поверхностью имплантата. Визуализация роста костных клеток вокруг титанового стержня в анатомическом разрезе.',
    image: 'https://cdn.poehali.dev/projects/12413652-a0ae-42b6-805d-bd03f63dd9ad/files/8b881670-3a93-48c9-846b-d285a531260a.jpg',
    duration: '00:04 — 00:08',
    icon: 'Activity',
  },
  {
    id: '03',
    title: 'Финальный результат',
    subtitle: 'Коронка и готовый зуб',
    text: 'На имплантат устанавливается абатмент и керамическая коронка. Полностью восстановленный зуб в окружении здоровой десны и соседних зубов.',
    image: 'https://cdn.poehali.dev/projects/12413652-a0ae-42b6-805d-bd03f63dd9ad/files/b5e310db-e06b-4f0a-ae12-9a21fa7e8e1c.jpg',
    duration: '00:08 — 00:10',
    icon: 'CheckCircle2',
  },
];

const Index = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % STAGES.length), 4000);
    return () => clearInterval(t);
  }, []);

  const stage = STAGES[active];

  return (
    <div className="min-h-screen grid-bg noise relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-clinical/10 blur-[120px]" style={{ background: 'radial-gradient(circle, hsl(196 90% 56% / 0.18), transparent 70%)' }} />

      {/* Header */}
      <header className="relative z-10 border-b border-clinical/10">
        <div className="container flex items-center justify-between py-5">
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="flex h-9 w-9 items-center justify-center rounded-md border border-clinical/30 bg-clinical/5">
              <Icon name="Microscope" className="text-clinical" size={18} />
            </div>
            <div className="leading-tight">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-clinical">Dental Implant</p>
              <p className="text-sm font-medium text-foreground/70">Научная визуализация</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 font-mono text-xs text-foreground/40">
            <span className="h-2 w-2 rounded-full bg-clinical animate-pulse" />
            10 SEC · 3D · REALTIME RENDER
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="container relative z-10 py-12 md:py-16">
        <div className="max-w-3xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-clinical animate-fade-up">
            Анимация процесса · Анатомическая точность
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Установка зубного<br />
            <span className="text-clinical">импланта</span> в 3D
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-foreground/50 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Чистый научный стиль, студийное освещение, плавное движение камеры вокруг модели челюсти пациента.
          </p>
        </div>

        {/* Viewer */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr] animate-fade-up" style={{ animationDelay: '0.3s' }}>
          {/* Image stage */}
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-clinical/20 bg-black/40 glow-clinical">
            {STAGES.map((s, i) => (
              <img
                key={s.id}
                src={s.image}
                alt={s.title}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-out ${i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
              />
            ))}
            {/* scan line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-clinical/40 to-transparent animate-scan" />
            {/* corner brackets */}
            <div className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-clinical/60" />
            <div className="pointer-events-none absolute right-4 top-4 h-6 w-6 border-r-2 border-t-2 border-clinical/60" />
            <div className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-clinical/60" />
            <div className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-clinical/60" />

            {/* HUD overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-clinical">Этап {stage.id} / 03</p>
                  <h3 className="mt-1 text-2xl font-medium">{stage.title}</h3>
                </div>
                <span className="font-mono text-xs text-foreground/50">{stage.duration}</span>
              </div>
            </div>

            {/* rotating target marker */}
            <div className="absolute right-6 top-6 hidden sm:block">
              <div className="relative h-12 w-12">
                <div className="absolute inset-0 rounded-full border border-clinical/40 animate-pulse-ring" />
                <div className="absolute inset-0 rounded-full border border-dashed border-clinical/50 animate-spin-slow" />
                <Icon name="Crosshair" className="absolute inset-0 m-auto text-clinical" size={20} />
              </div>
            </div>
          </div>

          {/* Stage panel */}
          <div className="flex flex-col gap-3">
            {STAGES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`group relative overflow-hidden rounded-xl border p-5 text-left transition-all duration-500 ${
                  i === active
                    ? 'border-clinical/50 bg-clinical/5'
                    : 'border-white/5 bg-white/[0.02] hover:border-clinical/20'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors ${i === active ? 'border-clinical/40 bg-clinical/10 text-clinical' : 'border-white/10 text-foreground/40'}`}>
                    <Icon name={s.icon} size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] text-clinical">{s.id}</span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-foreground/40">{s.subtitle}</span>
                    </div>
                    <h4 className="mt-0.5 font-medium">{s.title}</h4>
                    <p className={`mt-2 text-sm leading-relaxed text-foreground/50 transition-all duration-500 ${i === active ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      {s.text}
                    </p>
                  </div>
                </div>
                {i === active && (
                  <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-clinical animate-progress-bar" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Specs */}
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/5 bg-white/5 md:grid-cols-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          {[
            { l: 'Длительность', v: '10 сек', icon: 'Clock' },
            { l: 'Стиль', v: 'Реалистичный', icon: 'Sparkles' },
            { l: 'Освещение', v: 'Студийное', icon: 'Lightbulb' },
            { l: 'Камера', v: 'Орбита 360°', icon: 'Video' },
          ].map((spec) => (
            <div key={spec.l} className="bg-background p-5">
              <Icon name={spec.icon} className="text-clinical/70" size={18} />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-foreground/40">{spec.l}</p>
              <p className="mt-1 text-lg font-medium">{spec.v}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="container relative z-10 border-t border-white/5 py-6">
        <p className="font-mono text-xs text-foreground/30">
          DENTAL IMPLANT VISUALIZATION · ANATOMICALLY ACCURATE · STUDIO RENDER
        </p>
      </footer>
    </div>
  );
};

export default Index;
