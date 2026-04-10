export default function ContactSkeleton() {
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

      {/* ── CONTACT INFO CARDS ── */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 space-y-4 animate-pulse shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-full" />
              <div className="h-5 w-1/2 bg-gray-100 rounded" />
              <div className="h-4 w-full bg-gray-100 rounded" />
              <div className="h-4 w-4/5 bg-gray-100 rounded" />
              <div className="h-3 w-3/4 bg-gray-100 rounded" />
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 space-y-2">
            <div className="h-3 w-24 bg-gray-100 rounded-full animate-pulse" />
            <div className="h-7 w-48 bg-gray-100 rounded-lg animate-pulse" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-5">
              {/* Name row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 animate-pulse">
                  <div className="h-3 w-20 bg-gray-100 rounded" />
                  <div className="h-11 w-full bg-gray-100 rounded-xl" />
                </div>
                <div className="space-y-2 animate-pulse">
                  <div className="h-3 w-20 bg-gray-100 rounded" />
                  <div className="h-11 w-full bg-gray-100 rounded-xl" />
                </div>
              </div>
              {/* Email */}
              <div className="space-y-2 animate-pulse">
                <div className="h-3 w-16 bg-gray-100 rounded" />
                <div className="h-11 w-full bg-gray-100 rounded-xl" />
              </div>
              {/* Subject */}
              <div className="space-y-2 animate-pulse">
                <div className="h-3 w-20 bg-gray-100 rounded" />
                <div className="h-11 w-full bg-gray-100 rounded-xl" />
              </div>
              {/* Message */}
              <div className="space-y-2 animate-pulse">
                <div className="h-3 w-24 bg-gray-100 rounded" />
                <div className="h-40 w-full bg-gray-100 rounded-xl" />
              </div>
              {/* Submit */}
              <div className="h-12 w-44 bg-gray-100 rounded-full animate-pulse" />
            </div>
            {/* Side info */}
            <div className="space-y-6">
              <div className="h-5 w-3/4 bg-gray-100 rounded animate-pulse" />
              <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
              <div className="h-4 w-4/5 bg-gray-100 rounded animate-pulse" />
              <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-gray-100 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM CTA ── */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-3">
              <div className="h-10 w-3/4 bg-gray-100 rounded-lg animate-pulse" />
              <div className="h-10 w-1/2 bg-gray-100 rounded-lg animate-pulse" />
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 space-y-4 animate-pulse shadow-sm">
              <div className="h-5 w-1/2 bg-gray-100 rounded" />
              <div className="h-3 w-full bg-gray-100 rounded" />
              <div className="h-10 w-full bg-gray-100 rounded-xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
