import React from "react";
import Link from "next/link";

export default function OverviewPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">
          AI Desktop Research Overview
        </h1>

        <div className="mb-12">
          <p className="text-xl mb-6">
            The demand for powerful desktop computers capable of running AI
            models locally has increased significantly. This research provides
            an overview of the best desktop options for AI inference workloads
            within a budget of €2500.
          </p>

          <div className="bg-white/5 p-6 rounded-lg border border-gray-700 mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Research Methodology
            </h2>
            <p className="mb-4">
              Our research evaluated desktop computers based on the following
              criteria:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>GPU performance for AI inference workloads</li>
              <li>VRAM capacity and bandwidth</li>
              <li>CPU performance for data preprocessing</li>
              <li>System RAM for handling large datasets</li>
              <li>Storage capacity and speed</li>
              <li>Value for money within €2500 budget</li>
              <li>Build quality and thermal management</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-gray-700 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Findings</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 text-xl">•</span>
                <div>
                  <strong className="text-lg">
                    GPU is the most important component
                  </strong>
                  <p>
                    For AI inference, GPU performance and VRAM capacity are the
                    most critical factors.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 text-xl">•</span>
                <div>
                  <strong className="text-lg">
                    VRAM requirements are increasing
                  </strong>
                  <p>
                    Modern AI models require at least 12GB VRAM, with 16GB or
                    more recommended for larger models.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 text-xl">•</span>
                <div>
                  <strong className="text-lg">
                    Custom builds offer better value
                  </strong>
                  <p>
                    Custom-built PCs typically offer better performance per euro
                    compared to pre-built options.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 text-xl">•</span>
                <div>
                  <strong className="text-lg">
                    RTX 4070 Ti offers best value in 2025
                  </strong>
                  <p>
                    For budgets under €2500, the RTX 4070 Ti provides excellent
                    performance for AI inference.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>
          <Link
            href="/comparison"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            View Comparison Table
          </Link>
        </div>
      </div>
    </main>
  );
}
