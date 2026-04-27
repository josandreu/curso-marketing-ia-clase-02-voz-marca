import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';

export default function Slide05ActivationInsight({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Insight</p>

        <h2 className="font-heading text-4xl md:text-6xl font-900 mb-10 leading-tight fade-up fade-up-2 tracking-tight">
          LA ANALOGÍA DE LA <span className="text-primary">CENA</span>
        </h2>

        <BentoCard accent className="p-10 mb-10 fade-up fade-up-3 bg-gradient-to-br from-primary/10 to-transparent border-t-2 border-t-primary/30">
          <p className="text-xl md:text-3xl font-900 text-foreground leading-tight tracking-tight">
            Si vuestros textos se pueden intercambiar entre marcas sin que nadie lo note, tenéis un{' '}
            <span className="text-primary bg-primary/10 px-2 rounded-lg italic">problema de voz</span>.
          </p>
          <p className="mt-6 text-2xl text-muted-foreground leading-relaxed font-medium">
            Imagina una cena donde todos hablan igual, con las mismas frases. Aburrido. Vuestra marca está haciendo eso en digital.
          </p>
        </BentoCard>

        <div className="h-px bg-border w-full my-8 fade-up fade-up-4" />

        <p className="text-xl md:text-2xl text-foreground font-medium fade-up fade-up-5 leading-relaxed">
          <span className="text-primary font-800">Transición:</span> en la clase anterior definisteis <strong>QUÉ</strong> problema resolvéis y{' '}
          <strong>PARA QUIÉN</strong>. Hoy definimos <strong>CÓMO</strong> habláis. Construiremos la guía de personalidad con IA — y al final, cada texto
          tendrá una voz inconfundible.
        </p>
      </div>
      <SlideNumber current={5} total={total || 24} />
    </SlideShell>
  );
}
