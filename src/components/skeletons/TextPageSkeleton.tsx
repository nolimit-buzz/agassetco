export default function TextPageSkeleton() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="pt-20" />

      {/* ── HERO ── */}
      <section className="px-6 py-16 border-b border-gray-100">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="h-3 w-24 bg-gray-100 rounded-full animate-pulse" />
          <div className="h-10 w-3/4 bg-gray-100 rounded-xl animate-pulse" />
          <div className="h-10 w-1/2 bg-gray-100 rounded-xl animate-pulse" />
          <div className="h-4 w-full bg-gray-100 rounded animate-pulse mt-3" />
          <div className="h-4 w-4/5 bg-gray-100 rounded animate-pulse" />
        </div>
      </section>

      {/* ── BODY CONTENT ── */}
      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto space-y-12">
          {Array.from({ length: 5 }).map((_, section) => (
            <div key={section} className="space-y-3">
              {/* Sub-heading */}
              <div
                className="h-6 w-1/3 bg-gray-100 rounded-lg animate-pulse"
                style={{ animationDelay: `${section * 60}ms` }}
              />
              {/* Text lines */}
              {[100, 95, 88, 100, 78, 92].map((w, i) => (
                <div
                  key={i}
                  className="h-4 bg-gray-100 rounded animate-pulse"
                  style={{
                    width: `${w}%`,
                    animationDelay: `${section * 60 + i * 30}ms`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
