export default function PortfolioSkeleton() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="pt-20" />

      {/* ── HERO ── */}
      <section className="px-6 pb-10 pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-100">
            <div className="h-4 w-40 bg-gray-100 rounded-full animate-pulse" />
            <div className="h-3 w-28 bg-gray-100 rounded-full animate-pulse" />
          </div>
          <div
            className="w-full bg-gray-100 rounded-2xl animate-pulse"
            style={{ height: 'clamp(260px, 50vh, 500px)' }}
          />
          <div className="mt-6 h-4 w-48 bg-gray-100 rounded animate-pulse" />
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <section className="px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-9 w-28 bg-gray-100 rounded-full animate-pulse" />
            ))}
          </div>
          <div className="flex gap-2">
            <div className="w-9 h-9 bg-gray-100 rounded-xl animate-pulse" />
            <div className="w-9 h-9 bg-gray-100 rounded-xl animate-pulse" />
          </div>
        </div>
      </section>

      {/* ── PROJECT CARDS ── */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-gray-100 animate-pulse"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="aspect-video bg-gray-100" />
              <div className="p-6 space-y-3">
                <div className="h-3 w-20 bg-gray-100 rounded-full" />
                <div className="h-5 w-full bg-gray-100 rounded" />
                <div className="h-5 w-3/4 bg-gray-100 rounded" />
                <div className="flex gap-2 mt-3">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div key={j} className="h-6 w-16 bg-gray-100 rounded-full" />
                  ))}
                </div>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="h-3 w-20 bg-gray-100 rounded-full" />
                  <div className="h-3 w-16 bg-gray-100 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 space-y-2">
            <div className="h-3 w-20 bg-gray-100 rounded-full animate-pulse" />
            <div className="h-7 w-48 bg-gray-100 rounded-lg animate-pulse" />
          </div>
          <div className="relative h-64 bg-gray-100 rounded-2xl animate-pulse overflow-hidden">
            {/* Dot placeholders */}
            {[
              { top: '30%', left: '45%' },
              { top: '55%', left: '35%' },
              { top: '45%', left: '60%' },
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 bg-gray-300 rounded-full"
                style={{ top: pos.top, left: pos.left }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
