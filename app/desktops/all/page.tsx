import Link from "next/link";
import DesktopCard from "../../components/DesktopCard";

export default function AllDesktops() {
  // Data for all desktop options
  const desktops = [
    {
      name: "Custom RTX 4070 Ti System",
      price: "€2,000-2,500",
      gpu: "RTX 4070 Ti (12GB)",
      cpu: "AMD Ryzen 7 7800X3D or Intel Core i7-13700K",
      ram: "32GB DDR5-5600",
      storage: "1TB NVMe SSD + 2TB HDD",
      performance: 56,
      value: 9,
      badge: "Best Value Option",
      recommendation:
        "Ideal for users comfortable with building their own system or hiring a local system builder. Offers the best performance-per-euro for AI workloads while staying well within budget.",
    },
    {
      name: "Skytech Prism II",
      price: "€2,350",
      gpu: "RTX 4070 Ti (12GB)",
      cpu: "AMD Ryzen 9 7900X (12C/24T)",
      ram: "32GB DDR5-5600",
      storage: "1TB NVMe SSD",
      performance: 56,
      value: 8,
      badge: "Best Pre-built Option",
      recommendation:
        "Best for users who want a hassle-free experience with professional assembly, testing, and support. Offers strong performance while staying under the €2500 budget.",
    },
    {
      name: "Custom RTX 4070 SUPER System",
      price: "€1,600-1,900",
      gpu: "RTX 4070 SUPER (12GB)",
      cpu: "AMD Ryzen 5 7600X or Intel Core i5-13400F",
      ram: "32GB DDR5-5200",
      storage: "1TB NVMe SSD",
      performance: 51,
      value: 8,
      badge: "Budget-Friendly Option",
      recommendation:
        "Ideal for users who want to maximize value while keeping costs well below the €2500 budget threshold. The savings could be used for other peripherals or software.",
    },
    {
      name: "Custom RTX 4070 Ti SUPER System",
      price: "€2,200-2,700",
      gpu: "RTX 4070 Ti SUPER (16GB)",
      cpu: "AMD Ryzen 7 7800X3D or Intel Core i7-14700K",
      ram: "32GB DDR5-6000",
      storage: "1TB NVMe SSD + 2TB HDD",
      performance: 64,
      value: 8,
      badge: "Best 16GB VRAM Option",
      recommendation:
        "Great for users who need more VRAM for larger models while still maintaining excellent performance. May exceed the €2500 budget depending on configuration.",
    },
    {
      name: "Custom RTX 4080 System",
      price: "€2,300-2,800",
      gpu: "RTX 4080 (16GB)",
      cpu: "AMD Ryzen 7 7800X3D or Intel Core i7-13700K",
      ram: "32GB DDR5-5600",
      storage: "1TB NVMe SSD + 2TB HDD",
      performance: 73,
      value: 7,
      badge: "High Performance Option",
      recommendation:
        "For users who need higher performance and are willing to potentially exceed the budget. The 16GB VRAM allows running larger models with better throughput.",
    },
    {
      name: "Custom RTX 4080 SUPER System",
      price: "€2,400-2,900",
      gpu: "RTX 4080 SUPER (16GB)",
      cpu: "AMD Ryzen 7 7800X3D or Intel Core i7-14700K",
      ram: "32GB DDR5-6000",
      storage: "1TB NVMe SSD + 2TB HDD",
      performance: 78,
      value: 7,
      badge: "Premium Performance",
      recommendation:
        "Offers excellent performance with the ability to handle most AI models. Will likely exceed the €2500 budget but provides significant performance advantages.",
    },
    {
      name: "Allied Gaming Patriot",
      price: "€1,890",
      gpu: "RTX 4070 Ti (12GB)",
      cpu: "Intel Core i7-13700F (16C/24T)",
      ram: "16GB DDR5",
      storage: "1TB NVMe SSD",
      performance: 56,
      value: 8,
      badge: "Affordable Pre-built",
      recommendation:
        "A solid pre-built option that stays under budget while offering good performance. The 16GB RAM is sufficient but could be upgraded later if needed.",
    },
    {
      name: "CLX SET Gaming Desktop",
      price: "€2,580",
      gpu: "RTX 4070 Ti (12GB)",
      cpu: "Intel Core i7 14700KF (20C/28T)",
      ram: "32GB DDR5-5600",
      storage: "2TB NVMe SSD + 6TB HDD",
      performance: 56,
      value: 7,
      badge: "Storage Rich Option",
      recommendation:
        "Slightly exceeds the budget but includes substantial storage. Good for users who need to store many large models and datasets locally.",
    },
    {
      name: "NZXT Player PC",
      price: "€2,760",
      gpu: "RTX 5080/5090 (16GB/24GB)",
      cpu: "AMD Ryzen 7 9800X3D (8C/16T)",
      ram: "32GB DDR5-6000",
      storage: "2TB NVMe SSD",
      performance: 92,
      value: 7,
      badge: "Next-Gen Performance",
      recommendation:
        "Exceeds the budget but offers next-generation GPU performance, making it more future-proof for upcoming larger AI models.",
    },
    {
      name: "BIZON G3000",
      price: "€2,850+",
      gpu: "Up to 2x RTX 5090/4090 (24GB each)",
      cpu: "AMD Ryzen 9000 Series",
      ram: "Up to 192GB",
      storage: "Not specified",
      performance: 200,
      value: 5,
      badge: "Extreme AI Workstation",
      recommendation:
        "Far exceeds the budget but provides workstation-class performance. Only suitable for users with extreme requirements and the budget to match.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 sophisticated-title">
            All Desktop Options
          </h1>
          <div className="flex justify-center">
            <div className="max-w-3xl">
              <p className="text-xl text-gray-300">
                Compare all desktop systems for AI inference workloads, from
                budget-friendly options to high-performance workstations.
              </p>
            </div>
          </div>
        </div>

        <div
          className="mb-6 flex justify-between items-center animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="text-2xl font-semibold text-blue-300">
            Desktop Systems Comparison
          </h2>
          <Link
            href="/compare"
            className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-lg transition-colors flex items-center gap-2 shadow-md"
          >
            <span>Side-by-Side Comparison</span>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {desktops.map((desktop, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <DesktopCard
                name={desktop.name}
                price={desktop.price}
                gpu={desktop.gpu}
                cpu={desktop.cpu}
                ram={desktop.ram}
                storage={desktop.storage}
                performance={desktop.performance}
                value={desktop.value}
                badge={desktop.badge}
                recommendation={desktop.recommendation}
              />
            </div>
          ))}
        </div>

        <div
          className="flex justify-center mt-16 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <Link
            href="/compare"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg font-medium text-white transition-all shadow-md hover:shadow-lg active:shadow-sm flex items-center gap-2"
          >
            <span>Compare Selected Desktops</span>
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
