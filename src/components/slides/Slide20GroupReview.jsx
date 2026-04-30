import { Users } from 'lucide-react';
import BentoCard from './BentoCard';
import SlideNumber from './SlideNumber';
import SlideShell from './SlideShell';

export default function Slide20GroupReview({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">[1:50 – 2:10] Revisión grupal</p>

        <h2 className="font-heading text-4xl md:text-6xl font-900 mb-12 leading-tight fade-up fade-up-2 tracking-tight">
          2 VOLUNTARIOS <span className="text-primary">EN PANTALLA</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch fade-up fade-up-3">
          <BentoCard className="p-8 md:p-10 shadow-md h-full">
            <div className="flex gap-4 items-center mb-6 bg-primary/5 p-4 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground text-xl font-900 leading-tight uppercase tracking-tight">La Dinámica</p>
            </div>
            <p className="text-xl text-foreground font-medium mb-4">Compartir tabla + leer la bio de Instagram en voz alta.</p>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed">Si el arquetipo no convence: pedid <strong className="text-primary font-bold">2 alternativos</strong> y comparad.</p>
          </BentoCard>

          <BentoCard accent className="p-8 md:p-10 border-l-4 border-l-primary flex flex-col h-full bg-primary/5">
            <p className="text-sm font-heading uppercase text-primary mb-6 tracking-widest font-bold">El grupo valora en el chat</p>
            <ul className="text-xl text-foreground/80 space-y-6 list-none font-medium">
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs shrink-0 mt-1">1</div>
                <span>¿Se nota personalidad o suena genérico?</span>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs shrink-0 mt-1">2</div>
                <span>¿Coherente con el cliente definido en 1.1?</span>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs shrink-0 mt-1">3</div>
                <span>¿Se distingue de cualquier competidor del sector?</span>
              </li>
            </ul>
          </BentoCard>
        </div>
      </div>
      <SlideNumber current={20} total={total || 24} />
    </SlideShell>
  );
}
