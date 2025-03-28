import React from "react";

interface DesktopCardProps {
  number?: number;
  name: string;
  badge?: string;
  price: string;
  gpu: string;
  cpu: string;
  ram: string;
  storage: string;
  performance: string | number;
  value: number;
  recommendation?: string;
  animationDelay?: string;
}

export default function DesktopCard({
  number,
  name,
  badge,
  price,
  gpu,
  cpu,
  ram,
  storage,
  performance,
  value,
  recommendation,
  animationDelay = "0s",
}: DesktopCardProps) {
  // Format performance to ensure it shows as a percentage
  const performanceText =
    typeof performance === "number" ? `${performance}%` : performance;

  return (
    <div className="card p-8 animate-fade-in" style={{ animationDelay }}>
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            {number && (
              <div className="rounded-full bg-blue-900/20 w-8 h-8 flex items-center justify-center text-lg text-blue-300 font-bold border border-blue-500/30 self-center">
                {number}
              </div>
            )}
            <h2 className="text-2xl font-semibold text-white self-center">
              {name}
            </h2>
          </div>
          {badge && <p className="text-green-400 font-medium mb-1">{badge}</p>}
          <p className="text-lg">{price}</p>
        </div>
        <div className="value-badge value-badge-high flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          <p className="font-medium">Value Rating: {value}/10</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-900/10 to-transparent border border-blue-500/10 rounded-xl p-5 mb-6">
        <p className="text-gray-300">
          {recommendation ||
            "This system provides a balance of performance and value for AI inference workloads."}
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-medium mb-4 text-blue-300 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Key Specifications:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-900/20 w-8 h-8 flex items-center justify-center text-blue-300 border border-blue-500/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <span className="font-medium text-blue-300">GPU:</span>
              <p className="text-gray-300">{gpu}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-900/20 w-8 h-8 flex items-center justify-center text-blue-300 border border-blue-500/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <span className="font-medium text-blue-300">CPU:</span>
              <p className="text-gray-300">{cpu}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-900/20 w-8 h-8 flex items-center justify-center text-blue-300 border border-blue-500/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <div>
              <span className="font-medium text-blue-300">RAM:</span>
              <p className="text-gray-300">{ram}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-900/20 w-8 h-8 flex items-center justify-center text-blue-300 border border-blue-500/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                />
              </svg>
            </div>
            <div>
              <span className="font-medium text-blue-300">Storage:</span>
              <p className="text-gray-300">{storage}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-900/20 w-8 h-8 flex items-center justify-center text-blue-300 border border-blue-500/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <span className="font-medium text-blue-300">AI Performance:</span>
              <p className="text-gray-300">
                {performanceText} relative to RTX 4090
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
