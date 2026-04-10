export default function AboutSkeleton() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* nav spacer */}
      <div className="pt-20" />

      {/* ── HERO ── */}
      <section className="px-6 pb-16 pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-100">
            <div className="h-4 w-40 bg-gray-100 rounded-full animate-pulse" />
            <div className="h-3 w-28 bg-gray-100 rounded-full animate-pulse" />
          </div>
          <div
            className="w-full bg-gray-100 rounded-2xl animate-pulse"
            style={{ height: 'clamp(320px, 60vh, 600px)' }}
          />
          <div className="mt-10 space-y-3 max-w-2xl">
            <div className="h-9 w-3/4 bg-gray-100 rounded-lg animate-pulse" />
            <div className="h-9 w-1/2 bg-gray-100 rounded-lg animate-pulse" />
            <div className="h-4 w-full bg-gray-100 rounded animate-pulse mt-3" />
            <div className="h-4 w-4/5 bg-gray-100 rounded animate-pulse" />
          </div>
          <div className="mt-8 h-12 w-44 bg-gray-100 rounded-full animate-pulse" />
        </div>
      </section>

      {/* ── 3-COL STRUCTURE CARDS ── */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 space-y-2">
            <div className="h-3 w-24 bg-gray-100 rounded-full animate-pulse" />
            <div className="h-7 w-56 bg-gray-100 rounded-lg animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 space-y-4 animate-pulse min-h-[280px]">
                <div className="w-10 h-10 bg-gray-200 rounded-xl" />
                <div className="h-5 w-3/4 bg-gray-200 rounded" />
                <div className="h-3 w-full bg-gray-100 rounded" />
                <div className="h-3 w-5/6 bg-gray-100 rounded" />
                <div className="h-3 w-4/5 bg-gray-100 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPERATIONS (dark section) ── */}
      <section className="bg-gray-800 px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Circle diagram */}
          <div className="flex items-center justify-center">
            <div className="w-72 h-72 bg-gray-700 rounded-full animate-pulse" />
          </div>
          {/* Feature rows */}
          <div className="bg-gray-700 rounded-2xl p-8 space-y-6 animate-pulse">
            <div className="h-6 w-1/2 bg-gray-600 rounded" />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gray-600 rounded-lg flex-shrink-0" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-3/4 bg-gray-600 rounded" />
                  <div className="h-3 w-full bg-gray-700 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 space-y-2">
            <div className="h-3 w-24 bg-gray-100 rounded-full animate-pulse" />
            <div className="h-7 w-44 bg-gray-100 rounded-lg animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="bg-gray-50 rounded-2xl p-8 space-y-3 animate-pulse h-52">
              <div className="h-5 w-1/2 bg-gray-200 rounded" />
              <div className="h-3 w-full bg-gray-100 rounded" />
              <div className="h-3 w-5/6 bg-gray-100 rounded" />
            </div>
            {/* Center card taller */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden animate-pulse h-72">
              <div className="h-40 bg-gray-200" />
              <div className="p-6 space-y-2">
                <div className="h-5 w-1/2 bg-gray-200 rounded" />
                <div className="h-3 w-full bg-gray-200 rounded" />
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 space-y-3 animate-pulse h-52">
              <div className="h-5 w-1/2 bg-gray-200 rounded" />
              <div className="h-3 w-full bg-gray-100 rounded" />
              <div className="h-3 w-5/6 bg-gray-100 rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 space-y-2">
            <div className="h-3 w-24 bg-gray-200 rounded-full animate-pulse" />
            <div className="h-7 w-48 bg-gray-200 rounded-lg animate-pulse" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-3 animate-pulse">
                <div className="w-full aspect-[3/4] bg-gray-200 rounded-2xl" />
                <div className="h-4 w-3/4 bg-gray-200 rounded" />
                <div className="h-3 w-1/2 bg-gray-100 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM CTA ── */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-6 mb-10">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-6 w-20 bg-gray-100 rounded animate-pulse" />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-3">
              <div className="h-10 w-3/4 bg-gray-100 rounded-lg animate-pulse" />
              <div className="h-10 w-1/2 bg-gray-100 rounded-lg animate-pulse" />
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 space-y-4 animate-pulse shadow-sm">
              <div className="h-5 w-1/2 bg-gray-100 rounded" />
              <div className="h-3 w-full bg-gray-100 rounded" />
              <div className="h-3 w-4/5 bg-gray-100 rounded" />
              <div className="h-10 w-full bg-gray-100 rounded-xl" />
              <div className="h-10 w-full bg-gray-100 rounded-xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
