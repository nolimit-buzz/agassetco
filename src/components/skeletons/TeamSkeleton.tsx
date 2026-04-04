export default function TeamSkeleton() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="pt-20" />

      {/* ── HERO ── */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="h-3 w-24 bg-gray-100 rounded-full animate-pulse" />
          <div className="h-10 w-3/4 bg-gray-100 rounded-xl animate-pulse" />
          <div className="h-10 w-1/2 bg-gray-100 rounded-xl animate-pulse" />
          <div className="h-4 w-full max-w-lg bg-gray-100 rounded animate-pulse mt-2" />
          <div className="h-4 w-4/5 max-w-lg bg-gray-100 rounded animate-pulse" />
        </div>
      </section>

      {/* ── EXECUTIVE TEAM ── */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 space-y-2">
            <div className="h-3 w-24 bg-gray-200 rounded-full animate-pulse" />
            <div className="h-7 w-52 bg-gray-200 rounded-lg animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-4 animate-pulse">
                <div className="w-full aspect-[3/4] bg-gray-200 rounded-2xl" />
                <div className="h-5 w-3/4 bg-gray-200 rounded" />
                <div className="h-4 w-1/2 bg-gray-200 rounded" />
                <div className="w-8 h-8 bg-gray-200 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOARD MEMBERS ── */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 space-y-2">
            <div className="h-3 w-28 bg-gray-100 rounded-full animate-pulse" />
            <div className="h-7 w-44 bg-gray-100 rounded-lg animate-pulse" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="space-y-3 animate-pulse">
                <div className="w-full aspect-square bg-gray-100 rounded-2xl" />
                <div className="h-4 w-3/4 bg-gray-100 rounded" />
                <div className="h-3 w-1/2 bg-gray-100 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXTENDED TEAM ── */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 space-y-2">
            <div className="h-3 w-24 bg-gray-200 rounded-full animate-pulse" />
            <div className="h-7 w-36 bg-gray-200 rounded-lg animate-pulse" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="space-y-2 animate-pulse"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="w-full aspect-square bg-gray-200 rounded-xl" />
                <div className="h-3 w-3/4 bg-gray-200 rounded" />
                <div className="h-2 w-1/2 bg-gray-100 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
