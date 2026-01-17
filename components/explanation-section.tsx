"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, Lightbulb, History, Heart, Scale } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ExplanationSection() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)

  const explanations = [
    {
      icon: Lightbulb,
      title: "Bản chất của việc bỏ qua chủ nghĩa tư bản",
      image:
        "https://hoinongdanhatinh.vn/uploads/news/2022_12/anh-hd113.jpg?gidzl=6eLjLy29Q7KHcsvLpfzlT1AIR57Lo6rt2iLh0TNDPNG8mMi1qive9Gx1QrVJppvp3f4vN37fF3SNm8jfTm",
      content: [
        "Bỏ qua không phải là bỏ qua những thành tựu, văn minh mà nhân loại đã đạt được dưới chế độ tư bản.",
        "Thực chất là bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa.",
        "Hồ Chí Minh nhấn mạnh việc học tập kinh nghiệm các nước nhưng không máy móc, phải vận dụng sáng tạo phù hợp với điều kiện thực tế.",
      ],
    },
    {
      icon: History,
      title: "Thực tiễn lịch sử",
      image: null,
      content: [
        "Các phong trào cứu nước theo khuynh hướng dân chủ tư sản ở Việt Nam đều thất bại.",
        "Nguyên nhân: không đáp ứng được khát vọng độc lập thực sự của nhân dân.",
        "Chỉ có con đường cách mạng vô sản mới giải quyết triệt để vấn đề dân tộc và giai cấp.",
      ],
    },
    {
      icon: Heart,
      title: "Mối quan hệ Độc lập - Hạnh phúc",
      image: null,
      content: [
        "Độc lập phải gắn liền với tự do, hạnh phúc của nhân dân.",
        "Hồ Chí Minh khẳng định chỉ có CNXH mới giải quyết triệt để vấn đề nghèo nàn.",
        "CNXH mang lại đời sống ấm no thực sự cho mọi người.",
      ],
    },
    {
      icon: Scale,
      title: "Quy luật tất yếu",
      image: null,
      content: [
        "CNXH là điều kiện bảo đảm vững chắc cho nền độc lập dân tộc trường tồn.",
        "Đây là sự lựa chọn phù hợp với xu thế phát triển của thời đại.",
        "Kết hợp hài hòa giữa lợi ích dân tộc và lợi ích giai cấp.",
      ],
    },
  ]

  const headerImage =
    "https://dms.gov.vn/documents/20182/20167074/chu-nghia-xa-hoi-220230505210624.jpg/f87b0d0d-13d6-4590-9a9d-8baeaee46e45"

  return (
    <section id="explanation" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Chuyên mục 2</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Vì sao bỏ qua chủ nghĩa tư bản ?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vận dụng lý luận vào thực tiễn Việt Nam để trả lời câu hỏi chủ đề
          </p>
        </div>

        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-10">
          <Image
            src={headerImage || "/placeholder.svg"}
            alt="Tại sao chọn con đường CNXH"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white text-lg font-medium">Tại sao đây là sự lựa chọn phù hợp ?</p>
          </div>
        </div>

        {/* Quote highlight removed as requested */}

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
                    {item.image && (
                      <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    )}
                    <div className="pl-0 md:pl-4 border-l-0 md:border-l-2 border-primary/20">
                      <ul className="space-y-3">
                        {item.content.map((text, idx) => (
                          <li key={idx} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
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
