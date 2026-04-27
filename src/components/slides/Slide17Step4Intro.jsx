import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { Layers } from 'lucide-react';

export default function Slide17Step4Intro({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Paso 4 · ~15 min</p>

        <h2 className="font-heading text-5xl md:text-6xl font-900 mb-10 leading-tight fade-up fade-up-2 tracking-tight">
          CINCO PIEZAS <span className="text-primary relative inline-block">REALES<div className="absolute -bottom-2 left-0 w-full h-2 bg-primary/30 rounded-full blur-sm"></div></span>
        </h2>

        <BentoCard className="p-8 md:p-10 flex gap-6 items-start mb-8 fade-up fade-up-3 shadow-lg">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <Layers className="w-8 h-8 text-primary" />
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed font-medium">
            Pegar en el prompt: <strong className="text-foreground font-bold">guía de personalidad + tabla</strong>.<br /> Cada pieza en formato distinto; misma voz, tono
            adaptado al canal.
          </p>
        </BentoCard>

        <BentoCard accent className="p-8 fade-up fade-up-4 border-l-4 border-l-primary/50">
          <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
            <strong className="text-primary font-bold uppercase tracking-widest text-sm block mb-2">Demo</strong> 
            Generar en pantalla y leer en voz alta la bio de Instagram y el post de LinkedIn para que el grupo note la
            diferencia de tono manteniendo la voz.
          </p>
        </BentoCard>
      </div>
      <SlideNumber current={17} total={total || 24} />
    </SlideShell>
  );
}
