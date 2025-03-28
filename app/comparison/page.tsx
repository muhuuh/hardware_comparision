import React from "react";
import Link from "next/link";

export default function ComparisonPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Desktop Comparison Table
        </h1>

        <div className="mb-12">
          <p className="text-xl mb-6 text-center">
            Compare the top desktop computers for AI model inference within a
            €2500 budget
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700 border border-gray-700 rounded-lg">
              <thead className="bg-gray-800">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider"
                  >
                    Model
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider"
                  >
                    GPU
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider"
                  >
                    CPU
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider"
                  >
                    RAM
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider"
                  >
                    Storage
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider"
                  >
                    Price (€)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-900 divide-y divide-gray-700">
                <tr className="hover:bg-gray-800">
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">
                    Custom RTX 4070 Ti
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    RTX 4070 Ti (12GB)
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    Ryzen 7 7700X
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    32GB DDR5
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    1TB NVMe SSD
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    2,100
                  </td>
                </tr>
                <tr className="hover:bg-gray-800">
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">
                    Allied Gaming Patriot
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    RTX 4070 Ti (12GB)
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    Intel i7-14700K
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    32GB DDR5
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    1TB NVMe SSD
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    1,890
                  </td>
                </tr>
                <tr className="hover:bg-gray-800">
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">
                    Custom RTX 4070 Ti SUPER
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    RTX 4070 Ti SUPER (16GB)
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    Ryzen 7 7800X3D
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    32GB DDR5
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    2TB NVMe SSD
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    2,300
                  </td>
                </tr>
                <tr className="hover:bg-gray-800">
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">
                    Skytech Chronos
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    RTX 5080 (16GB)
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    Intel i7-15700K
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    32GB DDR5
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    1TB NVMe SSD
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    2,580
                  </td>
                </tr>
                <tr className="hover:bg-gray-800">
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">
                    NZXT Player PC
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    RTX 5090 (24GB)
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    Intel i9-15900K
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    64GB DDR5
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    2TB NVMe SSD
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    2,760
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
