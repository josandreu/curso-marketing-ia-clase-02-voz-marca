import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { UserCircle2 } from 'lucide-react';

export default function Slide12Step2Intro({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Paso 2 · ~15 min</p>

        <h2 className="font-heading text-4xl md:text-6xl font-900 mb-12 leading-tight fade-up fade-up-2 tracking-tight">
          PERSONALIDAD Y <span className="text-primary">ARQUETIPO</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch fade-up fade-up-3">
          <BentoCard className="p-8 md:p-10 flex gap-6 items-start shadow-md h-full">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <UserCircle2 className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="text-foreground font-900 text-2xl mb-4 uppercase tracking-tight">El Contexto (1.1)</p>
              <ul className="text-muted-foreground text-xl space-y-3 list-disc pl-5 font-medium marker:text-primary/50">
                <li>Descripción del negocio</li>
                <li>Cliente ideal</li>
                <li>Propuesta de valor</li>
              </ul>
            </div>
          </BentoCard>

          <div className="flex flex-col gap-6">
            <BentoCard accent className="p-8 border-l-4 border-l-primary flex flex-col justify-center h-full">
              <p className="text-2xl text-foreground font-medium leading-relaxed italic">
                «Objetivo: visualizar la marca como una persona real.»
              </p>
              <div className="mt-6 h-px w-12 bg-primary/20" />
              <p className="mt-6 text-lg text-muted-foreground font-medium leading-relaxed">
                Si el arquetipo no convence: pedid <strong className="text-primary font-bold">2 alternativos</strong> y comparad.
              </p>
            </BentoCard>
          </div>
        </div>
      </div>
      <SlideNumber current={12} total={total || 24} />
    </SlideShell>
  );
}
