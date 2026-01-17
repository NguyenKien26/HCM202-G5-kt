"use client"

import { GameContainer } from "@/components/game-container"

export function GameSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-50 to-white">
      <GameContainer />
    </section>
  )
}
