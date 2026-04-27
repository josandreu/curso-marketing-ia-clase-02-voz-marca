import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { HelpCircle, Search, AlertCircle } from 'lucide-react';

export default function Slide04ActivationGame({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Activación</p>

        <h2 className="font-heading text-5xl md:text-6xl font-900 mb-10 leading-tight fade-up fade-up-2 tracking-tight">
          ¿DE QUIÉN ES <span className="text-primary relative inline-block">CADA TEXTO?<div className="absolute -bottom-2 left-0 w-full h-2 bg-primary/30 rounded-full blur-sm"></div></span>
        </h2>

        <BentoCard className="p-8 mb-6 fade-up fade-up-3">
          <div className="flex gap-4 items-start">
            <HelpCircle className="w-10 h-10 text-primary shrink-0 mt-1" />
            <div>
              <p className="text-lg font-800 text-foreground mb-2">Pregunta al grupo</p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                ¿Alguien puede identificar a quién pertenece cada texto? ¿Se nota una <strong className="text-foreground">personalidad</strong> detrás?
              </p>
            </div>
          </div>
        </BentoCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-up fade-up-4">
          <BentoCard className="py-8 px-6 text-center border-slate-200 dark:border-slate-800 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-slate-500" />
            </div>
            <p className="text-sm font-mono uppercase text-slate-500 mb-2 tracking-widest font-bold">Resultado Habitual</p>
            <p className="text-foreground font-900 text-2xl mb-3">Intercambiables</p>
            <p className="text-lg text-muted-foreground leading-relaxed">No se distingue la marca: suena a &quot;empresa&quot; genérica.</p>
          </BentoCard>
          <BentoCard accent className="py-8 px-6 text-center border-primary/30 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6 text-primary" />
            </div>
            <p className="text-sm font-mono uppercase text-primary mb-2 tracking-widest font-bold">Diagnóstico</p>
            <p className="text-primary font-900 text-2xl mb-3">Problema de voz</p>
            <p className="text-lg text-foreground/80 font-medium leading-relaxed">No es falta de contenido: es falta de personalidad verbal.</p>
          </BentoCard>
        </div>
      </div>
      <SlideNumber current={4} total={total || 24} />
    </SlideShell>
  );
}
