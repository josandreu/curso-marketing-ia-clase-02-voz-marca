import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';

const contexts = [
  'Saludo email a nuevo contacto',
  'Queja pública en redes',
  'Descripción producto/servicio web',
  'Oferta o promoción',
  'Post Instagram',
  'Post LinkedIn',
  'Story Instagram',
  'Asunto email marketing',
  'Bio de perfil',
  'WhatsApp Business',
  'Presentación en evento/reunión',
  'Comentario positivo en redes',
];

export default function Slide15Step3Prompt({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-2 fade-up fade-up-1">Prompt — 12 contextos</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start fade-up fade-up-2">
          <div className="bg-white border-2 border-primary/10 rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.06)]">
            <div className="bg-primary/5 px-6 py-3 border-b border-primary/10 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/40" />
              <span className="font-mono text-xs text-primary/40 font-bold uppercase tracking-[0.2em] ml-2">Paso 3</span>
            </div>
            <div className="p-6 font-mono text-[15px] md:text-[18px] leading-relaxed text-foreground/80 max-h-[38vh] overflow-y-auto">
              <p className="text-primary/70 mb-2">Basándote en la personalidad definida: [pegar paso 2]</p>
              <p className="mb-2">Tabla con columnas:</p>
              <p className="font-bold">«ASÍ SÍ HABLAMOS» | «ASÍ NO HABLAMOS»</p>
              <p className="mt-2">12 filas, una por contexto (→ lista al lado). Ejemplos concretos por fila. Markdown.</p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-3xl border border-border/50 p-6 max-h-[44vh] overflow-y-auto backdrop-blur-sm">
            <p className="font-heading text-sm font-900 uppercase text-primary/80 tracking-widest mb-4">Checklist de contextos</p>
            <ol className="list-decimal pl-5 space-y-2 text-base text-foreground/80 font-medium leading-relaxed">
              {contexts.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <SlideNumber current={15} total={total || 24} />
    </SlideShell>
  );
}
