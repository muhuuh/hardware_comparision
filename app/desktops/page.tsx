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
          <div className="bg-white/5 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-semibold">
                  1. Custom RTX 4070 Ti System
                </h2>
                <p className="text-green-400 font-medium">Best Value Option</p>
                <p className="text-lg">€1,800-2,200</p>
              </div>
              <div className="bg-green-900/20 px-4 py-2 rounded-md">
                <p className="font-medium">Value Rating: 9/10</p>
              </div>
            </div>

            <p className="mb-4">
              This custom-built configuration offers the best balance of
              performance and value for AI inference workloads. It provides
              excellent GPU performance while leaving budget for high-quality
              components throughout the system.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Key Specifications:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <li>
                  <span className="font-medium">GPU:</span> NVIDIA RTX 4070 Ti
                  (12GB VRAM)
                </li>
                <li>
                  <span className="font-medium">CPU:</span> AMD Ryzen 7 7700X or
                  Intel Core i5-13600K
                </li>
                <li>
                  <span className="font-medium">RAM:</span> 32GB DDR5-5600
                </li>
                <li>
                  <span className="font-medium">Storage:</span> 1TB NVMe SSD +
                  2TB HDD
                </li>
                <li>
                  <span className="font-medium">AI Performance:</span> 56%
                  relative to RTX 4090
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Recommendation:</h3>
              <p>
                Ideal for users comfortable with building their own system or
                hiring a local system builder. Offers the best
                performance-per-euro for AI workloads while staying well within
                budget.
              </p>
            </div>
          </div>

          {/* Desktop 2 */}
          <div className="bg-white/5 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-semibold">2. Skytech Prism II</h2>
                <p className="text-green-400 font-medium">
                  Best Pre-built Option
                </p>
                <p className="text-lg">€2,350</p>
              </div>
              <div className="bg-green-900/20 px-4 py-2 rounded-md">
                <p className="font-medium">Value Rating: 8/10</p>
              </div>
            </div>

            <p className="mb-4">
              This pre-built system offers excellent AI performance with the RTX
              4070 Ti while providing the convenience of a professionally built
              system with warranty and support.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Key Specifications:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <li>
                  <span className="font-medium">GPU:</span> NVIDIA RTX 4070 Ti
                  (12GB VRAM)
                </li>
                <li>
                  <span className="font-medium">CPU:</span> AMD Ryzen 9 7900X
                  (12C/24T)
                </li>
                <li>
                  <span className="font-medium">RAM:</span> 32GB DDR5-5600
                </li>
                <li>
                  <span className="font-medium">Storage:</span> 1TB NVMe SSD
                </li>
                <li>
                  <span className="font-medium">AI Performance:</span> 56%
                  relative to RTX 4090
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Recommendation:</h3>
              <p>
                Best for users who want a hassle-free experience with
                professional assembly, testing, and support. Offers strong
                performance while staying under the €2500 budget.
              </p>
            </div>
          </div>

          {/* Desktop 3 */}
          <div className="bg-white/5 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-semibold">
                  3. Custom RTX 4070 SUPER System
                </h2>
                <p className="text-green-400 font-medium">
                  Budget-Friendly Option
                </p>
                <p className="text-lg">€1,600-1,900</p>
              </div>
              <div className="bg-green-900/20 px-4 py-2 rounded-md">
                <p className="font-medium">Value Rating: 8/10</p>
              </div>
            </div>

            <p className="mb-4">
              This custom build offers a more budget-friendly alternative while
              still providing excellent AI inference capabilities for most
              models within its VRAM constraints.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Key Specifications:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <li>
                  <span className="font-medium">GPU:</span> NVIDIA RTX 4070
                  SUPER (12GB VRAM)
                </li>
                <li>
                  <span className="font-medium">CPU:</span> AMD Ryzen 5 7600X or
                  Intel Core i5-13400F
                </li>
                <li>
                  <span className="font-medium">RAM:</span> 32GB DDR5-5200
                </li>
                <li>
                  <span className="font-medium">Storage:</span> 1TB NVMe SSD
                </li>
                <li>
                  <span className="font-medium">AI Performance:</span> 51%
                  relative to RTX 4090
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Recommendation:</h3>
              <p>
                Ideal for users who want to maximize value while keeping costs
                well below the €2500 budget threshold. The savings could be used
                for other peripherals or software.
              </p>
            </div>
          </div>
        </section>

        <div className="flex justify-center mt-12">
          <Link
            href="/desktops/all"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            View All 10 Desktop Options
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
