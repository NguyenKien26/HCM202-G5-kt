import { BookOpen, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6" />
            <div>
              <p className="font-semibold">Tư tưởng Hồ Chí Minh</p>
              <p className="text-sm text-background/70">Học tập và làm theo tấm gương đạo đức Hồ Chí Minh</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-background/70">
            <span>Thiết kế với</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>cho mục đích giáo dục</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>© 2026 - Tài liệu học tập môn Tư tưởng Hồ Chí Minh</p>
        </div>
      </div>
    </footer>
  )
}
