import { Quote, Star, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ConclusionSection() {
  return (
    <section id="conclusion" className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-medium mb-4">
            <Star className="h-4 w-4" />
            Kết luận
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            Ý nghĩa và bài học lịch sử
          </h2>
        </div>

        {/* Bảng 3 cột trực quan */}
        {/* Nội dung chính - Thiết kế mới */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="group relative p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary/40">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Đặc thù, tất yếu và lâu dài</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Giải quyết tồn tại cũ, xây dựng nền tảng CNXH, hình thành con người mới
                </p>
              </div>
            </div>
          </div>

          <div className="group relative p-6 bg-gradient-to-br from-blue-50 to-blue-50/50 dark:from-blue-950/30 dark:to-blue-950/10 border-2 border-blue-200 dark:border-blue-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">"Bỏ qua" chế độ tư bản</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Vận dụng sáng tạo, học hỏi tinh hoa, phù hợp thực tiễn Việt Nam
                </p>
              </div>
            </div>
          </div>

          <div className="group relative p-6 bg-gradient-to-br from-green-50 to-green-50/50 dark:from-green-950/30 dark:to-green-950/10 border-2 border-green-200 dark:border-green-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-green-300 dark:hover:border-green-700">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Con đường Việt Nam chọn</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Giữ độc lập dân tộc + đi lên CNXH; dựa vào sức mạnh nhân dân; nguyên tắc "Xây đi đôi với Chống"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ý nghĩa lịch sử - Thiết kế mới */}
        <div className="mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl"></div>
          <div className="relative p-8 border-2 border-primary/30 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Star className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-xl text-primary">Tóm gọn ý nghĩa lịch sử</h3>
            </div>
            <p className="text-foreground leading-relaxed text-lg pl-13">
              Con đường CNXH của Việt Nam vừa bảo đảm <strong className="text-primary">độc lập dân tộc,</strong> vừa nâng cao <strong className="text-primary">hạnh phúc nhân dân,</strong> xây dựng <strong className="text-primary">nền tảng vật chất – tinh thần</strong> và <strong className="text-primary">con người mới.</strong>
            </p>
          </div>
        </div>

        {/* Bài học - Thiết kế mới */}
        <div className="mb-8">
          <div className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-amber-900 dark:text-amber-200">Bài học</h3>
            </div>
            <p className="text-foreground leading-relaxed text-lg pl-13">
              Vận dụng <strong className="text-amber-700 dark:text-amber-400">sáng tạo lý luận,</strong> dựa vào <strong className="text-amber-700 dark:text-amber-400">đại đoàn kết toàn dân,</strong> kết hợp <strong className="text-amber-700 dark:text-amber-400">xây dựng – chống tiêu cực.</strong>
            </p>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-12 p-6 bg-accent/30 rounded-2xl border border-accent text-center">
          <p className="text-lg font-semibold text-foreground mb-2">Thông điệp kết luận</p>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Con đường quá độ bỏ qua chế độ tư bản là sự lựa chọn <strong className="text-foreground">duy nhất đúng đắn</strong>, đáp ứng cả quy luật phát triển của thời đại và nguyện vọng thiết thân của dân tộc Việt Nam.
          </p>
        </div>
      </div>
    </section>
  )
}
