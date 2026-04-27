import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';

export default function Slide13Step2Prompt({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Prompt — ChatGPT</p>

        <h2 className="font-heading text-4xl md:text-6xl font-900 mb-6 leading-tight fade-up fade-up-2 tracking-tight">
          GUÍA DE <span className="text-primary">PERSONALIDAD</span>
        </h2>

        <div className="bg-white border-2 border-primary/10 rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.06)] fade-up fade-up-3">
          <div className="bg-primary/5 px-6 py-3 border-b border-primary/10 flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/40" />
            <span className="font-mono text-xs text-primary/40 font-bold ml-2 uppercase tracking-[0.2em]">Paso 2</span>
          </div>
          <div className="p-6 max-h-[44vh] overflow-y-auto font-mono text-[15px] md:text-[18px] leading-relaxed text-foreground/80">
            <p className="mb-2">Voy a definir la personalidad de mi marca para una guía de tono profesional.</p>
            <p className="text-primary/80 mb-2">CONTEXTO:</p>
            <p>— Mi negocio: [brief 1.1]</p>
            <p>— Mi cliente ideal: [empatía 1.1]</p>
            <p className="mb-3">— Mi propuesta de valor: [pitch 1.1]</p>
            <p className="font-bold text-foreground mb-1">1. ARQUETIPO (12 de Jung)</p>
            <p className="mb-2 text-[14px] md:text-[16px] opacity-80">
              Héroe, Sabio, Explorador, Rebelde, Mago, Amante, Bufón, Cuidador, Creador, Gobernante, Inocente, Hombre Corriente — explicar encaje + marca
              conocida de referencia.
            </p>
            <p className="font-bold text-foreground mb-1">2. CINCO ADJETIVOS</p>
            <p className="mb-2">Con 1 línea cada uno + ejemplo en comunicación.</p>
            <p className="font-bold text-foreground mb-1">3. MARCA COMO PERSONA</p>
            <p className="mb-2">Edad, vestuario, habla informal, humor, referente público.</p>
            <p className="font-bold text-foreground mb-1">4. VALORES (top 3)</p>
            <p>Con frase ejemplo en cada pieza. Formato: viñetas, lenguaje práctico.</p>
          </div>
        </div>
      </div>
      <SlideNumber current={13} total={total || 24} />
    </SlideShell>
  );
}
