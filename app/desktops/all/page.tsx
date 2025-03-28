import Link from "next/link";

export default function AllDesktops() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="max-w-4xl w-full">
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/desktops"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
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
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Top Desktops
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8">
          All 10 Desktop Computers for AI Inference
        </h1>

        <section className="mb-12 space-y-6">
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

          {/* Desktop 4 */}
          <div className="bg-white/5 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-semibold">4. Skytech Chronos</h2>
                <p className="text-green-400 font-medium">
                  Best Performance Just Above Budget
                </p>
                <p className="text-lg">€2,580</p>
              </div>
              <div className="bg-green-900/20 px-4 py-2 rounded-md">
                <p className="font-medium">Value Rating: 8/10</p>
              </div>
            </div>

            <p className="mb-4">
              This pre-built system features the newer RTX 5080 GPU, offering
              significantly better AI performance than RTX 4000 series options,
              at a price point only slightly above the €2500 budget.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Key Specifications:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <li>
                  <span className="font-medium">GPU:</span> NVIDIA RTX 5080
                  (16GB VRAM)
                </li>
                <li>
                  <span className="font-medium">CPU:</span> AMD Ryzen 7 9800X3D
                  (8C/16T)
                </li>
                <li>
                  <span className="font-medium">RAM:</span> 32GB DDR5-6000
                </li>
                <li>
                  <span className="font-medium">Storage:</span> 2TB NVMe SSD +
                  6TB HDD
                </li>
                <li>
                  <span className="font-medium">AI Performance:</span> 85-90%
                  relative to RTX 4090
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Recommendation:</h3>
              <p>
                Ideal for users who can stretch their budget slightly and want
                significantly better AI inference performance with newer
                generation hardware.
              </p>
            </div>
          </div>

          {/* Desktop 5 */}
          <div className="bg-white/5 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-semibold">
                  5. Custom RTX 4080 System
                </h2>
                <p className="text-green-400 font-medium">
                  High Performance Option
                </p>
                <p className="text-lg">€2,300-2,800</p>
              </div>
              <div className="bg-green-900/20 px-4 py-2 rounded-md">
                <p className="font-medium">Value Rating: 7/10</p>
              </div>
            </div>

            <p className="mb-4">
              This custom configuration offers better performance than RTX 4070
              Ti systems while potentially staying close to the €2500 budget
              depending on component selection.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Key Specifications:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <li>
                  <span className="font-medium">GPU:</span> NVIDIA RTX 4080
                  (16GB VRAM)
                </li>
                <li>
                  <span className="font-medium">CPU:</span> AMD Ryzen 7 7800X3D
                  or Intel Core i7-13700K
                </li>
                <li>
                  <span className="font-medium">RAM:</span> 32GB DDR5-5600
                </li>
                <li>
                  <span className="font-medium">Storage:</span> 1TB NVMe SSD +
                  2TB HDD
                </li>
                <li>
                  <span className="font-medium">AI Performance:</span> 73%
                  relative to RTX 4090
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Recommendation:</h3>
              <p>
                Good for users who need higher performance than RTX 4070 Ti
                systems offer and are willing to approach or slightly exceed the
                budget limit.
              </p>
            </div>
          </div>

          {/* Desktop 6 */}
          <div className="bg-white/5 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-semibold">
                  6. CLX SET Gaming Desktop
                </h2>
                <p className="text-green-400 font-medium">
                  Well-Balanced Pre-built Option
                </p>
                <p className="text-lg">€2,580</p>
              </div>
              <div className="bg-green-900/20 px-4 py-2 rounded-md">
                <p className="font-medium">Value Rating: 7/10</p>
              </div>
            </div>

            <p className="mb-4">
              This pre-built system offers a good balance of CPU and GPU
              performance with generous storage options, though it slightly
              exceeds the €2500 budget.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Key Specifications:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <li>
                  <span className="font-medium">GPU:</span> NVIDIA RTX 4070 Ti
                  (12GB VRAM)
                </li>
                <li>
                  <span className="font-medium">CPU:</span> Intel Core i7
                  14700KF (20C/28T)
                </li>
                <li>
                  <span className="font-medium">RAM:</span> 32GB DDR5-5600
                </li>
                <li>
                  <span className="font-medium">Storage:</span> 2TB NVMe SSD +
                  6TB HDD
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
                Good for users who want a pre-built system with excellent CPU
                performance and storage capacity, and can accept slightly lower
                GPU performance.
              </p>
            </div>
          </div>

          {/* Desktop 7 */}
          <div className="bg-white/5 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-semibold">
                  7. Custom RTX 4080 SUPER System
                </h2>
                <p className="text-green-400 font-medium">
                  High Performance Custom Option
                </p>
                <p className="text-lg">€2,400-2,900</p>
              </div>
              <div className="bg-green-900/20 px-4 py-2 rounded-md">
                <p className="font-medium">Value Rating: 7/10</p>
              </div>
            </div>

            <p className="mb-4">
              This custom configuration offers performance approaching RTX 4090
              levels while potentially staying close to the €2500 budget
              depending on component selection.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Key Specifications:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <li>
                  <span className="font-medium">GPU:</span> NVIDIA RTX 4080
                  SUPER (16GB VRAM)
                </li>
                <li>
                  <span className="font-medium">CPU:</span> AMD Ryzen 7 7800X3D
                  or Intel Core i7-14700K
                </li>
                <li>
                  <span className="font-medium">RAM:</span> 32GB DDR5-6000
                </li>
                <li>
                  <span className="font-medium">Storage:</span> 1TB NVMe SSD +
                  2TB HDD
                </li>
                <li>
                  <span className="font-medium">AI Performance:</span> 78%
                  relative to RTX 4090
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Recommendation:</h3>
              <p>
                Excellent for users who prioritize performance and are willing
                to potentially exceed the budget for near-flagship level AI
                capabilities.
              </p>
            </div>
          </div>

          {/* Desktop 8 */}
          <div className="bg-white/5 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-semibold">8. NZXT Player PC</h2>
                <p className="text-green-400 font-medium">
                  Premium Pre-built Option
                </p>
                <p className="text-lg">€2,760</p>
              </div>
              <div className="bg-green-900/20 px-4 py-2 rounded-md">
                <p className="font-medium">Value Rating: 7/10</p>
              </div>
            </div>

            <p className="mb-4">
              This pre-built system from NZXT offers excellent build quality,
              cooling, and component selection, with options for either RTX 5080
              or RTX 5090 GPUs.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Key Specifications:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <li>
                  <span className="font-medium">GPU:</span> NVIDIA RTX 5080
                  (16GB VRAM) or RTX 5090 (24GB VRAM)
                </li>
                <li>
                  <span className="font-medium">CPU:</span> AMD Ryzen 7 9800X3D
                  (8C/16T)
                </li>
                <li>
                  <span className="font-medium">RAM:</span> 32GB DDR5-6000
                </li>
                <li>
                  <span className="font-medium">Storage:</span> 2TB NVMe SSD
                </li>
                <li>
                  <span className="font-medium">AI Performance:</span> 85-100%
                  relative to RTX 4090
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Recommendation:</h3>
              <p>
                Best for users who prioritize build quality, aesthetics, and
                cooling performance, and are willing to exceed the budget for a
                premium experience.
              </p>
            </div>
          </div>

          {/* Desktop 9 */}
          <div className="bg-white/5 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-semibold">
                  9. Lenovo Legion Tower 7i
                </h2>
                <p className="text-green-400 font-medium">
                  High-End Pre-built from Major Manufacturer
                </p>
                <p className="text-lg">€3,300</p>
              </div>
              <div className="bg-green-900/20 px-4 py-2 rounded-md">
                <p className="font-medium">Value Rating: 6/10</p>
              </div>
            </div>

            <p className="mb-4">
              This system from Lenovo offers a premium, well-engineered solution
              with professional support and warranty options, albeit at a
              significantly higher price point than the €2500 budget.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Key Specifications:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <li>
                  <span className="font-medium">GPU:</span> NVIDIA RTX 5080
                  (16GB VRAM)
                </li>
                <li>
                  <span className="font-medium">CPU:</span> Intel Core Ultra 9
                  285K (24C/32T)
                </li>
                <li>
                  <span className="font-medium">RAM:</span> Up to 64GB DDR5-6400
                </li>
                <li>
                  <span className="font-medium">Storage:</span> Up to 2TB NVMe
                  SSD
                </li>
                <li>
                  <span className="font-medium">AI Performance:</span> 85-90%
                  relative to RTX 4090
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Recommendation:</h3>
              <p>
                Suitable for enterprise users or those who prioritize
                reliability, warranty, and professional support over value for
                money.
              </p>
            </div>
          </div>

          {/* Desktop 10 */}
          <div className="bg-white/5 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-semibold">10. BIZON G3000</h2>
                <p className="text-green-400 font-medium">
                  Specialized AI Workstation
                </p>
                <p className="text-lg">€2,850+</p>
              </div>
              <div className="bg-green-900/20 px-4 py-2 rounded-md">
                <p className="font-medium">Value Rating: 5/10</p>
              </div>
            </div>

            <p className="mb-4">
              This specialized AI workstation is designed specifically for AI
              workloads and offers options for multiple GPUs, making it the most
              powerful but also the most expensive option on this list.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Key Specifications:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <li>
                  <span className="font-medium">GPU:</span> Up to 2x NVIDIA RTX
                  5090/4090 (24GB VRAM each)
                </li>
                <li>
                  <span className="font-medium">CPU:</span> AMD Ryzen 9000
                  Series
                </li>
                <li>
                  <span className="font-medium">RAM:</span> Up to 192GB DDR5
                </li>
                <li>
                  <span className="font-medium">Storage:</span> Customizable
                </li>
                <li>
                  <span className="font-medium">AI Performance:</span> Up to
                  200% relative to single RTX 4090
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Recommendation:</h3>
              <p>
                Ideal for professional users who need maximum AI performance and
                are willing to spend significantly more than the €2500 budget.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
