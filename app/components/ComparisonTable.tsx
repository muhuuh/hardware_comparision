import React from "react";

interface Desktop {
  name: string;
  price: string;
  gpu: string;
  cpu: string;
  ram: string;
  storage: string;
  performance: number | string;
  value: number;
  withinBudget?: boolean | string;
  vram?: string;
}

interface ComparisonTableProps {
  desktops: Desktop[];
  showBudgetColumn?: boolean;
  showVramColumn?: boolean;
  className?: string;
}

export default function ComparisonTable({
  desktops,
  showBudgetColumn = true,
  showVramColumn = false,
  className = "",
}: ComparisonTableProps) {
  return (
    <div className={`card p-1 overflow-x-auto ${className}`}>
      <table className="w-full text-sm text-left text-gray-300">
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
            {showVramColumn && (
              <th scope="col" className="px-6 py-4 font-medium">
                VRAM
              </th>
            )}
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
            {showBudgetColumn && (
              <th scope="col" className="px-6 py-4 font-medium">
                Under €2500
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {desktops.map((desktop, index) => (
            <tr
              key={index}
              className="border-b border-gray-700/50 hover:bg-blue-900/10 transition-colors"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                {desktop.name}
              </th>
              <td className="px-6 py-4">{desktop.price}</td>
              <td className="px-6 py-4">{desktop.gpu}</td>
              {showVramColumn && (
                <td className="px-6 py-4">{desktop.vram || "N/A"}</td>
              )}
              <td className="px-6 py-4">{desktop.cpu}</td>
              <td className="px-6 py-4">{desktop.ram}</td>
              <td className="px-6 py-4">{desktop.storage}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-gray-700 rounded-full h-1.5">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full"
                      style={{
                        width: `${
                          typeof desktop.performance === "number"
                            ? desktop.performance
                            : parseInt(desktop.performance as string) || 50
                        }%`,
                      }}
                    ></div>
                  </div>
                  <span>
                    {typeof desktop.performance === "number"
                      ? `${desktop.performance}%`
                      : desktop.performance}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    desktop.value >= 8
                      ? "bg-green-900/30 text-green-300"
                      : desktop.value >= 6
                      ? "bg-blue-900/30 text-blue-300"
                      : "bg-yellow-900/30 text-yellow-300"
                  }`}
                >
                  {desktop.value}/10
                </span>
              </td>
              {showBudgetColumn && (
                <td className="px-6 py-4">
                  {desktop.withinBudget === true ? (
                    <span className="text-green-400 flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  ) : desktop.withinBudget === false ? (
                    <span className="text-red-400 flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span className="text-yellow-400 flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
