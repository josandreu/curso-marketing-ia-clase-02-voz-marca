import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { Wand2, ExternalLink } from 'lucide-react';

export default function Slide23TranslatorCTA({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Tip · ~10 min · «Traductor de tono»</p>

        <h2 className="font-heading text-4xl md:text-6xl font-900 mb-8 leading-tight fade-up fade-up-2 tracking-tight">
          REESCRITURA <span className="text-primary">EN 1 CLIC</span>
        </h2>

        <div className="bg-white border-2 border-primary/10 rounded-3xl overflow-hidden mb-8 fade-up fade-up-3 shadow-[0_30px_60px_rgba(0,0,0,0.06)]">
          <div className="bg-primary/5 px-6 py-3 border-b border-primary/10 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Wand2 className="w-4 h-4 text-primary" />
            </div>
            <span className="font-mono text-xs text-primary/60 font-bold uppercase tracking-[0.2em] ml-2">Prompt resumido</span>
          </div>
          <div className="p-6 md:p-8 font-mono text-[15px] md:text-[18px] leading-relaxed text-foreground/80 max-h-[30vh] overflow-y-auto">
            <p className="mb-3">Tengo un texto genérico de mi web y quiero que suene a mi marca.</p>
            <p className="text-primary/80 mb-1">MI GUÍA: [5 adjetivos + arquetipo + 3 reglas de la tabla]</p>
            <p className="text-primary/80 mt-3 mb-1">TEXTO ORIGINAL: [pegar]</p>
            <p className="mt-4 font-bold text-foreground">
              Reescribe manteniendo el mensaje central, 100% tono de marca. Persona, no plantilla. Profesionalidad + personalidad.
            </p>
          </div>
        </div>

        <BentoCard accent className="p-6 md:p-8 mb-6 fade-up fade-up-4 border-l-4 border-l-primary/50">
          <p className="font-heading text-sm font-900 text-primary uppercase mb-4 tracking-widest">CTA antes de la próxima clase</p>
          <p className="text-xl text-foreground leading-relaxed font-medium">
            Elegid el texto publicado <strong className="text-primary font-bold">más aburrido</strong>. Reescribidlo con el traductor de tono. Traed el antes / después.
          </p>
        </BentoCard>

        <a
          href="https://www.youtube.com/watch?v=gUyfGXyMTZ0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:underline fade-up fade-up-5"
        >
          <ExternalLink className="w-4 h-4" />
          Referencia YouTube: prompts marketing y ventas (branding)
        </a>
      </div>
      <SlideNumber current={23} total={total || 24} />
    </SlideShell>
  );
}
