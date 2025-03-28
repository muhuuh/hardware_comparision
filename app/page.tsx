import Link from "next/link";

export default function Overview() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-8">
          Best Desktops for AI Inference Under €2500
        </h1>

        <section className="mb-12 bg-white/5 p-6 rounded-lg border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Executive Summary</h2>
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

        <section className="mb-12 bg-white/5 p-6 rounded-lg border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Key Findings</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>GPU is the most critical component</strong> for AI
              inference performance, with NVIDIA RTX 40/50 series cards offering
              the best balance of performance and value.
            </li>
            <li>
              <strong>VRAM capacity is crucial</strong> for determining which
              model sizes can be run locally. 12GB is sufficient for most
              medium-sized models, while 16GB+ allows for larger models without
              quantization.
            </li>
            <li>
              <strong>RTX 4070 Ti offers the best balance</strong> of
              performance (56% of RTX 4090) and value within the €2500 budget
              constraint.
            </li>
            <li>
              <strong>
                Custom-built systems typically offer 10-20% better value
              </strong>{" "}
              than pre-built alternatives, though pre-built systems provide
              convenience and warranty benefits.
            </li>
          </ul>
        </section>

        <section className="mb-12 bg-white/5 p-6 rounded-lg border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            Key Performance Indicators for AI Inference
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">
                GPU Performance Comparison
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span>RTX 4090 (24GB)</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span>RTX 5080 (16GB)</span>
                    <span>85-90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: "87%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span>RTX 4080 SUPER (16GB)</span>
                    <span>78%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span>RTX 4080 (16GB)</span>
                    <span>73%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: "73%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span>RTX 4070 Ti (12GB)</span>
                    <span>56%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: "56%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span>RTX 4070 SUPER (12GB)</span>
                    <span>51%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: "51%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white/5 p-6 rounded-lg border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Budget Considerations</h2>
          <p className="mb-4">
            Our analysis reveals distinct performance tiers within and slightly
            above the €2500 budget:
          </p>

          <div className="space-y-4 mb-6">
            <div className="p-4 bg-green-900/20 rounded-lg">
              <h3 className="text-lg font-medium mb-2">
                Under €2000: Value Option
              </h3>
              <p>
                RTX 4070 SUPER systems offer good performance (51% of RTX 4090)
                at €1,600-1,900, making them excellent value options for
                budget-conscious users.
              </p>
            </div>

            <div className="p-4 bg-green-900/20 rounded-lg">
              <h3 className="text-lg font-medium mb-2">
                €2000-2500: Best Balance
              </h3>
              <p>
                RTX 4070 Ti systems provide significantly better performance
                (56% of RTX 4090) while staying within budget at €1,800-2,200,
                offering the best balance of performance and value.
              </p>
            </div>

            <div className="p-4 bg-yellow-900/20 rounded-lg">
              <h3 className="text-lg font-medium mb-2">
                €2500-3000: Performance Option
              </h3>
              <p>
                RTX 4080/5080 systems deliver substantially better performance
                (73-90% of RTX 4090) but typically exceed the €2500 budget,
                suitable for users who prioritize performance over strict budget
                adherence.
              </p>
            </div>
          </div>

          <p>
            Custom-built systems consistently offer better value than pre-built
            alternatives, though they require more technical knowledge or
            additional assembly costs.
          </p>
        </section>
      </div>
    </main>
  );
}
