export default function NewsSkeleton() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="pt-20" />

      {/* ── FEATURED CAROUSEL ── */}
      <section className="px-6 pt-8 pb-10">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative w-full bg-gray-100 rounded-2xl overflow-hidden animate-pulse"
            style={{ height: 'clamp(280px, 50vh, 520px)' }}
          >
            {/* Category badge + headline at bottom left */}
            <div className="absolute bottom-8 left-8 space-y-3 w-1/2">
              <div className="h-5 w-24 bg-gray-200 rounded-full" />
              <div className="h-8 w-full bg-gray-200 rounded-lg" />
              <div className="h-8 w-3/4 bg-gray-200 rounded-lg" />
              <div className="h-4 w-32 bg-gray-200 rounded" />
            </div>
            {/* Carousel dots */}
            <div className="absolute bottom-8 right-8 flex gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className={`rounded-full bg-gray-300 ${i === 0 ? 'w-6 h-2' : 'w-2 h-2'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER / SORT BAR ── */}
      <section className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex gap-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-8 w-24 bg-gray-100 rounded-full animate-pulse" />
            ))}
          </div>
          <div className="h-8 w-32 bg-gray-100 rounded-full animate-pulse" />
        </div>
      </section>

      {/* ── ARTICLES GRID ── */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-gray-100 animate-pulse"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="aspect-video bg-gray-100" />
              <div className="p-5 space-y-3">
                <div className="h-5 w-20 bg-gray-100 rounded-full" />
                <div className="h-5 w-full bg-gray-100 rounded" />
                <div className="h-5 w-4/5 bg-gray-100 rounded" />
                <div className="h-3 w-full bg-gray-100 rounded mt-1" />
                <div className="h-3 w-5/6 bg-gray-100 rounded" />
                <div className="pt-3 border-t border-gray-100">
                  <div className="h-3 w-24 bg-gray-100 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
