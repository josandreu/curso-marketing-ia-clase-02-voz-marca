import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';

export default function Slide11Step1Prompt({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Prompt — ChatGPT</p>

        <h2 className="font-heading text-4xl md:text-6xl font-900 mb-6 leading-tight fade-up fade-up-2 tracking-tight">
          DIAGNÓSTICO DE <span className="text-primary">VOZ</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-8 fade-up fade-up-2 font-medium">Pega un texto real de marca. Cuanto más representativo, mejor.</p>

        <div className="bg-white border-2 border-primary/10 rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.06)] fade-up fade-up-3">
          <div className="bg-primary/5 px-6 py-3 border-b border-primary/10 flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/40" />
            <span className="font-mono text-xs text-primary/40 font-bold ml-2 uppercase tracking-[0.2em]">Paso 1</span>
          </div>
          <div className="p-6 max-h-[42vh] overflow-y-auto font-mono text-[15px] md:text-[18px] leading-relaxed text-foreground/80">
            <p className="text-primary/70 mb-3">Eres un consultor de branding especializado en análisis de comunicación de marca.</p>
            <p className="mb-3">Lee este texto de una marca real y haz un diagnóstico de su voz:</p>
            <p>1. ¿Qué personalidad transmite? (3 adjetivos)</p>
            <p>2. ¿Qué nivel de diferenciación tiene? (1–10: 1 = genérico, 10 = inconfundible)</p>
            <p>3. ¿Qué emociones provoca en el lector?</p>
            <p>4. ¿A qué tipo de audiencia parece dirigirse?</p>
            <p className="mb-3">5. ¿Qué le falta para ser memorable y diferente a la competencia?</p>
            <p className="text-primary font-bold">Texto a analizar: [pegar texto]</p>
          </div>
        </div>
      </div>
      <SlideNumber current={11} total={total || 24} />
    </SlideShell>
  );
}
