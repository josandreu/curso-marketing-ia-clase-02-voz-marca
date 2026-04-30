import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { Target, FileText, Sparkles } from 'lucide-react';

export default function Slide02Objectives({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Clase 1.2</p>

        <h2 className="font-heading text-4xl md:text-6xl font-900 mb-12 leading-tight fade-up fade-up-2 tracking-tight">
          OBJETIVO Y <span className="text-primary">ENTREGABLE</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 fade-up fade-up-3">
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-900 uppercase tracking-wide text-primary mb-3">El Objetivo</h3>
                <p className="text-xl text-foreground/80 leading-relaxed font-medium">
                  Crear una guía de tono y personalidad completa, con arquetipo, tabla por contextos y ejemplos con IA — lista para cualquier canal.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-900 uppercase tracking-wide text-primary mb-3">El Documento</h3>
                <p className="text-xl text-foreground/80 leading-relaxed font-medium">
                  Arquetipo + 5 adjetivos + voz por canal + tabla "Así sí / Así no" + 5 piezas reales + marcas referencia.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-900 uppercase tracking-wide text-primary mb-3">La Herramienta</h3>
                <p className="text-xl text-foreground/80 leading-relaxed font-medium">
                  ChatGPT (diagnóstico, personalidad, tabla, piezas y "traductor de tono" al cierre). Nivel básico.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <BentoCard className="border-l-4 border-l-primary p-10 bg-primary/5 shadow-xl shadow-primary/5">
              <p className="text-2xl text-foreground font-medium leading-relaxed">
                <strong className="font-900 block text-primary uppercase tracking-[0.2em] text-xs mb-5">Conexión 1.1</strong>
                Pegarás el brief, el mapa de empatía y el elevator pitch de la sesión anterior en los prompts de personalidad.
              </p>
            </BentoCard>
          </div>
        </div>
      </div>
      <SlideNumber current={2} total={total || 24} />
    </SlideShell>
  );
}
