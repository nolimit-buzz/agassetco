export default function HomeSkeleton() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* ── HERO ── */}
      <section className="relative w-full bg-gray-100 animate-pulse" style={{ height: '100svh' }}>
        <div className="absolute bottom-12 left-8 right-8 max-w-7xl mx-auto space-y-4">
          <div className="h-3 w-28 bg-gray-200 rounded-full" />
          <div className="h-14 w-3/4 bg-gray-200 rounded-xl" />
          <div className="h-14 w-1/2 bg-gray-200 rounded-xl" />
          <div className="h-5 w-96 bg-gray-200 rounded-lg mt-4" />
          <div className="flex gap-3 mt-6">
            <div className="h-12 w-40 bg-gray-200 rounded-full" />
            <div className="h-12 w-32 bg-gray-200 rounded-full" />
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="py-8 border-y border-gray-100 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 overflow-hidden">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-8 w-24 bg-gray-100 rounded-md animate-pulse flex-shrink-0" />
          ))}
        </div>
      </section>

      {/* ── INTRODUCTION ── */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            <div className="h-3 w-24 bg-gray-100 rounded-full animate-pulse" />
            <div className="h-10 w-3/4 bg-gray-100 rounded-lg animate-pulse" />
            <div className="h-10 w-1/2 bg-gray-100 rounded-lg animate-pulse" />
            <div className="h-4 w-full bg-gray-100 rounded animate-pulse mt-4" />
            <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
            <div className="h-4 w-4/5 bg-gray-100 rounded animate-pulse" />
            <div className="h-12 w-40 bg-gray-100 rounded-full animate-pulse mt-6" />
          </div>
          <div className="h-80 bg-gray-100 rounded-2xl animate-pulse" />
        </div>
      </section>

      {/* ── PROBLEM / SOLUTION ── */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Dark card */}
          <div className="bg-gray-800 rounded-3xl p-10 space-y-5 animate-pulse">
            <div className="h-3 w-20 bg-gray-600 rounded-full" />
            <div className="h-8 w-3/4 bg-gray-600 rounded-lg" />
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex-shrink-0" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-3/4 bg-gray-600 rounded" />
                  <div className="h-3 w-full bg-gray-700 rounded" />
                </div>
              </div>
            ))}
          </div>
          {/* Light card */}
          <div className="bg-gray-50 rounded-3xl p-10 space-y-5 animate-pulse">
            <div className="h-3 w-20 bg-gray-200 rounded-full" />
            <div className="h-8 w-3/4 bg-gray-200 rounded-lg" />
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-3/4 bg-gray-200 rounded" />
                  <div className="h-3 w-full bg-gray-100 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HUB & SOLUTIONS ── */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div className="space-y-2">
              <div className="h-3 w-24 bg-gray-100 rounded-full animate-pulse" />
              <div className="h-8 w-56 bg-gray-100 rounded-lg animate-pulse" />
            </div>
            <div className="h-8 w-28 bg-gray-100 rounded-full animate-pulse" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 space-y-3 animate-pulse">
                <div className="w-10 h-10 bg-gray-200 rounded-xl" />
                <div className="h-5 w-3/4 bg-gray-200 rounded" />
                <div className="h-3 w-full bg-gray-100 rounded" />
                <div className="h-3 w-5/6 bg-gray-100 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ── */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div className="space-y-2">
              <div className="h-3 w-20 bg-gray-100 rounded-full animate-pulse" />
              <div className="h-8 w-48 bg-gray-100 rounded-lg animate-pulse" />
            </div>
            <div className="h-8 w-28 bg-gray-100 rounded-full animate-pulse" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden animate-pulse">
                <div className="aspect-video bg-gray-100" />
                <div className="p-5 space-y-2">
                  <div className="h-3 w-20 bg-gray-100 rounded-full" />
                  <div className="h-5 w-full bg-gray-100 rounded" />
                  <div className="h-3 w-4/5 bg-gray-100 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWS FEED ── */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div className="space-y-2">
              <div className="h-3 w-20 bg-gray-100 rounded-full animate-pulse" />
              <div className="h-8 w-40 bg-gray-100 rounded-lg animate-pulse" />
            </div>
            <div className="h-8 w-24 bg-gray-100 rounded-full animate-pulse" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 animate-pulse">
                <div className="aspect-video bg-gray-100" />
                <div className="p-5 space-y-2">
                  <div className="h-3 w-16 bg-gray-100 rounded-full" />
                  <div className="h-5 w-full bg-gray-100 rounded" />
                  <div className="h-5 w-3/4 bg-gray-100 rounded" />
                  <div className="h-3 w-full bg-gray-100 rounded mt-2" />
                  <div className="h-3 w-4/5 bg-gray-100 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT CTA ── */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-100 rounded-[3rem] h-56 animate-pulse" />
        </div>
      </section>
    </div>
  );
}
