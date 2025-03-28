import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Top 10 Desktop Computers for AI Model Inference",
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
        className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen`}
      >
        <header className="bg-gray-800/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-700/50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a
                href="/"
                className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
              >
                AI Desktop Research
              </a>
            </div>
            <nav className="flex flex-wrap gap-4 md:gap-8">
              <Link
                href="/"
                className="text-gray-200 hover:text-blue-300 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/desktops"
                className="text-gray-200 hover:text-blue-300 transition-colors font-medium"
              >
                Top Desktops
              </Link>
              <Link
                href="/compare"
                className="text-gray-200 hover:text-blue-300 transition-colors font-medium"
              >
                Compare Desktops
              </Link>
              <Link
                href="/calculator"
                className="text-gray-200 hover:text-blue-300 transition-colors font-medium"
              >
                Budget Calculator
              </Link>
              <Link
                href="/methodology"
                className="text-gray-200 hover:text-blue-300 transition-colors font-medium"
              >
                Methodology
              </Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-gray-800 border-t border-gray-700 mt-12 py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  AI Desktop Research
                </h3>
                <p className="text-gray-400">
                  Comprehensive research on the top desktop computers for
                  running AI models locally for inference workloads.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="/" className="hover:text-blue-400 transition">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/desktops"
                      className="hover:text-blue-400 transition"
                    >
                      Top Desktops
                    </a>
                  </li>
                  <li>
                    <a
                      href="/compare"
                      className="hover:text-blue-400 transition"
                    >
                      Compare Desktops
                    </a>
                  </li>
                  <li>
                    <a
                      href="/calculator"
                      className="hover:text-blue-400 transition"
                    >
                      Budget Calculator
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">References</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Puget Systems - Hardware Recommendations</li>
                  <li>Puget Systems - LLM Inference Benchmarks</li>
                  <li>Windows Central - RTX 5090/5080 PCs</li>
                  <li>Best Buy - RTX 4070 Ti Desktops</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-500">
              <p>
                © 2025 AI Desktop Research. All research data compiled for
                educational purposes.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
