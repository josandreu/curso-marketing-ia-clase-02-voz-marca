import { Timer } from 'lucide-react';
import BentoCard from './BentoCard';
import SlideNumber from './SlideNumber';
import SlideShell from './SlideShell';

export default function Slide03ActivationTimer({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Bloque 1 — Activación · 15 min</p>

        <h2 className="font-heading text-5xl md:text-7xl font-900 mb-10 leading-tight fade-up fade-up-2 tracking-tight">
          RETO <span className="text-primary relative inline-block">CONTRARRELOJ<div className="absolute -bottom-2 left-0 w-full h-2 bg-primary/30 rounded-full blur-sm"></div></span>
        </h2>

        <BentoCard accent className="p-8 md:p-12 mb-8 fade-up fade-up-3 shadow-2xl shadow-primary/5">
          <div className="flex items-start gap-8">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0">
              <Timer className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="font-heading text-3xl md:text-4xl font-900 text-foreground mb-6">3 minutos exactos</p>
              <ul className="space-y-4 text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
                <li>Abrid la web, Instagram o el último email comercial de vuestra marca.</li>
                <li>Copiad un párrafo y pegadlo en el chat del aula — solo el texto, sin decir de quién es.</li>
                <li>
                  <span className="text-foreground font-900">Cronómetro en pantalla.</span> Generad volumen: cuantos más fragmentos, mejor el juego.
                </li>
              </ul>
            </div>
          </div>
        </BentoCard>
      </div>
      <SlideNumber current={3} total={total || 24} />
    </SlideShell>
  );
}
