import { Navigation } from "@/components/navigation"
import { GameSection } from "@/components/game-section"
import { Footer } from "@/components/footer"

export default function GamePage() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navigation />
      <main>
        <GameSection />
      </main>
      <Footer />
    </div>
  )
}
