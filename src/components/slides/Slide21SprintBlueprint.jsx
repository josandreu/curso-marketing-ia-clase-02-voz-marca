import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';

const sections = [
  'ARQUETIPO (+ por qué + marca referencia)',
  'PERSONALIDAD en 5 adjetivos',
  'LA MARCA COMO PERSONA',
  'VALORES FUNDAMENTALES (top 3 + frases ejemplo)',
  'VOZ POR CANAL: Instagram, LinkedIn, Email, Web, WhatsApp',
  'TABLA «SÍ / NO» (12 contextos)',
  'EJEMPLOS DE REFERENCIA (5 piezas)',
  'MARCAS QUE ADMIRO POR SU TONO (2–3 + qué copiar)',
];

export default function Slide21SprintBlueprint({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">[2:10 – 2:35] Sprint final</p>

        <h2 className="font-heading text-4xl md:text-6xl font-900 mb-8 leading-tight fade-up fade-up-2 tracking-tight">
          DOCUMENTO <span className="text-primary">GUÍA DE TONO</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-4 fade-up fade-up-2 font-medium">Notion, Google Docs o el soporte que prefieran.</p>

        <div className="bg-white border-2 border-primary/10 rounded-3xl p-8 md:p-10 fade-up fade-up-3 shadow-[0_30px_60px_rgba(0,0,0,0.06)] max-h-[46vh] overflow-y-auto">
          <p className="font-heading text-sm text-primary font-900 uppercase tracking-widest mb-6 border-b border-primary/10 pb-4">Estructura del entregable</p>
          <ol className="list-decimal pl-5 space-y-3 text-lg text-foreground/90 font-medium font-body marker:text-primary/50">
            {sections.map((s) => (
              <li key={s} className="leading-relaxed">{s}</li>
            ))}
          </ol>
        </div>
      </div>
      <SlideNumber current={21} total={total || 24} />
    </SlideShell>
  );
}
