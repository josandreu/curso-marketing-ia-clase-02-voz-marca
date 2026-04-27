import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { Table2 } from 'lucide-react';

export default function Slide14Step3Intro({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Paso 3 · ~15 min</p>

        <h2 className="font-heading text-4xl md:text-6xl font-900 mb-10 leading-tight fade-up fade-up-2 tracking-tight">
          TABLA <span className="text-primary">ASÍ SÍ / ASÍ NO</span>
        </h2>

        <BentoCard className="p-8 md:p-10 flex gap-6 items-start mb-8 fade-up fade-up-3 shadow-lg">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <Table2 className="w-8 h-8 text-primary" />
          </div>
          <div>
            <p className="text-foreground text-xl font-medium leading-relaxed">
              Pega el resultado del paso 2. Salida: <strong className="text-primary font-bold">2 columnas × 12 filas</strong>. Cada fila = contexto real con ejemplo concreto (no solo la regla).
              Formato tabla Markdown.
            </p>
          </div>
        </BentoCard>

        <p className="text-lg text-muted-foreground font-medium flex items-center gap-2 fade-up fade-up-4 bg-muted/50 w-fit px-6 py-3 rounded-full">
          Los 12 contextos están en la siguiente diapositiva junto al prompt completo.
        </p>
      </div>
      <SlideNumber current={14} total={total || 24} />
    </SlideShell>
  );
}
