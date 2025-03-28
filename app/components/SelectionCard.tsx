import React from "react";

interface SelectionCardProps {
  name: string;
  price: string;
  gpu: string;
  performance: number | string;
  value: number;
  isSelected: boolean;
  onClick: () => void;
}

export default function SelectionCard({
  name,
  price,
  gpu,
  performance,
  value,
  isSelected,
  onClick,
}: SelectionCardProps) {
  return (
    <div
      className={`p-4 rounded-xl transition-all duration-300 cursor-pointer ${
        isSelected
          ? "bg-gradient-to-br from-blue-900/30 to-blue-900/10 border border-blue-500/40 shadow-lg shadow-blue-900/10"
          : "bg-gradient-to-br from-white/[0.06] to-white/[0.03] border border-white/10 hover:border-blue-500/30"
      }`}
      onClick={onClick}
    >
      <h3 className="text-md font-semibold text-white mb-1">{name}</h3>
      <p className="text-sm mb-1 text-gray-300">{price}</p>
      <p className="text-xs mb-1 text-gray-400">GPU: {gpu}</p>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center gap-1">
          <div className="w-10 bg-gray-700/50 rounded-full h-1">
            <div
              className="bg-blue-500 h-1 rounded-full"
              style={{
                width: `${
                  typeof performance === "number"
                    ? performance
                    : parseInt(performance as string) || 50
                }%`,
              }}
            ></div>
          </div>
          <span className="text-xs text-gray-400">
            {typeof performance === "number" ? `${performance}%` : performance}
          </span>
        </div>
        <span
          className={`text-xs px-2 py-0.5 rounded-full ${
            value >= 8
              ? "bg-green-900/20 text-green-300"
              : value >= 6
              ? "bg-blue-900/20 text-blue-300"
              : "bg-yellow-900/20 text-yellow-300"
          }`}
        >
          {value}/10
        </span>
      </div>

      {isSelected && (
        <div className="absolute -top-2 -right-2 bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
