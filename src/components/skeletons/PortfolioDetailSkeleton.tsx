export default function PortfolioDetailSkeleton() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="pt-20" />

      {/* ── META NAV ── */}
      <div className="px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="h-4 w-24 bg-gray-100 rounded-full animate-pulse" />
          <div className="h-4 w-4 bg-gray-100 rounded animate-pulse" />
          <div className="h-4 w-32 bg-gray-100 rounded-full animate-pulse" />
        </div>
      </div>

      {/* ── HERO IMAGE ── */}
      <section className="px-6 pb-10">
        <div className="max-w-7xl mx-auto">
          <div
            className="w-full bg-gray-100 rounded-2xl animate-pulse"
            style={{ height: 'clamp(320px, 70vh, 680px)' }}
          />
        </div>
      </section>

      {/* ── SPECS GRID ── */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 space-y-2">
            <div className="h-3 w-28 bg-gray-100 rounded-full animate-pulse" />
            <div className="h-7 w-48 bg-gray-100 rounded-lg animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-5 flex items-start gap-4 animate-pulse"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex-shrink-0" />
                <div className="space-y-2 flex-1">
                  <div className="h-3 w-1/2 bg-gray-200 rounded" />
                  <div className="h-4 w-3/4 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METRICS DASHBOARD ── */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 space-y-2">
            <div className="h-3 w-20 bg-gray-200 rounded-full animate-pulse" />
            <div className="h-7 w-40 bg-gray-200 rounded-lg animate-pulse" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 space-y-3 animate-pulse shadow-sm">
                <div className="w-8 h-8 bg-gray-100 rounded-lg" />
                <div className="h-10 w-3/4 bg-gray-100 rounded-lg" />
                <div className="h-3 w-full bg-gray-100 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 space-y-2">
            <div className="h-3 w-20 bg-gray-100 rounded-full animate-pulse" />
            <div className="h-7 w-36 bg-gray-100 rounded-lg animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
