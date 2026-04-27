import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { CheckCircle2 } from 'lucide-react';

const items = [
  'Guía de personalidad con arquetipo Jung',
  'Voz definida y tabla clara por contextos',
  'Cinco piezas reales listas para iterar',
  'Filtro de marca para todo lo que generéis con IA (y sin IA)',
];

export default function Slide22Recap({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Bloque 3 — Cierre · 15 min</p>

        <h2 className="font-heading text-5xl md:text-6xl font-900 mb-10 leading-tight fade-up fade-up-2 tracking-tight">
          RECAP <span className="text-primary">DE VALOR</span>
        </h2>

        <div className="space-y-4 fade-up fade-up-3">
          {items.map((t) => (
            <BentoCard key={t} className="p-8 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <p className="text-lg md:text-xl text-foreground font-medium">{t}</p>
            </BentoCard>
          ))}
        </div>

        <p className="mt-8 text-lg text-muted-foreground italic fade-up fade-up-4 leading-relaxed font-medium">
          «Muchas empresas no tienen esto después de años — vosotros lo tenéis hoy en un documento.»
        </p>
      </div>
      <SlideNumber current={22} total={total || 24} />
    </SlideShell>
  );
}
