import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { Building2, ShoppingBag } from 'lucide-react';

export default function Slide16B2Variants({ total }) {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Personalización</p>

        <h2 className="font-heading text-5xl md:text-6xl font-900 mb-10 leading-tight fade-up fade-up-2 tracking-tight">
          VARIANTES <span className="text-primary relative inline-block">B2B<div className="absolute -bottom-2 left-0 w-full h-2 bg-primary/30 rounded-full blur-sm"></div></span> / <span className="text-accent relative inline-block">B2C<div className="absolute -bottom-2 left-0 w-full h-2 bg-accent/30 rounded-full blur-sm"></div></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-up fade-up-3">
          <BentoCard className="p-8 border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-heading text-3xl font-900">B2B</h3>
            </div>
            <ul className="text-lg text-muted-foreground space-y-3 list-disc pl-5 font-medium leading-relaxed">
              <li>Email a director de compras</li>
              <li>Propuesta comercial formal</li>
            </ul>
          </BentoCard>
          <BentoCard accent className="p-8 border-primary/20 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-3xl font-900 text-primary">B2C</h3>
            </div>
            <ul className="text-lg text-muted-foreground space-y-3 list-disc pl-5 font-medium leading-relaxed">
              <li>Respuesta a DM de seguidor</li>
              <li>Copy de packaging / punto de venta</li>
            </ul>
          </BentoCard>
        </div>

        <p className="mt-10 text-lg text-muted-foreground font-medium flex items-center gap-2 fade-up fade-up-4 bg-muted/50 w-fit px-6 py-3 rounded-full leading-relaxed">
          Añadir estas filas o sustituir las menos relevantes para vuestro modelo de negocio.
        </p>
      </div>
      <SlideNumber current={16} total={total || 24} />
    </SlideShell>
  );
}
