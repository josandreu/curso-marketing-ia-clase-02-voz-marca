import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { Smile, GraduationCap, Users, Zap } from 'lucide-react';

export default function Slide07DinnerFramework({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Framework rápido</p>

        <h2 className="font-heading text-4xl md:text-6xl font-900 mb-10 leading-tight fade-up fade-up-2 tracking-tight">
          LA MARCA EN UNA <span className="text-primary relative inline-block">CENA<div className="absolute -bottom-2 left-0 w-full h-2 bg-primary/30 rounded-full blur-sm"></div></span><br/>CON DESCONOCIDOS
        </h2>

        <BentoCard accent className="mb-8 fade-up fade-up-3 border-2 border-primary/20 bg-gradient-to-r from-primary/10 to-transparent">
          <h3 className="text-xl md:text-2xl font-800 text-foreground mb-6 leading-relaxed">
            Si tu marca fuera una persona sentada en una mesa, ¿cómo se comportaría?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/60 dark:bg-black/40 p-6 rounded-2xl border border-white/50 dark:border-white/10 flex flex-col items-center text-center">
              <Smile className="w-10 h-10 text-primary mb-4" />
              <p className="font-heading font-800 text-lg text-foreground">La graciosa</p>
            </div>
            <div className="bg-white/60 dark:bg-black/40 p-6 rounded-2xl border border-white/50 dark:border-white/10 flex flex-col items-center text-center">
              <GraduationCap className="w-10 h-10 text-primary mb-4" />
              <p className="font-heading font-800 text-lg text-foreground">La experta</p>
            </div>
            <div className="bg-white/60 dark:bg-black/40 p-6 rounded-2xl border border-white/50 dark:border-white/10 flex flex-col items-center text-center">
              <Users className="w-10 h-10 text-primary mb-4" />
              <p className="font-heading font-800 text-lg text-foreground">La cercana</p>
            </div>
            <div className="bg-white/60 dark:bg-black/40 p-6 rounded-2xl border border-white/50 dark:border-white/10 flex flex-col items-center text-center">
              <Zap className="w-10 h-10 text-primary mb-4" />
              <p className="font-heading font-800 text-lg text-foreground">La rebelde</p>
            </div>
          </div>
        </BentoCard>

        <p className="text-lg text-muted-foreground font-medium flex items-center gap-2 fade-up fade-up-4 bg-muted/50 w-fit px-6 py-3 rounded-full">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Engagement: pedid que respondan en chat con una palabra que represente a su marca.
        </p>
      </div>
      <SlideNumber current={7} total={total || 24} />
    </SlideShell>
  );
}
