import Link from "next/link";

export default function Comparison() {
  return (
    <div className="flex min-h-screen flex-col items-center p-6 md:p-12">
      <div className="max-w-6xl w-full">
        <nav className="mb-8 animate-fade-in">
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>Back to Home</span>
          </Link>
        </nav>

        <div className="mb-10 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
            Performance Comparison
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Detailed comparison of top desktop computers for AI inference
            workloads
          </p>
        </div>

        <div
          className="card p-1 mb-12 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-300">
              <thead className="text-xs uppercase bg-gradient-to-r from-blue-900/40 to-indigo-900/40 sticky top-0">
                <tr>
                  <th scope="col" className="px-6 py-4 font-medium">
                    Model
                  </th>
                  <th scope="col" className="px-6 py-4 font-medium">
                    Price (€)
                  </th>
                  <th scope="col" className="px-6 py-4 font-medium">
                    GPU
                  </th>
                  <th scope="col" className="px-6 py-4 font-medium">
                    VRAM
                  </th>
                  <th scope="col" className="px-6 py-4 font-medium">
                    CPU
                  </th>
                  <th scope="col" className="px-6 py-4 font-medium">
                    RAM
                  </th>
                  <th scope="col" className="px-6 py-4 font-medium">
                    Storage
                  </th>
                  <th scope="col" className="px-6 py-4 font-medium">
                    AI Performance
                  </th>
                  <th scope="col" className="px-6 py-4 font-medium">
                    Value Rating
                  </th>
                  <th scope="col" className="px-6 py-4 font-medium">
                    Under Budget
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/5 border-b border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    Custom RTX 4070 Ti
                  </th>
                  <td className="px-6 py-4">1,800-2,200</td>
                  <td className="px-6 py-4">RTX 4070 Ti</td>
                  <td className="px-6 py-4">12GB</td>
                  <td className="px-6 py-4">Ryzen 7 7700X</td>
                  <td className="px-6 py-4">32GB DDR5</td>
                  <td className="px-6 py-4">1TB NVMe + 2TB HDD</td>
                  <td className="px-6 py-4">56%</td>
                  <td className="px-6 py-4 text-green-400">9/10</td>
                  <td className="px-6 py-4 text-green-400">✓</td>
                </tr>

                <tr className="bg-white/5 border-b border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    Skytech Prism II
                  </th>
                  <td className="px-6 py-4">2,350</td>
                  <td className="px-6 py-4">RTX 4070 Ti</td>
                  <td className="px-6 py-4">12GB</td>
                  <td className="px-6 py-4">Ryzen 9 7900X</td>
                  <td className="px-6 py-4">32GB DDR5</td>
                  <td className="px-6 py-4">1TB NVMe</td>
                  <td className="px-6 py-4">56%</td>
                  <td className="px-6 py-4 text-green-400">8/10</td>
                  <td className="px-6 py-4 text-green-400">✓</td>
                </tr>

                <tr className="bg-white/5 border-b border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    Custom RTX 4070 SUPER
                  </th>
                  <td className="px-6 py-4">1,600-1,900</td>
                  <td className="px-6 py-4">RTX 4070 SUPER</td>
                  <td className="px-6 py-4">12GB</td>
                  <td className="px-6 py-4">Ryzen 5 7600X</td>
                  <td className="px-6 py-4">32GB DDR5</td>
                  <td className="px-6 py-4">1TB NVMe</td>
                  <td className="px-6 py-4">51%</td>
                  <td className="px-6 py-4 text-green-400">8/10</td>
                  <td className="px-6 py-4 text-green-400">✓</td>
                </tr>

                <tr className="bg-white/5 border-b border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    Skytech Chronos
                  </th>
                  <td className="px-6 py-4">2,580</td>
                  <td className="px-6 py-4">RTX 5080</td>
                  <td className="px-6 py-4">16GB</td>
                  <td className="px-6 py-4">Ryzen 7 9800X3D</td>
                  <td className="px-6 py-4">32GB DDR5</td>
                  <td className="px-6 py-4">2TB NVMe + 6TB HDD</td>
                  <td className="px-6 py-4">85-90%</td>
                  <td className="px-6 py-4 text-green-400">8/10</td>
                  <td className="px-6 py-4 text-red-400">✗</td>
                </tr>

                <tr className="bg-white/5 border-b border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    Custom RTX 4080
                  </th>
                  <td className="px-6 py-4">2,300-2,800</td>
                  <td className="px-6 py-4">RTX 4080</td>
                  <td className="px-6 py-4">16GB</td>
                  <td className="px-6 py-4">Ryzen 7 7800X3D</td>
                  <td className="px-6 py-4">32GB DDR5</td>
                  <td className="px-6 py-4">1TB NVMe + 2TB HDD</td>
                  <td className="px-6 py-4">73%</td>
                  <td className="px-6 py-4 text-green-400">7/10</td>
                  <td className="px-6 py-4 text-yellow-400">~</td>
                </tr>

                <tr className="bg-white/5 border-b border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    CLX SET Gaming
                  </th>
                  <td className="px-6 py-4">2,580</td>
                  <td className="px-6 py-4">RTX 4070 Ti</td>
                  <td className="px-6 py-4">12GB</td>
                  <td className="px-6 py-4">Intel i7 14700KF</td>
                  <td className="px-6 py-4">32GB DDR5</td>
                  <td className="px-6 py-4">2TB NVMe + 6TB HDD</td>
                  <td className="px-6 py-4">56%</td>
                  <td className="px-6 py-4 text-green-400">7/10</td>
                  <td className="px-6 py-4 text-red-400">✗</td>
                </tr>

                <tr className="bg-white/5 border-b border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    Custom RTX 4080 SUPER
                  </th>
                  <td className="px-6 py-4">2,400-2,900</td>
                  <td className="px-6 py-4">RTX 4080 SUPER</td>
                  <td className="px-6 py-4">16GB</td>
                  <td className="px-6 py-4">Ryzen 7 7800X3D</td>
                  <td className="px-6 py-4">32GB DDR5</td>
                  <td className="px-6 py-4">1TB NVMe + 2TB HDD</td>
                  <td className="px-6 py-4">78%</td>
                  <td className="px-6 py-4 text-green-400">7/10</td>
                  <td className="px-6 py-4 text-yellow-400">~</td>
                </tr>

                <tr className="bg-white/5 border-b border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    NZXT Player PC
                  </th>
                  <td className="px-6 py-4">2,760</td>
                  <td className="px-6 py-4">RTX 5080/5090</td>
                  <td className="px-6 py-4">16-24GB</td>
                  <td className="px-6 py-4">Ryzen 7 9800X3D</td>
                  <td className="px-6 py-4">32GB DDR5</td>
                  <td className="px-6 py-4">2TB NVMe</td>
                  <td className="px-6 py-4">85-100%</td>
                  <td className="px-6 py-4 text-green-400">7/10</td>
                  <td className="px-6 py-4 text-red-400">✗</td>
                </tr>

                <tr className="bg-white/5 border-b border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    Lenovo Legion Tower 7i
                  </th>
                  <td className="px-6 py-4">3,300</td>
                  <td className="px-6 py-4">RTX 5080</td>
                  <td className="px-6 py-4">16GB</td>
                  <td className="px-6 py-4">Intel Ultra 9 285K</td>
                  <td className="px-6 py-4">64GB DDR5</td>
                  <td className="px-6 py-4">2TB NVMe</td>
                  <td className="px-6 py-4">85-90%</td>
                  <td className="px-6 py-4 text-yellow-400">6/10</td>
                  <td className="px-6 py-4 text-red-400">✗</td>
                </tr>

                <tr className="bg-white/5 border-b border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    BIZON G3000
                  </th>
                  <td className="px-6 py-4">2,850+</td>
                  <td className="px-6 py-4">RTX 5090/4090</td>
                  <td className="px-6 py-4">24GB</td>
                  <td className="px-6 py-4">Ryzen 9000 Series</td>
                  <td className="px-6 py-4">Up to 192GB</td>
                  <td className="px-6 py-4">Customizable</td>
                  <td className="px-6 py-4">Up to 200%</td>
                  <td className="px-6 py-4 text-yellow-400">5/10</td>
                  <td className="px-6 py-4 text-red-400">✗</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Key Metrics Comparison
            </h2>
            <p className="mb-6">
              The following metrics showcase how different desktop
              configurations perform for AI inference workloads:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>AI Performance:</strong> Relative performance compared
                to RTX 4090 (100%). Higher percentages indicate better AI
                inference capabilities.
              </li>
              <li>
                <strong>Value Rating:</strong> Our assessment of
                price-to-performance ratio on a scale of 1-10, with higher
                scores indicating better value.
              </li>
              <li>
                <strong>VRAM Capacity:</strong> Crucial for determining the
                maximum AI model size that can be run locally. 12GB is
                sufficient for most medium-sized models, while 16GB+ allows for
                larger models.
              </li>
              <li>
                <strong>Under Budget:</strong> Indicates whether the system
                typically falls under the €2500 budget constraint. "~" indicates
                configurations that may be built under budget with careful
                component selection.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex justify-between">
          <Link
            href="/desktops"
            className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
          >
            View Top Desktops
          </Link>
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
