import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';

export default function Slide18Step4Prompt({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Prompt — ChatGPT</p>

        <h2 className="font-heading text-4xl md:text-6xl font-900 mb-6 leading-tight fade-up fade-up-2 tracking-tight">
          CINCO <span className="text-primary">FORMATOS</span>
        </h2>

        <div className="bg-white border-2 border-primary/10 rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.06)] fade-up fade-up-3">
          <div className="bg-primary/5 px-6 py-3 border-b border-primary/10 flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/40" />
            <span className="font-mono text-xs text-primary/40 font-bold ml-2 uppercase tracking-[0.2em]">Paso 4</span>
          </div>
          <div className="p-6 max-h-[42vh] overflow-y-auto font-mono text-[15px] md:text-[18px] leading-relaxed text-foreground/80">
            <p className="text-primary/70 mb-2">Usando personalidad + tabla: [pegar ambos]</p>
            <p className="mb-3 font-bold text-foreground">Escribe 5 piezas reales:</p>
            <p>1. Bio Instagram (máx. 150 caracteres): quién + qué + para quién + personalidad</p>
            <p>2. Primer párrafo &quot;Sobre nosotros&quot;: gancho + misión + diferencial</p>
            <p>3. Asunto + 3 primeras líneas email de bienvenida</p>
            <p>4. Respuesta DM: cliente pregunta precio (profesional + humano, no robot)</p>
            <p className="mb-3">5. Post LinkedIn: aprendizaje profesional + reflexión + CTA natural</p>
            <p className="italic text-foreground">Criterio: si taparas el nombre, ¿reconocerías la marca solo por el tono?</p>
          </div>
        </div>
      </div>
      <SlideNumber current={18} total={total || 24} />
    </SlideShell>
  );
}
