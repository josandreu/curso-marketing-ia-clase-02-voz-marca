import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';

const steps = [
  { n: '01', t: 'Diagnóstico', d: 'Texto real → espejo de voz con ChatGPT (~10 min)' },
  { n: '02', t: 'Personalidad', d: 'Arquetipo Jung + 5 adjetivos + marca como persona (~15 min)' },
  { n: '03', t: 'Tabla de tono', d: '12 filas “Así sí / Así no” por contextos (~15 min)' },
  { n: '04', t: '5 piezas', d: 'Bio IG, Sobre nosotros, email, DM precio, LinkedIn (~15 min)' },
];

export default function Slide09WorkshopRoadmap({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">[0:35 – 1:30] Ejecución guiada</p>

        <h2 className="font-heading text-5xl md:text-6xl font-900 mb-12 leading-tight fade-up fade-up-2 tracking-tight">
          CUATRO PASOS <span className="text-primary relative inline-block">EN CHATGPT<div className="absolute -bottom-2 left-0 w-full h-2 bg-primary/30 rounded-full blur-sm"></div></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-up fade-up-3">
          {steps.map((s) => (
            <BentoCard key={s.n} className="p-8 flex gap-6 items-start hover:-translate-y-2 group transition-all duration-500">
              <span className="font-heading text-5xl font-900 text-primary/20 group-hover:text-primary/40 transition-colors drop-shadow-md">{s.n}</span>
              <div>
                <h3 className="font-heading text-2xl font-900 text-foreground mb-2">{s.t}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">{s.d}</p>
              </div>
            </BentoCard>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground fade-up fade-up-4 font-medium">
          Después: trabajo autónomo, revisión con 2 voluntarios, sprint de documento (~2h 25 min bloque práctico total).
        </p>
      </div>
      <SlideNumber current={9} total={total || 24} />
    </SlideShell>
  );
}
