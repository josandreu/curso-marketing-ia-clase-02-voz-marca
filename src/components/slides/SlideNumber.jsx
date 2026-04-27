export default function SlideNumber({ current, total, light = false }) {
  return (
    <div className={`absolute bottom-6 right-8 font-heading text-sm tracking-widest ${light ? 'text-white/40' : 'text-muted-foreground/40'}`}>
      <span className={light ? 'text-white/80' : 'text-foreground/60'}>{String(current).padStart(2, '0')}</span>
      <span className="mx-1">/</span>
      <span>{String(total).padStart(2, '0')}</span>
    </div>
  );
}