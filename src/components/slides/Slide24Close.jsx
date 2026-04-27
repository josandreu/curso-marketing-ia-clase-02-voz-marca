import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';

export default function Slide24Close({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center items-center text-center px-8 md:px-16 overflow-hidden bg-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <h2 className="font-heading font-900 leading-[0.95] tracking-tighter text-foreground fade-up fade-up-1">
          <span className="block text-5xl md:text-7xl lg:text-8xl mb-4">SI NO DEFINÍS</span>
          <span className="block text-5xl md:text-7xl lg:text-8xl text-primary italic">CÓMO HABLÁIS…</span>
        </h2>

        <div className="h-px w-32 bg-border my-12 mx-auto fade-up fade-up-2 shadow-[0_0_10px_rgba(0,0,0,0.1)]" />

        <h2 className="font-heading font-900 leading-[0.95] tracking-tighter fade-up fade-up-3">
          <span className="block text-4xl md:text-6xl lg:text-7xl text-foreground mb-4 drop-shadow-md">LA IA SOLO OS DA</span>
          <span className="block text-4xl md:text-6xl lg:text-7xl text-muted-foreground/40">MÁS RUIDO GENÉRICO.</span>
        </h2>

        <div className="mt-14 fade-up fade-up-4 flex flex-col items-center">
          <div className="h-px w-12 bg-primary/20 mb-6" />
          <p className="font-mono text-sm tracking-[4px] text-muted-foreground uppercase font-bold">
            Marketing Inteligente con IA · Clase 1.2 · Módulo 1
          </p>
        </div>
      </div>
      <SlideNumber current={24} total={total || 24} />
    </SlideShell>
  );
}
