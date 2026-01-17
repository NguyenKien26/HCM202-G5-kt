"use client"

import { useState } from "react"
import Image from "next/image"
import { AlertTriangle, Shield, Users, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AnalysisSection() {
  const [activeCard, setActiveCard] = useState(0)

  const headerImage = "https://baonamdinh.vn/file/e7837c02816d130b0181a995d7ad7e96/082024/untitled-4_20240829111043.jpg"

  const analyses = [
    {
      icon: AlertTriangle,
      title: "Khó khăn",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      borderColor: "border-orange-200",
      content:
        "Xây dựng một xã hội hoàn toàn mới chưa từng có trong lịch sử dân tộc, trong bối cảnh thù trong giặc ngoài và nền kinh tế nghèo nàn.",
      details: [
        "Xuất phát điểm kinh tế thấp, cơ sở vật chất kỹ thuật nghèo nàn",
        "Hậu quả nặng nề của chiến tranh kéo dài",
        "Sự chống phá của các thế lực thù địch",
      ],
    },
    {
      icon: Shield,
      title: "Nguyên tắc thực hiện",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200",
      content: "Giữ vững độc lập dân tộc và sự lãnh đạo tuyệt đối của Đảng Cộng sản.",
      details: [
        'Thực hiện "Xây" đi đôi với "Chống"',
        "Chống tham ô, lãng phí, quan liêu",
        "Xây dựng Đảng trong sạch, vững mạnh",
      ],
    },
    {
      icon: Users,
      title: "Động lực",
      color: "text-green-600",
      bgColor: "bg-green-100",
      borderColor: "border-green-200",
      content: "Sức mạnh lớn nhất là khối đại đoàn kết toàn dân và con người mới xã hội chủ nghĩa.",
      details: [
        "Phát huy sức mạnh đại đoàn kết dân tộc",
        "Xây dựng con người mới XHCN",
        "Kết hợp sức mạnh dân tộc với sức mạnh thời đại",
      ],
    },
    {
      icon: Zap,
      title: "Tất yếu",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      content: "CNXH là điều kiện bảo đảm vững chắc cho nền độc lập dân tộc trường tồn.",
      details: [
        "Phù hợp với quy luật phát triển của lịch sử",
        "Đáp ứng nguyện vọng của nhân dân",
        "Phù hợp với xu thế thời đại",
      ],
    },
  ]

  return (
    <section id="analysis" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Chuyên mục 3</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Phân tích con đường đặc thù</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {'Làm rõ tính chất "đặc thù" của cách mạng Việt Nam: Khó khăn và Tất yếu'}
          </p>
        </div>

        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-10">
          <Image
            src={headerImage || "/placeholder.svg"}
            alt="Phân tích con đường đặc thù"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white text-lg font-medium">Con đường phát triển đặc thù của Việt Nam</p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {analyses.map((item, index) => {
            const IconComponent = item.icon
            const isActive = activeCard === index

            return (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  isActive ? `ring-2 ring-primary shadow-lg` : ""
                }`}
                onClick={() => setActiveCard(index)}
              >
                <CardHeader className="pb-2">
                  <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center mb-3`}>
                    <IconComponent className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">{item.content}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Detail Panel */}
        <Card className={`border-2 ${analyses[activeCard].borderColor}`}>
          <CardContent className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div
                className={`w-14 h-14 ${analyses[activeCard].bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}
              >
                {(() => {
                  const IconComponent = analyses[activeCard].icon
                  return <IconComponent className={`h-7 w-7 ${analyses[activeCard].color}`} />
                })()}
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{analyses[activeCard].title}</h3>
                <p className="text-muted-foreground">{analyses[activeCard].content}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {analyses[activeCard].details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-foreground text-sm">{detail}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quote */}
        <div className="mt-8 text-center">
          <Card className="inline-block bg-primary text-primary-foreground border-0">
            <CardContent className="p-6">
              <blockquote className="text-lg font-medium italic">{'"Đảng ta là đạo đức, là văn minh"'}</blockquote>
              <cite className="block mt-2 text-sm opacity-80 not-italic">— Hồ Chí Minh</cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
