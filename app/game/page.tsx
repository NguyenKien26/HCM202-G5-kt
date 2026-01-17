"use client"

import { DecisionGameSection } from "@/components/decision-game-section"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"
import Link from "next/link"

export default function GamePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Quay lại trang chủ
              </Button>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="icon">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-16">
        <DecisionGameSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Game mô phỏng giáo dục - Môn học HCM202
          </p>
          <Link href="/">
            <Button variant="outline" size="sm" className="gap-2">
              <Home className="h-4 w-4" />
              Về trang chủ để học thêm
            </Button>
          </Link>
        </div>
      </footer>
    </div>
  )
}
