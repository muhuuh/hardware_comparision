"use client";

import Link from "next/link";

export default function Methodology() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12">
      <div className="max-w-6xl w-full">
        <nav className="mb-8 animate-fade-in">
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>Back to Home</span>
          </Link>
        </nav>

        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 sophisticated-title">
            Research Methodology
          </h1>
          <div className="flex justify-center">
            <div className="max-w-3xl">
              <p className="text-xl text-gray-300">
                Our approach to evaluating and recommending AI desktop systems
              </p>
            </div>
          </div>
        </div>

        <section
          className="card p-8 mb-10 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">
            Research Context
          </h2>

          <div className="bg-gradient-to-br from-blue-900/10 to-transparent border border-blue-500/10 rounded-xl p-5 mb-6">
            <p className="text-gray-300 mb-4">
              This section provides an overview of the key points and context
              within which the research on AI desktop systems was conducted. It
              outlines the criteria used for evaluating desktop configurations,
              including performance metrics, budget considerations, and
              component specifications.
            </p>

            <p className="text-gray-300 mb-4">
              The research focuses on identifying the best desktop systems for
              AI inference under a budget of €2500, taking into account the
              latest hardware advancements and market trends.
            </p>

            <p className="text-gray-300">
              By understanding the methodology, users can gain insights into how
              the recommendations were formulated and the factors that influence
              AI performance in desktop systems.
            </p>
          </div>
        </section>

        <section
          className="card p-8 mb-10 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">
            Performance Evaluation Criteria
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-900/10 to-transparent border border-blue-500/10 rounded-xl p-5">
              <h3 className="text-xl font-medium mb-3 text-blue-300 flex items-center gap-2">
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
                AI Inference Performance
              </h3>
              <p className="text-gray-300">
                Performance scores are normalized with the RTX 4090 set as the
                baseline (100%). We evaluated systems using common LLM workloads
                including Llama-2, Mistral, and other popular open-source
                models. The evaluation included both batch processing and
                real-time inference scenarios.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/10 to-transparent border border-blue-500/10 rounded-xl p-5">
              <h3 className="text-xl font-medium mb-3 text-blue-300 flex items-center gap-2">
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
                Value Rating System
              </h3>
              <p className="text-gray-300">
                Value ratings (1-10) were assigned based on a formula that
                considers performance relative to price, with higher scores
                indicating better value. Systems that meet or exceed expected
                performance for their price point received higher value ratings.
              </p>
            </div>
          </div>
        </section>

        <div
          className="flex justify-center mt-16 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <Link
            href="/desktops"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg font-medium text-white transition-all shadow-md hover:shadow-lg active:shadow-sm flex items-center gap-2"
          >
            <span>View Top Desktop Recommendations</span>
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
