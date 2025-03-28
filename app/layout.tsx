import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Hardware Comparison - Desktop Systems for LLM Inference",
  description:
    "Find the perfect desktop computer for running AI models locally within a €2500 budget",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-[#0a0c14] to-[#0f121e] text-gray-100 min-h-screen`}
      >
        <header className="sticky top-0 z-50 border-b border-white/10">
          <div className="glass">
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0 flex items-center">
                <a
                  href="/"
                  className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400 transition-all duration-300"
                >
                  AI Hardware Research
                </a>
              </div>
              <nav className="flex flex-wrap gap-4 md:gap-8">
                <Link
                  href="/"
                  className="text-gray-200 hover:text-blue-300 transition-colors font-medium relative group py-1"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link
                  href="/desktops"
                  className="text-gray-200 hover:text-blue-300 transition-colors font-medium relative group py-1"
                >
                  Top Desktops
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link
                  href="/compare"
                  className="text-gray-200 hover:text-blue-300 transition-colors font-medium relative group py-1"
                >
                  Compare
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link
                  href="/calculator"
                  className="text-gray-200 hover:text-blue-300 transition-colors font-medium relative group py-1"
                >
                  Calculator
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link
                  href="/methodology"
                  className="text-gray-200 hover:text-blue-300 transition-colors font-medium relative group py-1"
                >
                  Methodology
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <main className="animate-fade-in">{children}</main>

        <footer className="mt-20 pt-16 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <h3 className="text-lg font-semibold mb-4 text-blue-300">
                  AI Hardware Research
                </h3>
                <p className="text-gray-400">
                  Comprehensive research on the top desktop computers for
                  running AI models locally for inference workloads.
                </p>
              </div>
              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-lg font-semibold mb-4 text-blue-300">
                  Quick Links
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a
                      href="/"
                      className="hover:text-blue-400 transition flex items-center gap-2"
                    >
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/desktops"
                      className="hover:text-blue-400 transition flex items-center gap-2"
                    >
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Top Desktops
                    </a>
                  </li>
                  <li>
                    <a
                      href="/compare"
                      className="hover:text-blue-400 transition flex items-center gap-2"
                    >
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Compare
                    </a>
                  </li>
                  <li>
                    <a
                      href="/calculator"
                      className="hover:text-blue-400 transition flex items-center gap-2"
                    >
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Calculator
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <h3 className="text-lg font-semibold mb-4 text-blue-300">
                  References
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-500"
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
                    Puget Systems - Hardware Recommendations
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-500"
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
                    Puget Systems - LLM Inference Benchmarks
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-500"
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
                    Windows Central - RTX 5090/5080 PCs
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-500"
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
                    Best Buy - RTX 4070 Ti Desktops
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 text-center text-gray-500">
              <p>
                © 2025 AI Hardware Research. All research data compiled for
                educational purposes.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
