export function PageLoader() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center" role="status" aria-live="polite">
      <span className="flex gap-2" aria-hidden>
        {['bg-gblue', 'bg-gred', 'bg-gyellow', 'bg-ggreen'].map((c, i) => (
          <span key={c} className={`h-3 w-3 animate-bounce rounded-full ${c}`} style={{ animationDelay: `${i * 0.1}s` }} />
        ))}
      </span>
      <span className="sr-only">Loading page…</span>
    </div>
  );
}
