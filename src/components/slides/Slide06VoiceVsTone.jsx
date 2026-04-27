import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';

export default function Slide06VoiceVsTone({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Bloque 2 · [0:20 – 0:35] Contexto</p>

        <h2 className="font-heading text-5xl md:text-7xl font-900 mb-12 leading-tight fade-up fade-up-2 tracking-tight flex items-center flex-wrap gap-4">
          VOZ <span className="text-muted-foreground/40 font-400 italic text-4xl">vs</span> <span className="text-primary bg-primary/10 px-6 py-2 rounded-3xl border border-primary/20">TONO</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-up fade-up-3">
          <BentoCard accent className="flex flex-col">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-heading text-3xl font-900 text-primary tracking-tight">Voz</h3>
              <div className="px-3 py-1 bg-primary/20 rounded-full text-sm font-bold text-primary uppercase tracking-[0.2em]">Identidad</div>
            </div>
            <p className="text-2xl md:text-3xl text-foreground font-medium leading-snug mb-8 flex-1">
              Personalidad <span className="text-primary font-900 bg-primary/10 px-2 py-0.5 rounded-lg">constante</span>.<br/>Quién eres siempre.
            </p>
            <div className="bg-white/50 dark:bg-black/20 p-5 rounded-2xl border border-white/40 dark:border-white/5">
              <p className="text-sm font-mono uppercase text-muted-foreground tracking-[0.2em] mb-2 font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Ejemplo: Apple
              </p>
              <p className="text-lg text-foreground font-medium leading-relaxed">Minimalista y aspiracional; nunca "grita".</p>
            </div>
          </BentoCard>

          <BentoCard className="flex flex-col">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-heading text-3xl font-900 text-foreground tracking-tight">Tono</h3>
              <div className="px-3 py-1 bg-muted rounded-full text-sm font-bold text-muted-foreground uppercase tracking-[0.2em]">Adaptación</div>
            </div>
            <p className="text-2xl md:text-3xl text-foreground font-medium leading-snug mb-8 flex-1">
              Cómo <span className="text-foreground font-900 bg-border/50 px-2 py-0.5 rounded-lg">adaptas</span> esa voz.<br/>Varía según la situación.
            </p>
            <div className="bg-muted/30 p-5 rounded-2xl border border-border/50">
              <p className="text-sm font-mono uppercase text-muted-foreground tracking-[0.2em] mb-2 font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"></span> Regla de oro
              </p>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">No hablas igual en celebración que en disculpa. La voz sigue, el tono se ajusta.</p>
            </div>
          </BentoCard>
        </div>
      </div>
      <SlideNumber current={6} total={total || 24} />
    </SlideShell>
  );
}
