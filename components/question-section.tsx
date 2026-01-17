import { HelpCircle, Globe, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function QuestionSection() {
  return (
    <section id="question" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-medium mb-4">
            <HelpCircle className="h-4 w-4" />
            Đặt vấn đề
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">Câu hỏi kiến tạo</h2>
        </div>

        <Card className="border-l-4 border-l-primary shadow-lg">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <Globe className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div className="space-y-4">
                <p className="text-lg text-foreground leading-relaxed">
                  Nhiều nước trên thế giới đi lên hiện đại hóa thông qua <strong>chủ nghĩa tư bản</strong>. Nhưng Hồ Chí
                  Minh khẳng định Việt Nam phải quá độ lên chủ nghĩa xã hội{" "}
                  <span className="text-primary font-semibold">bỏ qua chủ nghĩa tư bản</span>.
                </p>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <ArrowRight className="h-5 w-5 text-primary" />
                  <p className="text-base">
                    Vậy bỏ qua chủ nghĩa tư bản có nghĩa là gì, và tại sao đây là sự lựa chọn phù hợp với đặc điểm lịch
                    sử – xã hội của Việt Nam?
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">01</div>
              <h3 className="font-semibold text-foreground mb-2">Lý luận Mác-Lênin</h3>
              <p className="text-muted-foreground text-sm">
                Vận dụng sáng tạo học thuyết về hình thái kinh tế - xã hội vào điều kiện cụ thể Việt Nam
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">02</div>
              <h3 className="font-semibold text-foreground mb-2">Thực tiễn Việt Nam</h3>
              <p className="text-muted-foreground text-sm">
                Xuất phát từ đặc điểm lịch sử, văn hóa, xã hội và điều kiện khách quan của dân tộc
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
