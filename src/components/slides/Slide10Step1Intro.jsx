import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { ScanSearch } from 'lucide-react';

export default function Slide10Step1Intro({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Paso 1 · ~10 min</p>

        <h2 className="font-heading text-4xl md:text-6xl font-900 mb-12 leading-tight fade-up fade-up-2 tracking-tight">
          DIAGNOSTICAR TU <span className="text-primary">VOZ ACTUAL</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start fade-up fade-up-3">
          <div className="md:col-span-3">
            <BentoCard accent className="p-8 md:p-10 flex gap-6 items-start shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <ScanSearch className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-900 text-2xl mb-3 uppercase tracking-tight">La Tarea</p>
                <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                  Copia un texto real: web, redes, email o WhatsApp comercial. Lo pegaremos en el prompt de la siguiente diapositiva.
                </p>
              </div>
            </BentoCard>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Demo en vivo</span>
              </div>
              <p className="text-lg text-foreground font-medium leading-relaxed italic border-l-2 border-primary/30 pl-4">
                «Esto es un espejo: cómo suena vuestra marca ahora. A muchos os sorprenderá — y no siempre para bien».
              </p>
            </div>
            
            <p className="text-sm text-muted-foreground font-medium pl-2">
              El profesor ejecuta el prompt con un texto propio para mostrar el contraste.
            </p>
          </div>
        </div>
      </div>
      <SlideNumber current={10} total={total || 24} />
    </SlideShell>
  );
}
