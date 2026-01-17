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

        {/* Infographic - So sánh */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-2 border-primary/30 bg-primary/5">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-primary mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">
                  1
                </span>
                Mục tiêu CNXH
              </h3>
              <p className="text-muted-foreground mb-4">Vì lợi ích số đông nhân dân lao động</p>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Xóa bỏ áp bức, bóc lột
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Công bằng, bình đẳng xã hội
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Phát triển toàn diện con người
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-muted bg-muted/30">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-muted-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-muted-foreground text-background rounded-full flex items-center justify-center text-sm">
                  2
                </span>
                Chế độ cũ
              </h3>
              <p className="text-muted-foreground mb-4">Vì lợi ích thiểu số giai cấp bóc lột</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
                  Duy trì áp bức, bất công
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
                  Phân hóa giàu nghèo sâu sắc
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
                  Lợi nhuận đặt trên con người
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Quote Card */}
        <Card className="mb-12 bg-primary text-primary-foreground overflow-hidden relative">
          <CardContent className="p-8 relative z-10">
            <Quote className="h-10 w-10 mb-4 opacity-50" />
            <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed mb-4 text-balance">
              {
                '"Nước ta là một nước nông nghiệp lạc hậu, lao động bằng tay chân là chính... Muốn tiến lên chủ nghĩa xã hội thì phải phát triển kinh tế và văn hóa. Vì sao không phát triển tư bản chủ nghĩa? Vì tư bản chủ nghĩa là bóc lột."'
              }
            </blockquote>
            <cite className="text-primary-foreground/80">— Chủ tịch Hồ Chí Minh</cite>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-primary" />Ý nghĩa lý luận
              </h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  Vận dụng sáng tạo lý luận Mác-Lênin vào điều kiện cụ thể Việt Nam
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  Làm phong phú thêm kho tàng lý luận về con đường đi lên CNXH
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  Khẳng định tính đúng đắn của sự lựa chọn con đường XHCN
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-primary" />Ý nghĩa thực tiễn
              </h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  Định hướng cho công cuộc đổi mới và phát triển đất nước
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  Cơ sở để xây dựng kinh tế thị trường định hướng XHCN
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  Kim chỉ nam cho hội nhập quốc tế, giữ vững định hướng XHCN
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Final Message */}
        <div className="mt-12 p-6 bg-accent/30 rounded-2xl border border-accent text-center">
          <p className="text-lg font-semibold text-foreground mb-2">Thông điệp kết luận</p>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Con đường quá độ bỏ qua chế độ tư bản là{" "}
            <strong className="text-foreground">sự lựa chọn duy nhất đúng đắn</strong>, đáp ứng cả quy luật phát triển
            của thời đại và nguyện vọng thiết thân của dân tộc Việt Nam.
          </p>
        </div>
      </div>
    </section>
  )
}
