"use client";

import { useState } from "react";
import Link from "next/link";

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
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-6">Compare Desktops</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Selected Comparison</h2>
          <p className="text-gray-400 mb-4">
            Select up to three desktops from the options below to compare their
            specifications side-by-side.
          </p>

          <div className="overflow-x-auto bg-white/5 rounded-lg border border-gray-700 p-4">
            <table className="w-full text-left border-collapse mb-4">
              <thead>
                <tr>
                  <th className="border-b border-gray-700 p-4">Feature</th>
                  {comparisonData.map((desktop, index) => (
                    <th key={index} className="border-b border-gray-700 p-4">
                      {desktop.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-gray-700 p-4">Price</td>
                  {comparisonData.map((desktop, index) => (
                    <td key={index} className="border-b border-gray-700 p-4">
                      {desktop.price}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border-b border-gray-700 p-4">GPU</td>
                  {comparisonData.map((desktop, index) => (
                    <td key={index} className="border-b border-gray-700 p-4">
                      {desktop.gpu}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border-b border-gray-700 p-4">CPU</td>
                  {comparisonData.map((desktop, index) => (
                    <td key={index} className="border-b border-gray-700 p-4">
                      {desktop.cpu}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border-b border-gray-700 p-4">RAM</td>
                  {comparisonData.map((desktop, index) => (
                    <td key={index} className="border-b border-gray-700 p-4">
                      {desktop.ram}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border-b border-gray-700 p-4">Storage</td>
                  {comparisonData.map((desktop, index) => (
                    <td key={index} className="border-b border-gray-700 p-4">
                      {desktop.storage}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border-b border-gray-700 p-4">Performance</td>
                  {comparisonData.map((desktop, index) => (
                    <td key={index} className="border-b border-gray-700 p-4">
                      {desktop.performance}%
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border-b border-gray-700 p-4">Value Rating</td>
                  {comparisonData.map((desktop, index) => (
                    <td key={index} className="border-b border-gray-700 p-4">
                      {desktop.value}/10
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border-b border-gray-700 p-4">Under €2500</td>
                  {comparisonData.map((desktop, index) => (
                    <td key={index} className="border-b border-gray-700 p-4">
                      {desktop.withinBudget === true ? (
                        <span className="text-green-400">Yes</span>
                      ) : desktop.withinBudget === false ? (
                        <span className="text-red-400">No</span>
                      ) : (
                        <span className="text-yellow-400">
                          Depends on configuration
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          Select Desktops to Compare
        </h2>
        <p className="text-gray-400 mb-4">
          Click on a desktop to select it for comparison. You can select up to
          three options.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {desktops.map((desktop, index) => (
            <div
              key={index}
              className={`bg-white/5 p-3 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors cursor-pointer ${
                selectedDesktops.includes(index)
                  ? "border-blue-500 bg-blue-900/10"
                  : ""
              }`}
              onClick={() => toggleDesktop(index)}
            >
              <h3 className="text-md font-semibold">{desktop.name}</h3>
              <p className="text-sm mb-1">{desktop.price}</p>
              <p className="text-xs">GPU: {desktop.gpu}</p>
              <p className="text-xs text-gray-400">
                Performance: {desktop.performance}% | Value: {desktop.value}/10
              </p>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <button
            onClick={() => setShowAllTable(!showAllTable)}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors flex items-center gap-2"
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
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              All Desktops Comparison
            </h2>
            <div className="overflow-y-auto max-h-96 bg-white/5 rounded-lg border border-gray-700">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 bg-gray-800">
                  <tr>
                    <th className="border-b border-gray-700 p-4">Model</th>
                    <th className="border-b border-gray-700 p-4">Price</th>
                    <th className="border-b border-gray-700 p-4">GPU</th>
                    <th className="border-b border-gray-700 p-4">CPU</th>
                    <th className="border-b border-gray-700 p-4">RAM</th>
                    <th className="border-b border-gray-700 p-4">Storage</th>
                    <th className="border-b border-gray-700 p-4">
                      Performance
                    </th>
                    <th className="border-b border-gray-700 p-4">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {desktops.map((desktop, index) => (
                    <tr key={index} className="hover:bg-gray-800">
                      <td className="border-b border-gray-700 p-4">
                        {desktop.name}
                      </td>
                      <td className="border-b border-gray-700 p-4">
                        {desktop.price}
                      </td>
                      <td className="border-b border-gray-700 p-4">
                        {desktop.gpu}
                      </td>
                      <td className="border-b border-gray-700 p-4">
                        {desktop.cpu}
                      </td>
                      <td className="border-b border-gray-700 p-4">
                        {desktop.ram}
                      </td>
                      <td className="border-b border-gray-700 p-4">
                        {desktop.storage}
                      </td>
                      <td className="border-b border-gray-700 p-4">
                        {desktop.performance}%
                      </td>
                      <td className="border-b border-gray-700 p-4">
                        {desktop.value}/10
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
