"use client";

import { useState } from "react";
import Link from "next/link";

interface Recommendation {
  name: string;
  price: string;
  description: string;
  specs: string;
  performance: string;
  link: string;
}

export default function BudgetCalculator() {
  const [budget, setBudget] = useState(2500);
  const [prioritizeGPU, setPrioritizeGPU] = useState(true);
  const [prioritizeRAM, setPrioritizeRAM] = useState(false);
  const [prioritizeStorage, setPrioritizeStorage] = useState(false);
  const [modelSize, setModelSize] = useState("medium");
  const [selectedRecommendations, setSelectedRecommendations] = useState<
    Recommendation[]
  >([]);
  const [showResults, setShowResults] = useState(true);
  const [calculationPerformed, setCalculationPerformed] = useState(false);

  // Calculate recommendations based on inputs
  const getRecommendations = (): Recommendation[] => {
    let recommendations: Recommendation[] = [];

    if (budget <= 2000) {
      recommendations.push({
        name: "Allied Gaming Patriot",
        price: "€1,890",
        description:
          "Pre-built system with RTX 4070 Ti, good value within budget",
        specs:
          "RTX 4070 Ti (12GB), Intel Core i7-13700F, 16GB DDR5, 1TB NVMe SSD",
        performance: "56% relative to RTX 4090",
        link: "/desktops",
      });

      if (prioritizeGPU) {
        recommendations.push({
          name: "Custom RTX 4070 Ti System (GPU Focus)",
          price: "€1,900-2,000",
          description: "Custom build prioritizing GPU performance",
          specs: "RTX 4070 Ti (12GB), Ryzen 5 7600X, 16GB DDR5, 1TB NVMe SSD",
          performance: "56% relative to RTX 4090",
          link: "/desktops",
        });
      }

      if (prioritizeRAM) {
        recommendations.push({
          name: "Custom RTX 4060 Ti System (RAM Focus)",
          price: "€1,800-1,900",
          description: "Custom build prioritizing RAM capacity",
          specs: "RTX 4060 Ti (8GB), Ryzen 7 7700X, 64GB DDR5, 1TB NVMe SSD",
          performance: "35% relative to RTX 4090",
          link: "/desktops",
        });
      }

      if (prioritizeStorage) {
        recommendations.push({
          name: "Custom RTX 4060 Ti System (Storage Focus)",
          price: "€1,800-1,900",
          description: "Custom build prioritizing storage capacity",
          specs:
            "RTX 4060 Ti (8GB), Ryzen 5 7600X, 32GB DDR5, 2TB NVMe SSD + 8TB HDD",
          performance: "35% relative to RTX 4090",
          link: "/desktops",
        });
      }
    } else if (budget <= 2500) {
      recommendations.push({
        name: "Custom RTX 4070 Ti System",
        price: "€2,000-2,500",
        description: "Best value custom build within budget",
        specs:
          "RTX 4070 Ti (12GB), Ryzen 7 7800X3D, 32GB DDR5, 1TB NVMe SSD + 2TB HDD",
        performance: "56% relative to RTX 4090",
        link: "/desktops",
      });

      if (prioritizeGPU) {
        recommendations.push({
          name: "Custom RTX 4070 Ti SUPER System",
          price: "€2,200-2,500",
          description: "Custom build with better GPU performance",
          specs:
            "RTX 4070 Ti SUPER (16GB), Ryzen 7 7700X, 32GB DDR5, 1TB NVMe SSD",
          performance: "64% relative to RTX 4090",
          link: "/desktops",
        });
      }

      if (prioritizeRAM) {
        recommendations.push({
          name: "Custom RTX 4070 System (RAM Focus)",
          price: "€2,200-2,400",
          description: "Custom build prioritizing RAM capacity",
          specs:
            "RTX 4070 (12GB), Ryzen 7 7800X3D, 64GB DDR5, 1TB NVMe SSD + 2TB HDD",
          performance: "48% relative to RTX 4090",
          link: "/desktops",
        });
      }

      if (prioritizeStorage) {
        recommendations.push({
          name: "Custom RTX 4070 System (Storage Focus)",
          price: "€2,200-2,400",
          description: "Custom build prioritizing storage capacity",
          specs:
            "RTX 4070 (12GB), Ryzen 7 7700X, 32GB DDR5, 4TB NVMe SSD + 8TB HDD",
          performance: "48% relative to RTX 4090",
          link: "/desktops",
        });
      }
    } else if (budget <= 3000) {
      recommendations.push({
        name: "Skytech Chronos",
        price: "€2,580",
        description: "Pre-built system with RTX 5080, excellent performance",
        specs:
          "RTX 5080 (16GB), Ryzen 7 9800X3D, 32GB DDR5, 2TB NVMe SSD + 6TB HDD",
        performance: "85-90% relative to RTX 4090",
        link: "/desktops/all",
      });

      if (prioritizeGPU) {
        recommendations.push({
          name: "Custom RTX 4080 SUPER System",
          price: "€2,600-2,900",
          description: "Custom build with high-end GPU performance",
          specs:
            "RTX 4080 SUPER (16GB), Ryzen 7 7800X3D, 32GB DDR5, 1TB NVMe SSD + 2TB HDD",
          performance: "78% relative to RTX 4090",
          link: "/desktops/all",
        });
      }

      if (prioritizeRAM || prioritizeStorage) {
        recommendations.push({
          name: "Custom RTX 4080 System (RAM/Storage Focus)",
          price: "€2,700-3,000",
          description:
            "Custom build with balanced performance and expanded RAM/storage",
          specs:
            "RTX 4080 (16GB), Ryzen 9 7900X, 64GB DDR5, 2TB NVMe SSD + 8TB HDD",
          performance: "73% relative to RTX 4090",
          link: "/desktops/all",
        });
      }
    } else {
      recommendations.push({
        name: "NZXT Player PC",
        price: "€2,760+",
        description: "Premium pre-built system with RTX 5080/5090 options",
        specs:
          "RTX 5080/5090 (16GB/24GB), Ryzen 7 9800X3D, 32GB DDR5, 2TB NVMe SSD",
        performance: "85-100% relative to RTX 4090",
        link: "/desktops/all",
      });

      recommendations.push({
        name: "Lenovo Legion Tower 7i",
        price: "€3,300",
        description: "High-end pre-built system from major manufacturer",
        specs:
          "RTX 5080 (16GB), Intel Core Ultra 9 285K, Up to 64GB DDR5, Up to 2TB NVMe SSD",
        performance: "85-90% relative to RTX 4090",
        link: "/desktops/all",
      });

      if (prioritizeGPU) {
        recommendations.push({
          name: "BIZON G3000",
          price: "€2,850+",
          description:
            "Specialized AI workstation with maximum GPU performance",
          specs:
            "Up to 2x RTX 5090/4090 (24GB each), AMD Ryzen 9000 Series, Up to 192GB RAM",
          performance: "Up to 200% relative to single RTX 4090",
          link: "/desktops/all",
        });
      }
    }

    return recommendations;
  };

  const handleCalculate = () => {
    const budgetElement = document.getElementById(
      "budget"
    ) as HTMLSelectElement;
    if (budgetElement) {
      setBudget(parseInt(budgetElement.value));
    }

    const priorityElement = document.getElementById(
      "priority"
    ) as HTMLSelectElement;
    if (priorityElement) {
      setPrioritizeGPU(priorityElement.value === "performance");
      setPrioritizeRAM(priorityElement.value === "value");
      setPrioritizeStorage(priorityElement.value === "silence");
    }

    const modelSizeElement = document.getElementById(
      "model_size"
    ) as HTMLSelectElement;
    if (modelSizeElement) {
      setModelSize(modelSizeElement.value);
    }

    // Get the updated recommendations based on the new values
    const newRecommendations = getRecommendations();
    setSelectedRecommendations(newRecommendations);
    setCalculationPerformed(true);
    setShowResults(true);
  };

  // Get recommendations based on current state
  const recommendations =
    selectedRecommendations.length > 0
      ? selectedRecommendations
      : getRecommendations();

  // Get the primary recommendation (first in the list)
  const primaryRecommendation =
    recommendations.length > 0 ? recommendations[0] : null;
  // Get alternative recommendation (second in the list) if available
  const alternativeRecommendation =
    recommendations.length > 1 ? recommendations[1] : null;

  const getPerformancePercent = (performanceStr: string): string => {
    if (!performanceStr) return "50%";

    // Extract numbers from the string
    const matches = performanceStr.match(/(\d+)/g);
    if (matches && matches.length > 0) {
      // Use the first number found
      const percent = parseInt(matches[0]);
      if (percent > 100) return "100%"; // Cap at 100%
      return `${percent}%`;
    }

    // Default fallback
    return "50%";
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-6">
          AI Desktop Budget Calculator
        </h1>
        <p className="text-xl mb-10 text-gray-300">
          Tell us your budget and priorities, and we'll recommend the best
          desktop configuration for AI inference
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-white/5 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <h2 className="text-2xl font-semibold mb-6">Your Preferences</h2>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium mb-2"
                >
                  Your Budget (€)
                </label>
                <select
                  id="budget"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="1500">Up to €1,500</option>
                  <option value="2000">€1,500 - €2,000</option>
                  <option value="2500" selected>
                    €2,000 - €2,500
                  </option>
                  <option value="3000">€2,500 - €3,000</option>
                  <option value="3500">€3,000+</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="priority"
                  className="block text-sm font-medium mb-2"
                >
                  Your Priority
                </label>
                <select
                  id="priority"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="performance">Maximum Performance</option>
                  <option value="value" selected>
                    Best Value
                  </option>
                  <option value="silence">Quiet Operation</option>
                  <option value="prebuilt">Pre-built System</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="model_size"
                  className="block text-sm font-medium mb-2"
                >
                  AI Model Size
                </label>
                <select
                  id="model_size"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="small">Small (7B-13B parameters)</option>
                  <option value="medium" selected>
                    Medium (30B-70B parameters)
                  </option>
                  <option value="large">Large (70B+ parameters)</option>
                </select>
              </div>

              <button
                type="button"
                onClick={handleCalculate}
                className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors flex items-center justify-center gap-2"
              >
                <span>Calculate Recommendation</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white/5 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <h2 className="text-2xl font-semibold mb-6">
              Recommended Configuration
              {calculationPerformed && (
                <span className="text-sm text-green-400 ml-2">(Updated!)</span>
              )}
            </h2>

            {primaryRecommendation && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-medium">
                      {primaryRecommendation.name}
                    </h3>
                    <p className="text-green-400">
                      {primaryRecommendation.description}
                    </p>
                  </div>
                  <div className="bg-green-900/20 px-4 py-2 rounded-md">
                    <p className="font-medium">
                      Price: {primaryRecommendation.price}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">
                    Key Specifications:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <ul className="space-y-2">
                        {primaryRecommendation.specs
                          .split(",")
                          .map((spec, index) => {
                            // Extract the component type (GPU, CPU, etc.) and its details
                            const parts = spec.trim().split(" ");
                            let type = "";
                            let details = "";

                            if (spec.includes("RTX")) {
                              type = "GPU";
                              details = spec.trim();
                            } else if (
                              spec.includes("Ryzen") ||
                              spec.includes("Intel") ||
                              spec.includes("Core")
                            ) {
                              type = "CPU";
                              details = spec.trim();
                            } else if (
                              spec.includes("DDR5") ||
                              (spec.includes("GB") && !spec.includes("NVMe"))
                            ) {
                              type = "RAM";
                              details = spec.trim();
                            } else if (
                              spec.includes("NVMe") ||
                              spec.includes("SSD") ||
                              spec.includes("HDD")
                            ) {
                              type = "Storage";
                              details = spec.trim();
                            } else {
                              type = spec.includes(":")
                                ? spec.split(":")[0].trim()
                                : "";
                              details = spec.includes(":")
                                ? spec.split(":")[1].trim()
                                : spec.trim();
                            }

                            return (
                              <li key={index}>
                                <span className="font-medium">{type}:</span>{" "}
                                {details}
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">AI Performance:</h5>
                      <div className="w-full bg-gray-700 rounded-full h-2.5 mb-1">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{
                            width: getPerformancePercent(
                              primaryRecommendation.performance
                            ),
                          }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-400">
                        {primaryRecommendation.performance}
                      </p>

                      <h5 className="font-medium mt-4 mb-2">
                        Budget Utilization:
                      </h5>
                      <div className="w-full bg-gray-700 rounded-full h-2.5 mb-1">
                        <div
                          className="bg-green-500 h-2.5 rounded-full"
                          style={{
                            width: `${
                              budget <= 2000 ? 75 : budget <= 2500 ? 90 : 100
                            }%`,
                          }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-400">
                        {budget <= 2000 ? "75" : budget <= 2500 ? "90" : "100"}%
                        of max budget
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">
                    Why This Configuration:
                  </h4>
                  <p>
                    Based on your budget of{" "}
                    {budget <= 2000
                      ? "up to €2,000"
                      : budget <= 2500
                      ? "€2,000-€2,500"
                      : "€2,500+"}
                    and preference for{" "}
                    {prioritizeGPU
                      ? "maximum performance"
                      : prioritizeRAM
                      ? "high RAM capacity"
                      : prioritizeStorage
                      ? "large storage"
                      : "best value"}
                    , this {primaryRecommendation.name} offers excellent AI
                    inference performance for
                    {modelSize === "small"
                      ? " small"
                      : modelSize === "medium"
                      ? " medium"
                      : " large"}
                    -sized models while staying{" "}
                    {budget >= 2500 ? "close to" : "comfortably within"} your
                    budget range.
                  </p>
                  <p className="mt-2">
                    {primaryRecommendation.name.includes("4070 Ti")
                      ? "The RTX 4070 Ti provides 56% of the performance of an RTX 4090 at less than half the price, making it the sweet spot for value."
                      : primaryRecommendation.name.includes("4080")
                      ? "The RTX 4080 delivers 73% of RTX 4090 performance at a more reasonable price point, offering excellent performance for most AI workloads."
                      : primaryRecommendation.name.includes("5080")
                      ? "The RTX 5080 provides nearly 90% of RTX 4090 performance with newer architecture benefits and improved efficiency."
                      : "This configuration provides an excellent balance of performance and value for your specific requirements."}
                  </p>
                </div>

                {alternativeRecommendation && (
                  <div>
                    <h4 className="text-lg font-medium mb-2">
                      Alternative Option:
                    </h4>
                    <p>
                      If you're looking for{" "}
                      {primaryRecommendation.price >
                      alternativeRecommendation.price
                        ? "additional savings"
                        : "better performance"}
                      , consider the
                      <span className="text-blue-400">
                        {" "}
                        {alternativeRecommendation.name}
                      </span>{" "}
                      at {alternativeRecommendation.price}, which offers{" "}
                      {alternativeRecommendation.performance} of RTX 4090
                      performance.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
