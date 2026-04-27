import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';

export default function Slide08ThreeBrands({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Referencias en pantalla</p>

        <h2 className="font-heading text-4xl md:text-5xl font-900 mb-10 leading-tight fade-up fade-up-2 tracking-tight">
          TRES MARCAS,<br/><span className="text-primary">TRES PERSONALIDADES</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-up fade-up-3">
          <BentoCard className="flex flex-col border-yellow-400/30 hover:border-yellow-400/60 hover:shadow-yellow-400/10">
            <div className="w-12 h-12 rounded-xl bg-yellow-400/20 flex items-center justify-center mb-6">
              <span className="text-2xl font-heading font-900 text-yellow-600">M</span>
            </div>
            <h3 className="font-heading text-2xl font-900 text-foreground mb-3">Mailchimp</h3>
            <p className="text-lg text-muted-foreground leading-relaxed flex-1">
              Juguetón, desenfadado, usa humor incluso en los mensajes de error.
            </p>
            <div className="mt-6 pt-4 border-t border-border">
              <span className="text-sm font-bold uppercase tracking-widest text-yellow-500">Divertido</span>
            </div>
          </BentoCard>

          <BentoCard className="flex flex-col border-slate-300/50 hover:border-slate-400 hover:shadow-slate-400/10 dark:border-slate-700">
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6">
              <span className="text-2xl font-heading font-900 text-slate-600 dark:text-slate-300">A</span>
            </div>
            <h3 className="font-heading text-2xl font-900 text-foreground mb-3">Apple</h3>
            <p className="text-lg text-muted-foreground leading-relaxed flex-1">
              Limpio, aspiracional. Dice menos, pero dice mejor. Nunca "grita".
            </p>
            <div className="mt-6 pt-4 border-t border-border">
              <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Minimalista</span>
            </div>
          </BentoCard>

          <BentoCard accent className="flex flex-col bg-gradient-to-br from-emerald-500/10 to-transparent border-emerald-500/30 hover:border-emerald-500/60 hover:shadow-emerald-500/10">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
              <span className="text-2xl font-heading font-900 text-emerald-600">P</span>
            </div>
            <h3 className="font-heading text-2xl font-900 text-foreground mb-3">Patagonia</h3>
            <p className="text-lg text-muted-foreground leading-relaxed flex-1">
              Activista, honesto, desafiante con el status quo y transparente.
            </p>
            <div className="mt-6 pt-4 border-t border-emerald-500/20">
              <span className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Rebelde</span>
            </div>
          </BentoCard>
        </div>
      </div>
      <SlideNumber current={8} total={total || 24} />
    </SlideShell>
  );
}
