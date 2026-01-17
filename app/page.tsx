"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TheorySection } from "@/components/theory-section"
import { ExplanationSection } from "@/components/explanation-section"
import { AnalysisSection } from "@/components/analysis-section"
import { QuizSection } from "@/components/quiz-section"
import { ConclusionSection } from "@/components/conclusion-section"
import { Footer } from "@/components/footer"

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navigation />
      <main>
        <HeroSection />
        <TheorySection />
        <ExplanationSection />
        <AnalysisSection />
        <QuizSection />
        <ConclusionSection />
      </main>
      <Footer />
    </div>
  )
}
