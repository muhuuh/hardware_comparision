"use client";

import { useState } from "react";
import Link from "next/link";
import ComparisonTable from "../components/ComparisonTable";
import SelectionCard from "../components/SelectionCard";

export default function CompareDesktops() {
  const [selectedDesktops, setSelectedDesktops] = useState<number[]>([0, 1]); // Default to first two desktops
  const [showAllTable, setShowAllTable] = useState(false);

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
      withinBudget: true,
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
      withinBudget: true,
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
      withinBudget: "depends",
    },
    {
      name: "Skytech Chronos",
      price: "€2,580",
      gpu: "RTX 5080 (16GB)",
      cpu: "AMD Ryzen 7 9800X3D (8C/16T)",
      ram: "32GB DDR5-6000",
      storage: "2TB NVMe SSD + 6TB HDD",
      performance: 87,
      value: 8,
      withinBudget: false,
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
      withinBudget: "depends",
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
      withinBudget: false,
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
      withinBudget: "depends",
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
      withinBudget: false,
    },
    {
      name: "Lenovo Legion Tower 7i",
      price: "€3,300",
      gpu: "RTX 5080 (16GB)",
      cpu: "Intel Core Ultra 9 285K (24C/32T)",
      ram: "64GB DDR5-6400",
      storage: "2TB NVMe SSD",
      performance: 87,
      value: 6,
      withinBudget: false,
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
      withinBudget: false,
    },
  ];

  const toggleDesktop = (index: number) => {
    if (selectedDesktops.includes(index)) {
      // Remove if already selected
      if (selectedDesktops.length > 1) {
        setSelectedDesktops(selectedDesktops.filter((i) => i !== index));
      }
    } else {
      // Add if not selected and fewer than 3 are selected
      if (selectedDesktops.length < 3) {
        setSelectedDesktops([...selectedDesktops, index]);
      }
    }
  };

  const getComparisonData = () => {
    return selectedDesktops.map((index) => desktops[index]);
  };

  const comparisonData = getComparisonData();

  return (
    <div className="flex min-h-screen flex-col items-center p-6 md:p-12">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 sophisticated-title">
            Compare Desktop Systems
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select and compare different desktop configurations side by side to
            find your perfect match
          </p>
        </div>

        <div
          className="mb-12 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-blue-300">
              Selected Comparison
            </h2>
            <div className="text-sm px-4 py-2 bg-blue-900/20 rounded-full border border-blue-700/30 text-blue-300">
              {selectedDesktops.length}/3 systems selected
            </div>
          </div>
          <p className="text-gray-300 mb-6">
            Select up to three desktop systems to compare their specifications
            side-by-side. Click on any option below to add or remove it from the
            comparison.
          </p>

          <ComparisonTable desktops={comparisonData} className="mb-6" />
        </div>

        <div
          className="mb-12 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-300">
            Select Desktops to Compare
          </h2>
          <p className="text-gray-300 mb-6">
            Click on a desktop to select it for comparison. You can select up to
            three options to compare simultaneously.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {desktops.map((desktop, index) => (
              <SelectionCard
                key={index}
                name={desktop.name}
                price={desktop.price}
                gpu={desktop.gpu}
                performance={desktop.performance}
                value={desktop.value}
                isSelected={selectedDesktops.includes(index)}
                onClick={() => toggleDesktop(index)}
              />
            ))}
          </div>
        </div>

        <div
          className="mb-12 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-blue-300">
              All Desktops Comparison
            </h2>
            <button
              onClick={() => setShowAllTable(!showAllTable)}
              className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-lg transition-colors flex items-center gap-2 shadow-md"
            >
              <span>
                {showAllTable ? "Hide All Desktops" : "Show All Desktops"}
              </span>
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
                className={`transition-transform ${
                  showAllTable ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>

          {showAllTable && (
            <div className="animate-fade-in">
              <ComparisonTable desktops={desktops} showVramColumn={true} />
            </div>
          )}
        </div>

        <div
          className="flex justify-center mt-16 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <Link
            href="/calculator"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg font-medium text-white transition-all shadow-md hover:shadow-lg active:shadow-sm flex items-center gap-2"
          >
            <span>Try Budget Calculator</span>
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
    </div>
  );
}
