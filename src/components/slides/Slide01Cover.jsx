import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';

export default function Slide01Cover({ total }) {
  return (
    <SlideShell className="flex items-center justify-center bg-white">
      <div className="relative z-10 px-8 md:px-16 max-w-5xl mx-auto text-center flex flex-col items-center">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary font-bold mb-6 fade-up fade-up-1">
          Módulo 1 — Estrategia, Marca y Storytelling
        </p>

        <h1 className="font-heading font-900 leading-tight">
          <span className="block text-4xl md:text-6xl lg:text-7xl text-foreground fade-up fade-up-2 tracking-tight">LA VOZ DE</span>
          <span className="block text-4xl md:text-6xl lg:text-7xl text-primary fade-up fade-up-3 tracking-tight">TU MARCA</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-muted-foreground mt-6 fade-up fade-up-4 font-medium">
          Aprende a definir la personalidad, el tono y el estilo de tu comunicación usando Inteligencia Artificial.
        </p>

        <div className="mt-12 flex items-center gap-8 fade-up fade-up-5 flex-wrap justify-center font-body border-y border-primary/10 py-6 w-full max-w-3xl">
          <div className="flex flex-col items-center">
            <span className="text-xs tracking-[2px] text-muted-foreground uppercase font-bold mb-1">Duración</span>
            <span className="text-base font-800 text-foreground">2h 55 min</span>
          </div>
          <div className="w-px h-8 bg-primary/10 hidden md:block" />
          <div className="flex flex-col items-center">
            <span className="text-xs tracking-[2px] text-muted-foreground uppercase font-bold mb-1">Formato</span>
            <span className="text-base font-800 text-foreground">Online en directo</span>
          </div>
          <div className="w-px h-8 bg-primary/10 hidden md:block" />
          <div className="flex flex-col items-center">
            <span className="text-xs tracking-[2px] text-muted-foreground uppercase font-bold mb-1">Sesión</span>
            <span className="text-base font-800 text-foreground">2 de 8</span>
          </div>
        </div>

        <div className="mt-10 max-w-2xl fade-up fade-up-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-2">Entregable de hoy</span>
            Guía de tono completa: arquetipo, 5 adjetivos clave, voz por canal, tabla "Así sí / Así no" y 5 piezas reales de contenido.
          </p>
        </div>
      </div>
      <SlideNumber current={1} total={total || 24} />
    </SlideShell>
  );
}
