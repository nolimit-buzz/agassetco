export default function NewsDetailSkeleton() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="pt-20" />

      {/* ── META NAV ── */}
      <div className="px-6 py-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="h-4 w-24 bg-gray-100 rounded-full animate-pulse" />
          <div className="h-6 w-20 bg-gray-100 rounded-full animate-pulse" />
          <div className="h-4 w-28 bg-gray-100 rounded-full animate-pulse" />
        </div>
      </div>

      {/* ── HEADLINE ── */}
      <section className="px-6 pb-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="h-10 w-full bg-gray-100 rounded-xl animate-pulse" />
          <div className="h-10 w-4/5 bg-gray-100 rounded-xl animate-pulse" />
          <div className="h-10 w-3/5 bg-gray-100 rounded-xl animate-pulse" />
          <div className="h-4 w-36 bg-gray-100 rounded animate-pulse mt-2" />
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <section className="px-6 pb-10">
        <div className="max-w-4xl mx-auto">
          <div
            className="w-full bg-gray-100 rounded-2xl animate-pulse"
            style={{ height: 'clamp(240px, 50vh, 480px)' }}
          />
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <section className="px-6 py-6">
        <div className="max-w-2xl mx-auto space-y-3">
          {[100, 95, 88, 100, 72, 90, 85, 100].map((w, i) => (
            <div
              key={i}
              className="h-4 bg-gray-100 rounded animate-pulse"
              style={{ width: `${w}%`, animationDelay: `${i * 40}ms` }}
            />
          ))}
          {/* Blockquote */}
          <div className="my-8 pl-5 border-l-4 border-gray-200 space-y-2">
            <div className="h-5 w-full bg-gray-100 rounded animate-pulse" />
            <div className="h-5 w-4/5 bg-gray-100 rounded animate-pulse" />
            <div className="h-4 w-32 bg-gray-100 rounded animate-pulse mt-2" />
          </div>
          {[92, 100, 78, 95, 83, 100, 68, 90].map((w, i) => (
            <div
              key={`b${i}`}
              className="h-4 bg-gray-100 rounded animate-pulse"
              style={{ width: `${w}%`, animationDelay: `${i * 40}ms` }}
            />
          ))}
        </div>
      </section>

      {/* ── RELATED / LOOKING AHEAD ── */}
      <section className="px-6 py-10">
        <div className="max-w-2xl mx-auto space-y-3">
          <div className="h-6 w-1/3 bg-gray-100 rounded-lg animate-pulse" />
          <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse" />
          <div className="h-4 w-3/4 bg-gray-100 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
        </div>
      </section>
    </div>
  );
}
