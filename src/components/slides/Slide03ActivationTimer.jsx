import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { Timer } from 'lucide-react';

export default function Slide03ActivationTimer({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Bloque 1 — Activación · 15 min</p>

        <h2 className="font-heading text-5xl md:text-7xl font-900 mb-10 leading-tight fade-up fade-up-2 tracking-tight">
          RETO <span className="text-primary relative inline-block">CONTRARRELOJ<div className="absolute -bottom-2 left-0 w-full h-2 bg-primary/30 rounded-full blur-sm"></div></span>
        </h2>

        <BentoCard accent className="p-8 md:p-10 mb-8 fade-up fade-up-3">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
              <Timer className="w-7 h-7 text-primary" />
            </div>
            <div>
              <p className="font-heading text-2xl md:text-3xl font-800 text-foreground mb-4">3 minutos exactos</p>
              <ul className="space-y-3 text-xl text-muted-foreground font-medium leading-relaxed">
                <li>Abrid la web, Instagram o el último email comercial de vuestra marca.</li>
                <li>Copiad un párrafo y pegadlo en el chat del aula — solo el texto, sin decir de quién es.</li>
                <li>
                  <span className="text-foreground font-800">Cronómetro en pantalla.</span> Generad volumen: cuantos más fragmentos, mejor el juego.
                </li>
              </ul>
            </div>
          </div>
        </BentoCard>

        <p className="text-lg text-muted-foreground font-medium flex items-center gap-2 fade-up fade-up-4 bg-muted/50 w-fit px-6 py-3 rounded-full mt-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Guion: lee 5–6 textos en voz alta, sin atribución. Ritmo ágil; pausa 1 s entre lecturas.
        </p>
      </div>
      <SlideNumber current={3} total={total || 24} />
    </SlideShell>
  );
}
