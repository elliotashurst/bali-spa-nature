"use client";

export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-10 w-1/3 bg-gray-200 rounded"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="h-56 bg-gray-200" />
            <div className="p-4">
              <div className="h-4 w-2/3 bg-gray-200 rounded mb-2" />
              <div className="h-3 w-3/4 bg-gray-200 rounded mb-3" />
              <div className="h-8 w-20 bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
