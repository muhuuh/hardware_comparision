import Link from "next/link";
import DesktopCard from "../components/DesktopCard";

export default function Desktops() {
  // Data for top 3 desktop options
  const desktops = [
    {
      number: 1,
      name: "Custom RTX 4070 Ti System",
      badge: "Best Value Option",
      price: "€2,000-2,500",
      gpu: "NVIDIA RTX 4070 Ti (12GB VRAM)",
      cpu: "AMD Ryzen 7 7800X3D or Intel Core i7-13700K",
      ram: "32GB DDR5-5600",
      storage: "1TB NVMe SSD + 2TB HDD",
      performance: 56,
      value: 9,
      recommendation:
        "Ideal for users comfortable with building their own system or hiring a local system builder. Offers the best performance-per-euro for AI workloads while staying well within budget.",
    },
    {
      number: 2,
      name: "Skytech Prism II",
      badge: "Best Pre-built Option",
      price: "€2,350",
      gpu: "NVIDIA RTX 4070 Ti (12GB VRAM)",
      cpu: "AMD Ryzen 9 7900X (12C/24T)",
      ram: "32GB DDR5-5600",
      storage: "1TB NVMe SSD",
      performance: 56,
      value: 8,
      recommendation:
        "Best for users who want a hassle-free experience with professional assembly, testing, and support. Offers strong performance while staying under the €2500 budget.",
    },
    {
      number: 3,
      name: "Custom RTX 4070 SUPER System",
      badge: "Budget-Friendly Option",
      price: "€1,600-1,900",
      gpu: "NVIDIA RTX 4070 SUPER (12GB VRAM)",
      cpu: "AMD Ryzen 5 7600X or Intel Core i5-13400F",
      ram: "32GB DDR5-5200",
      storage: "1TB NVMe SSD",
      performance: 51,
      value: 8,
      recommendation:
        "Ideal for users who want to maximize value while keeping costs well below the €2500 budget threshold. The savings could be used for other peripherals or software.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 sophisticated-title">
            Top Desktop Computers for AI Inference Under €2500
          </h1>
          <div className="flex justify-center">
            <div className="max-w-3xl">
              <p className="text-xl text-gray-300">
                Our research identified these top desktop systems for AI
                inference workloads, offering the best balance of performance,
                value, and future-proofing under €2500.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-8 space-y-6">
          {desktops.map((desktop, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <DesktopCard
                number={desktop.number}
                name={desktop.name}
                badge={desktop.badge}
                price={desktop.price}
                gpu={desktop.gpu}
                cpu={desktop.cpu}
                ram={desktop.ram}
                storage={desktop.storage}
                performance={desktop.performance}
                value={desktop.value}
                recommendation={desktop.recommendation}
              />
            </div>
          ))}
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
