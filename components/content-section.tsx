"use client"

import { useState } from "react"
import { BookOpen, Lightbulb, Target, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ContentSection() {
  const [activeTab, setActiveTab] = useState("concept")

  const concepts = [
    {
      id: "concept",
      title: "Khái niệm thời kỳ quá độ",
      icon: BookOpen,
      content: {
        main: "Theo Hồ Chí Minh, thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là thời kỳ cải biến xã hội cũ thành xã hội mới - một xã hội hoàn toàn chưa từng có trong lịch sử dân tộc.",
        points: [
          "Là quá trình cách mạng sâu sắc, triệt để trên tất cả các lĩnh vực của đời sống xã hội",
          "Nhằm xây dựng một chế độ xã hội mới về chất so với tất cả các xã hội trước đó",
          "Đây là thời kỳ lịch sử có vị trí đặc biệt quan trọng trong tiến trình cách mạng Việt Nam",
          "Gắn liền với đặc điểm một nước nông nghiệp lạc hậu, vừa thoát khỏi ách thuộc địa",
        ],
      },
    },
    {
      id: "meaning",
      title: "Ý nghĩa 'bỏ qua'",
      icon: Lightbulb,
      content: {
        main: '"Bỏ qua chế độ tư bản chủ nghĩa" không có nghĩa là phủ nhận hoàn toàn mọi thành tựu của chủ nghĩa tư bản, mà là bỏ qua việc thiết lập vị trí thống trị của quan hệ sản xuất tư bản chủ nghĩa.',
        points: [
          "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa",
          "Tiếp thu, kế thừa những thành tựu mà nhân loại đã đạt được dưới chế độ tư bản",
          "Đặc biệt là thành tựu về khoa học, công nghệ, quản lý kinh tế",
          "Phát triển nhanh lực lượng sản xuất, xây dựng nền kinh tế hiện đại",
        ],
      },
    },
    {
      id: "characteristics",
      title: "Đặc điểm thời kỳ quá độ",
      icon: Target,
      content: {
        main: "Hồ Chí Minh xác định đây là thời kỳ đặc biệt khó khăn, phức tạp, lâu dài nhưng tất yếu trong tiến trình phát triển của cách mạng Việt Nam.",
        points: [
          "Tính chất đặc thù: Từ một xã hội thuộc địa nửa phong kiến, nông nghiệp lạc hậu",
          "Tính chất lâu dài: Không thể nóng vội, cần nhiều thế hệ mới hoàn thành",
          "Tính chất khó khăn: Phải đấu tranh với nhiều kẻ thù, khắc phục nghèo nàn lạc hậu",
          "Tính chất tất yếu: Phù hợp với quy luật phát triển của lịch sử và nguyện vọng nhân dân",
        ],
      },
    },
  ]

  return (
    <section id="content" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <BookOpen className="h-4 w-4" />
            Nội dung chính
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            Tư tưởng Hồ Chí Minh về thời kỳ quá độ
          </h2>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto gap-2 bg-muted p-2 rounded-lg">
            {concepts.map((concept) => (
              <TabsTrigger
                key={concept.id}
                value={concept.id}
                className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <concept.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{concept.title}</span>
                <span className="sm:hidden text-xs">{concept.title.split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {concepts.map((concept) => (
            <TabsContent key={concept.id} value={concept.id} className="mt-6">
              <Card className="border-t-4 border-t-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <concept.icon className="h-6 w-6 text-primary" />
                    {concept.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-foreground leading-relaxed border-l-4 border-primary pl-4 bg-muted/50 py-3 rounded-r-lg">
                    {concept.content.main}
                  </p>

                  <ul className="space-y-3">
                    {concept.content.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
