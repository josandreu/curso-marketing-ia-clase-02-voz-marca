export default function GlassCard({ children, className = "" }) {
  return (
    <div className={`glass rounded-2xl p-6 shadow-lg shadow-primary/5 ${className}`}>
      {children}
    </div>
  );
}