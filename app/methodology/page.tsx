"use client";

import Link from "next/link";

export default function Methodology() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="max-w-4xl w-full">
        <nav className="mb-8">
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            ← Back to Home
          </Link>
        </nav>

        <h1 className="text-4xl font-bold mb-8">Methodology</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Research Context</h2>
          <p className="mb-4">
            This section provides an overview of the key points and context
            within which the research on AI desktop systems was conducted. It
            outlines the criteria used for evaluating desktop configurations,
            including performance metrics, budget considerations, and component
            specifications.
          </p>
          <p className="mb-4">
            The research focuses on identifying the best desktop systems for AI
            inference under a budget of €2500, taking into account the latest
            hardware advancements and market trends.
          </p>
          <p>
            By understanding the methodology, users can gain insights into how
            the recommendations were formulated and the factors that influence
            AI performance in desktop systems.
          </p>
        </section>
      </div>
    </main>
  );
}
