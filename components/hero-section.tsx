"use client"

import type React from "react"
import { Star, ArrowRight, HelpCircle } from "lucide-react"

export function HeroSection() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/95 to-accent/10" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Star className="h-16 w-16 text-primary fill-primary" />
            <div className="absolute inset-0 animate-ping">
              <Star className="h-16 w-16 text-primary/30 fill-primary/30" />
            </div>
          </div>
        </div>

        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Tư tưởng Hồ Chí Minh</p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-8">
          Lựa chọn lịch sử: <span className="text-primary">{'Tại sao Việt Nam "Bỏ qua" Chủ nghĩa Tư bản?'}</span>
        </h1>

        {/* Question Card */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <HelpCircle className="h-8 w-8 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Nhiều quốc gia hiện đại hóa qua con đường tư bản chủ nghĩa, nhưng tại sao Hồ Chí Minh lại khẳng định
                  Việt Nam phải đi con đường khác?{" "}
                  <strong className="text-foreground">{'"Bỏ qua" có phải là bỏ qua văn minh nhân loại không?'}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Graphic */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm md:text-base">
              Độc lập dân tộc
            </div>
            <ArrowRight className="h-5 w-5 text-primary hidden sm:block" />
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded hidden sm:block" />
            <ArrowRight className="h-5 w-5 text-accent hidden sm:block" />
            <div className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold text-sm md:text-base">
              Chủ nghĩa xã hội
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-3">Sơ đồ dòng thời gian phát triển</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#theory"
            onClick={(e) => handleNavClick(e, "#theory")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Khám phá nội dung
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#quiz"
            onClick={(e) => handleNavClick(e, "#quiz")}
            className="inline-flex items-center px-6 py-3 border border-border bg-card text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
          >
            Chơi trắc nghiệm
          </a>
        </div>
      </div>
    </section>
  )
}
