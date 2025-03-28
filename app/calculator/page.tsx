"use client";

import { useState, useEffect } from "react";
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
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);

    // Simulate calculation process
    setTimeout(() => {
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
      setIsLoading(false);
    }, 800); // Simulate a short calculation time for better UX
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
    <div className="flex min-h-screen flex-col items-center p-6 md:p-12">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 sophisticated-title">
            AI Desktop Budget Calculator
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tell us your budget and priorities, and we'll recommend the best
            desktop configuration for AI inference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            className="lg:col-span-1 card p-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-2xl font-semibold mb-6 sophisticated-title">
              Your Preferences
            </h2>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium mb-2 text-blue-300"
                >
                  Your Budget (€)
                </label>
                <div className="relative">
                  <select
                    id="budget"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/60 border border-blue-500/30 focus:ring-blue-500 focus:border-blue-500 shadow-inner transition-all hover:border-blue-500/50 appearance-none"
                  >
                    <option value="1500">Up to €1,500</option>
                    <option value="2000">€1,500 - €2,000</option>
                    <option value="2500" selected>
                      €2,000 - €2,500
                    </option>
                    <option value="3000">€2,500 - €3,000</option>
                    <option value="3500">€3,000+</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="priority"
                  className="block text-sm font-medium mb-2 text-blue-300"
                >
                  Your Priority
                </label>
                <div className="relative">
                  <select
                    id="priority"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/60 border border-blue-500/30 focus:ring-blue-500 focus:border-blue-500 shadow-inner transition-all hover:border-blue-500/50 appearance-none"
                  >
                    <option value="performance">Maximum Performance</option>
                    <option value="value" selected>
                      Best Value
                    </option>
                    <option value="silence">Quiet Operation</option>
                    <option value="prebuilt">Pre-built System</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="model_size"
                  className="block text-sm font-medium mb-2 text-blue-300"
                >
                  AI Model Size
                </label>
                <div className="relative">
                  <select
                    id="model_size"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/60 border border-blue-500/30 focus:ring-blue-500 focus:border-blue-500 shadow-inner transition-all hover:border-blue-500/50 appearance-none"
                  >
                    <option value="small">Small (7B-13B parameters)</option>
                    <option value="medium" selected>
                      Medium (30B-70B parameters)
                    </option>
                    <option value="large">Large (70B+ parameters)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCalculate}
                disabled={isLoading}
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg font-medium text-white transition-all shadow-md hover:shadow-lg active:shadow-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Calculating...</span>
                  </>
                ) : (
                  <>
                    <span>Calculate Recommendation</span>
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
                  </>
                )}
              </button>
            </div>
          </div>

          <div
            className="lg:col-span-2 card p-8 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <h2 className="text-2xl font-semibold mb-6 sophisticated-title">
              Recommended Configuration
              {calculationPerformed && (
                <span className="text-sm text-green-400 ml-2 animate-pulse-subtle">
                  Updated!
                </span>
              )}
            </h2>

            {primaryRecommendation && (
              <div
                className={`space-y-6 ${
                  calculationPerformed ? "animate-fade-in" : ""
                }`}
              >
                <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-medium text-white">
                      {primaryRecommendation.name}
                    </h3>
                    <p className="text-green-400">
                      {primaryRecommendation.description}
                    </p>
                  </div>
                  <div className="value-badge value-badge-high">
                    <span className="font-medium">
                      Price: {primaryRecommendation.price}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-4 text-blue-300">
                    Key Specifications:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-900/10 border border-blue-700/30 rounded-xl p-5">
                      <ul className="space-y-3">
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

                            const icons: Record<string, JSX.Element> = {
                              GPU: (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-blue-400"
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
                              ),
                              CPU: (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-blue-400"
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
                              ),
                              RAM: (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-blue-400"
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
                              ),
                              Storage: (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-blue-400"
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
                              ),
                            };

                            return (
                              <li
                                key={index}
                                className="flex items-center gap-3"
                              >
                                {icons[type] || (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-blue-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                )}
                                <span>
                                  <span className="font-medium text-blue-300">
                                    {type}:
                                  </span>{" "}
                                  <span className="text-gray-300">
                                    {details}
                                  </span>
                                </span>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-medium mb-3 text-blue-300 flex items-center gap-2">
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
                          AI Performance:
                        </h5>
                        <div className="progress-bar">
                          <div
                            className="progress-bar-fill"
                            style={{
                              width: getPerformancePercent(
                                primaryRecommendation.performance
                              ),
                            }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-300 mt-2">
                          {primaryRecommendation.performance}
                        </p>
                      </div>

                      <div>
                        <h5 className="font-medium mb-3 text-blue-300 flex items-center gap-2">
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
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Budget Utilization:
                        </h5>
                        <div className="progress-bar">
                          <div
                            className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-500 ease-out"
                            style={{
                              width: `${
                                budget <= 2000 ? 75 : budget <= 2500 ? 90 : 100
                              }%`,
                            }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-300 mt-2">
                          {budget <= 2000
                            ? "75"
                            : budget <= 2500
                            ? "90"
                            : "100"}
                          % of max budget
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 rounded-xl p-6 border border-blue-700/30">
                  <h4 className="text-lg font-medium mb-3 text-blue-300">
                    Why This Configuration:
                  </h4>
                  <p className="text-gray-300">
                    Based on your budget of{" "}
                    <span className="text-blue-300 font-medium">
                      {budget <= 2000
                        ? "up to €2,000"
                        : budget <= 2500
                        ? "€2,000-€2,500"
                        : "€2,500+"}
                    </span>{" "}
                    and preference for{" "}
                    <span className="text-blue-300 font-medium">
                      {prioritizeGPU
                        ? "maximum performance"
                        : prioritizeRAM
                        ? "high RAM capacity"
                        : prioritizeStorage
                        ? "large storage"
                        : "best value"}
                    </span>
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
                  <p className="mt-3 text-gray-300">
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
                  <div className="mt-6 bg-gradient-to-br from-indigo-900/20 to-indigo-900/5 rounded-xl p-6 border border-indigo-700/30">
                    <h4 className="text-lg font-medium mb-3 text-indigo-300 flex items-center gap-2">
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
                          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                        />
                      </svg>
                      Alternative Option:
                    </h4>
                    <p className="text-gray-300">
                      If you're looking for{" "}
                      <span className="text-indigo-300 font-medium">
                        {primaryRecommendation.price >
                        alternativeRecommendation.price
                          ? "additional savings"
                          : "better performance"}
                      </span>
                      , consider the{" "}
                      <span className="text-indigo-300 font-medium">
                        {alternativeRecommendation.name}
                      </span>{" "}
                      at {alternativeRecommendation.price}, which offers{" "}
                      {alternativeRecommendation.performance} of RTX 4090
                      performance.
                    </p>
                    <div className="flex justify-end mt-4">
                      <Link
                        href={alternativeRecommendation.link}
                        className="text-indigo-300 hover:text-indigo-200 transition-colors flex items-center gap-1"
                      >
                        <span>View details</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
