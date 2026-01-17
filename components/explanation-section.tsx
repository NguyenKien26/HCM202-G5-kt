"use client"

import { useState } from "react"
import { ChevronDown, Lightbulb, History, Heart, Scale } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ExplanationSection() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)

  const explanations = [
    {
      icon: Lightbulb,
      title: 'Bản chất của việc "bỏ qua"',
      content: [
        '"Bỏ qua" không phải là bỏ qua những thành tựu, văn minh mà nhân loại đã đạt được dưới chế độ tư bản.',
        "Thực chất là bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa.",
        "Hồ Chí Minh nhấn mạnh việc học tập kinh nghiệm các nước nhưng không máy móc, phải vận dụng sáng tạo phù hợp với điều kiện thực tế.",
      ],
    },
    {
      icon: History,
      title: "Thực tiễn lịch sử",
      content: [
        "Các phong trào cứu nước theo khuynh hướng dân chủ tư sản ở Việt Nam đều thất bại.",
        "Nguyên nhân: không đáp ứng được khát vọng độc lập thực sự của nhân dân.",
        "Chỉ có con đường cách mạng vô sản mới giải quyết triệt để vấn đề dân tộc và giai cấp.",
      ],
    },
    {
      icon: Heart,
      title: "Mối quan hệ Độc lập - Hạnh phúc",
      content: [
        "Độc lập phải gắn liền với tự do, hạnh phúc của nhân dân.",
        "Hồ Chí Minh khẳng định chỉ có CNXH mới giải quyết triệt để vấn đề nghèo nàn.",
        "CNXH mang lại đời sống ấm no thực sự cho mọi người.",
      ],
    },
    {
      icon: Scale,
      title: "Quy luật tất yếu",
      content: [
        "CNXH là điều kiện bảo đảm vững chắc cho nền độc lập dân tộc trường tồn.",
        "Đây là sự lựa chọn phù hợp với xu thế phát triển của thời đại.",
        "Kết hợp hài hòa giữa lợi ích dân tộc và lợi ích giai cấp.",
      ],
    },
  ]

  return (
    <section id="explanation" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Chuyên mục 2</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{'Vì sao "Bỏ qua"?'}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vận dụng lý luận vào thực tiễn Việt Nam để trả lời câu hỏi chủ đề
          </p>
        </div>

        {/* Quote highlight */}
        <Card className="mb-10 border-l-4 border-l-primary bg-accent/30">
          <CardContent className="p-6">
            <blockquote className="text-lg md:text-xl text-foreground italic leading-relaxed">
              {'"Nước được độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì."'}
            </blockquote>
            <cite className="block mt-3 text-sm text-muted-foreground not-italic">— Hồ Chí Minh Toàn tập, tập 4</cite>
          </CardContent>
        </Card>

        {/* Accordion */}
        <div className="space-y-4">
          {explanations.map((item, index) => {
            const IconComponent = item.icon
            const isOpen = openAccordion === index

            return (
              <div key={index} className="border border-border rounded-xl overflow-hidden bg-card">
                <button
                  onClick={() => setOpenAccordion(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2 rounded-lg ${isOpen ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-foreground">{item.title}</span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 md:px-6 pb-4 md:pb-6">
                    <div className="pl-14 border-l-2 border-primary/20 ml-2">
                      <ul className="space-y-3">
                        {item.content.map((text, idx) => (
                          <li key={idx} className="text-muted-foreground leading-relaxed">
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
