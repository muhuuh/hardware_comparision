import Link from "next/link";

export default function Desktops() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-6">
          Top Desktop Computers for AI Inference Under €2500
        </h1>

        <p className="text-xl mb-10 text-gray-300">
          Our research identified these top desktop systems for AI inference
          workloads, offering the best balance of performance, value, and
          future-proofing.
        </p>

        <section className="mb-8 space-y-6">
          {/* Desktop 1 */}
          <div
            className="card p-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="rounded-full bg-blue-900/20 w-8 h-8 flex items-center justify-center text-lg text-blue-300 font-bold border border-blue-500/30">
                    1
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    Custom RTX 4070 Ti System
                  </h2>
                </div>
                <p className="text-green-400 font-medium mb-1">
                  Best Value Option
                </p>
                <p className="text-lg">€1,800-2,200</p>
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
                <p className="font-medium">Value Rating: 9/10</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/10 to-transparent border border-blue-500/10 rounded-xl p-5 mb-6">
              <p className="text-gray-300">
                This custom-built configuration offers the best balance of
                performance and value for AI inference workloads. It provides
                excellent GPU performance while leaving budget for high-quality
                components throughout the system.
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
                    <p className="text-gray-300">
                      NVIDIA RTX 4070 Ti (12GB VRAM)
                    </p>
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
                    <p className="text-gray-300">
                      AMD Ryzen 7 7700X or Intel Core i5-13600K
                    </p>
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
                    <p className="text-gray-300">32GB DDR5-5600</p>
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
                    <p className="text-gray-300">1TB NVMe SSD + 2TB HDD</p>
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
                      <span className="font-medium text-blue-300">
                        AI Performance:
                      </span>
                      <p className="text-gray-300">56% relative to RTX 4090</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-blue-900/10 to-transparent border border-blue-500/10 rounded-xl">
              <h3 className="text-xl font-medium mb-3 text-blue-300 flex items-center gap-2">
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Recommendation:
              </h3>
              <p className="text-gray-300">
                Ideal for users comfortable with building their own system or
                hiring a local system builder. Offers the best
                performance-per-euro for AI workloads while staying well within
                budget.
              </p>
            </div>
          </div>

          {/* Desktop 2 */}
          <div
            className="card p-8 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="rounded-full bg-blue-900/20 w-8 h-8 flex items-center justify-center text-lg text-blue-300 font-bold border border-blue-500/30">
                    2
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    Skytech Prism II
                  </h2>
                </div>
                <p className="text-green-400 font-medium mb-1">
                  Best Pre-built Option
                </p>
                <p className="text-lg">€2,350</p>
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
                <p className="font-medium">Value Rating: 8/10</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/10 to-transparent border border-blue-500/10 rounded-xl p-5 mb-6">
              <p className="text-gray-300">
                This pre-built system offers excellent AI performance with the
                RTX 4070 Ti while providing the convenience of a professionally
                built system with warranty and support.
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
                    <p className="text-gray-300">
                      NVIDIA RTX 4070 Ti (12GB VRAM)
                    </p>
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
                    <p className="text-gray-300">AMD Ryzen 9 7900X (12C/24T)</p>
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
                    <p className="text-gray-300">32GB DDR5-5600</p>
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
                    <p className="text-gray-300">1TB NVMe SSD</p>
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
                    <span className="font-medium text-blue-300">
                      AI Performance:
                    </span>
                    <p className="text-gray-300">56% relative to RTX 4090</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-blue-900/10 to-transparent border border-blue-500/10 rounded-xl">
              <h3 className="text-xl font-medium mb-3 text-blue-300 flex items-center gap-2">
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Recommendation:
              </h3>
              <p className="text-gray-300">
                Best for users who want a hassle-free experience with
                professional assembly, testing, and support. Offers strong
                performance while staying under the €2500 budget.
              </p>
            </div>
          </div>

          {/* Desktop 3 */}
          <div
            className="card p-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="rounded-full bg-blue-900/20 w-8 h-8 flex items-center justify-center text-lg text-blue-300 font-bold border border-blue-500/30">
                    3
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    Custom RTX 4070 SUPER System
                  </h2>
                </div>
                <p className="text-green-400 font-medium mb-1">
                  Budget-Friendly Option
                </p>
                <p className="text-lg">€1,600-1,900</p>
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
                <p className="font-medium">Value Rating: 8/10</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/10 to-transparent border border-blue-500/10 rounded-xl p-5 mb-6">
              <p className="text-gray-300">
                This custom build offers a more budget-friendly alternative
                while still providing excellent AI inference capabilities for
                most models within its VRAM constraints.
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
                    <p className="text-gray-300">
                      NVIDIA RTX 4070 SUPER (12GB VRAM)
                    </p>
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
                    <p className="text-gray-300">
                      AMD Ryzen 5 7600X or Intel Core i5-13400F
                    </p>
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
                    <p className="text-gray-300">32GB DDR5-5200</p>
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
                    <p className="text-gray-300">1TB NVMe SSD</p>
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
                    <span className="font-medium text-blue-300">
                      AI Performance:
                    </span>
                    <p className="text-gray-300">51% relative to RTX 4090</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-blue-900/10 to-transparent border border-blue-500/10 rounded-xl">
              <h3 className="text-xl font-medium mb-3 text-blue-300 flex items-center gap-2">
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Recommendation:
              </h3>
              <p className="text-gray-300">
                Ideal for users who want to maximize value while keeping costs
                well below the €2500 budget threshold. The savings could be used
                for other peripherals or software.
              </p>
            </div>
          </div>
        </section>

        <div
          className="flex justify-center mt-12 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <Link
            href="/desktops/all"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg font-medium text-white transition-all shadow-md hover:shadow-lg active:shadow-sm flex items-center gap-2"
          >
            <span>View All 10 Desktop Options</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
