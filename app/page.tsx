import Link from "next/link";

export default function Overview() {
  return (
    <div className="flex min-h-screen flex-col items-center p-6 md:p-12">
      <div className="max-w-4xl w-full">
        {/* Hero Section */}
        <section className="mb-16 animate-slide-up">
          <h1 className="text-5xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
            Best Hardware for AI Inference
          </h1>
          <p className="text-xl text-center mb-10 text-gray-300 max-w-3xl mx-auto">
            Comprehensive research on desktop computers under €2500 for running
            local LLMs, comparing performance, value, and specifications.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/desktops"
              className="btn-primary flex items-center gap-2"
            >
              <span>View Top Desktops</span>
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
            <Link
              href="/calculator"
              className="btn-secondary flex items-center gap-2"
            >
              <span>Budget Calculator</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm0 2h8v12H6V4zm2 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm1 3a1 1 0 100 2h2a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </section>

        {/* Executive Summary */}
        <section
          className="mb-12 card p-8 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
            Executive Summary
          </h2>
          <p className="mb-4">
            This research identifies the best desktop computers for AI inference
            workloads under €2500. Our analysis focuses on performance, value,
            and suitability for different AI model sizes.
          </p>
          <p>
            Based on extensive benchmarking and component analysis, we recommend
            the Custom RTX 4070 Ti System as the best overall option, offering
            excellent AI performance at €1,800-2,200 - well within the specified
            budget constraint.
          </p>
        </section>

        {/* Key Findings */}
        <section
          className="mb-12 card p-8 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
            Key Findings
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-blue-500/20 p-1 border border-blue-500/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-400"
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
              <div>
                <strong className="font-medium text-lg text-blue-300">
                  GPU is the most critical component
                </strong>
                <p className="text-gray-300">
                  For AI inference performance, with NVIDIA RTX 40/50 series
                  cards offering the best balance of performance and value.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-blue-500/20 p-1 border border-blue-500/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-400"
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
              <div>
                <strong className="font-medium text-lg text-blue-300">
                  VRAM capacity is crucial
                </strong>
                <p className="text-gray-300">
                  For determining which model sizes can be run locally. 12GB is
                  sufficient for most medium-sized models, while 16GB+ allows
                  for larger models without quantization.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-blue-500/20 p-1 border border-blue-500/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-400"
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
              <div>
                <strong className="font-medium text-lg text-blue-300">
                  RTX 4070 Ti offers the best balance
                </strong>
                <p className="text-gray-300">
                  Of performance (56% of RTX 4090) and value within the €2500
                  budget constraint.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-blue-500/20 p-1 border border-blue-500/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-400"
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
              <div>
                <strong className="font-medium text-lg text-blue-300">
                  Custom-built systems typically offer 10-20% better value
                </strong>
                <p className="text-gray-300">
                  Than pre-built alternatives, though pre-built systems provide
                  convenience and warranty benefits.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* Performance Indicators */}
        <section
          className="mb-12 card p-8 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
            Key Performance Indicators for AI Inference
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2 text-blue-300">
                GPU Performance Comparison
              </h3>
              <div className="space-y-5 mt-6">
                <div className="performance-card">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-white">
                      RTX 4090 (24GB)
                    </span>
                    <span className="text-blue-300 font-medium">100%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>

                <div className="performance-card">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-white">
                      RTX 5080 (16GB)
                    </span>
                    <span className="text-blue-300 font-medium">85-90%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: "87%" }}
                    ></div>
                  </div>
                </div>

                <div className="performance-card">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-white">
                      RTX 4080 SUPER (16GB)
                    </span>
                    <span className="text-blue-300 font-medium">78%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                </div>

                <div className="performance-card">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-white">
                      RTX 4080 (16GB)
                    </span>
                    <span className="text-blue-300 font-medium">73%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: "73%" }}
                    ></div>
                  </div>
                </div>

                <div className="performance-card">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-white">
                      RTX 4070 Ti (12GB)
                    </span>
                    <span className="text-blue-300 font-medium">56%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: "56%" }}
                    ></div>
                  </div>
                </div>

                <div className="performance-card">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-white">
                      RTX 4070 SUPER (12GB)
                    </span>
                    <span className="text-blue-300 font-medium">51%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: "51%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Budget Considerations */}
        <section
          className="mb-12 card p-8 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
            Budget Considerations
          </h2>
          <p className="mb-4">
            Our analysis reveals distinct performance tiers within and slightly
            above the €2500 budget:
          </p>

          <div className="space-y-4 mb-6">
            <div className="p-6 bg-gradient-to-br from-green-900/20 to-green-900/10 rounded-xl border border-green-600/20">
              <h3 className="text-lg font-medium mb-2 text-green-400">
                Under €2000: Value Option
              </h3>
              <p className="text-gray-300">
                RTX 4070 SUPER systems offer good performance (51% of RTX 4090)
                at €1,600-1,900, making them excellent value options for
                budget-conscious users.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-900/20 to-green-900/10 rounded-xl border border-green-600/20">
              <h3 className="text-lg font-medium mb-2 text-green-400">
                €2000-2500: Best Balance
              </h3>
              <p className="text-gray-300">
                RTX 4070 Ti systems provide significantly better performance
                (56% of RTX 4090) while staying within budget at €1,800-2,200,
                offering the best balance of performance and value.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-yellow-900/20 to-yellow-900/10 rounded-xl border border-yellow-600/20">
              <h3 className="text-lg font-medium mb-2 text-yellow-400">
                €2500-3000: Performance Option
              </h3>
              <p className="text-gray-300">
                RTX 4080/5080 systems deliver substantially better performance
                (73-90% of RTX 4090) but typically exceed the €2500 budget,
                suitable for users who prioritize performance over strict budget
                adherence.
              </p>
            </div>
          </div>

          <p className="text-gray-300">
            Custom-built systems consistently offer better value than pre-built
            alternatives, though they require more technical knowledge or
            additional assembly costs.
          </p>
        </section>

        {/* Call to Action */}
        <div className="flex justify-center items-center gap-6 py-10 flex-wrap">
          <Link
            href="/desktops"
            className="btn-primary flex items-center gap-2"
          >
            <span>Explore Top Desktops</span>
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
          <Link
            href="/compare"
            className="btn-secondary flex items-center gap-2"
          >
            <span>Compare Options</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
