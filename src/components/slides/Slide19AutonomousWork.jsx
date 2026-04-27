import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { PenLine } from 'lucide-react';

export default function Slide19AutonomousWork({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">[1:30 – 1:50] Trabajo autónomo</p>

        <h2 className="font-heading text-5xl md:text-6xl font-900 mb-10 leading-tight fade-up fade-up-2 tracking-tight">
          REFINAR <span className="text-primary">EN SILENCIO</span>
        </h2>

        <BentoCard className="p-8 md:p-10 flex gap-6 items-start fade-up fade-up-3 shadow-lg">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <PenLine className="w-8 h-8 text-primary" />
          </div>
          <ul className="text-xl text-muted-foreground space-y-4 list-disc pl-5 font-medium marker:text-primary/50 leading-relaxed">
            <li>Ajustar adjetivos si no encajan con el negocio real.</li>
            <li>Pulir la tabla «Así sí / Así no».</li>
            <li>
              Generar <strong className="text-foreground font-bold">1–2 piezas extra</strong> en contextos útiles: guión de vídeo corto, propuesta comercial, respuesta a reseña
              negativa en Google…
            </li>
          </ul>
        </BentoCard>
      </div>
      <SlideNumber current={19} total={total || 24} />
    </SlideShell>
  );
}
