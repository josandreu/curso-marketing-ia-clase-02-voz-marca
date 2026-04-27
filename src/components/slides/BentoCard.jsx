export default function BentoCard({ children, className = "", accent = false }) {
  return (
    <div className={`rounded-[2rem] p-8 transition-all duration-500 relative overflow-hidden group
      ${accent 
        ? 'bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10' 
        : 'bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-white/40 dark:border-white/10 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1'
      } ${className}`}
    >
      {accent && (
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[60px] -mr-20 -mt-20 transition-transform group-hover:scale-150 duration-700 pointer-events-none" />
      )}
      {!accent && (
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-[40px] -ml-10 -mb-10 transition-transform group-hover:scale-150 duration-700 pointer-events-none" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}