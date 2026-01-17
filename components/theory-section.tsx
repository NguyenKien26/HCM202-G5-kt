"use client"

import { useState } from "react"
import Image from "next/image"
import { BookOpen, Flag, Target, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TheorySection() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      id: "nature",
      label: "Tính chất",
      icon: BookOpen,
      title: "Tính chất của thời kỳ quá độ",
      image: "/images/image.png",
      content: [
        "Đây là cuộc cách mạng cải biến sâu sắc nhất nhưng cũng phức tạp, lâu dài, khó khăn và gian khổ nhất.",
        "Phải thay đổi triệt để những nếp sống, thói quen cũ kỹ đã bén rễ hàng ngàn năm.",
        "Đòi hỏi sự kiên trì, bền bỉ của toàn Đảng, toàn dân trong suốt quá trình xây dựng.",
      ],
      quote: {
        text: "Xây dựng chủ nghĩa xã hội là một cuộc chiến đấu lâu dài, gian khổ chống lại những gì đã cũ kỹ, hư hỏng.",
        source: "Hồ Chí Minh Toàn tập, tập 11",
      },
    },
    {
      id: "feature",
      label: "Đặc điểm",
      icon: Flag,
      title: "Đặc điểm lớn nhất của Việt Nam",
      image: "https://daknong.1cdn.vn/2021/07/22/baodaknong.org.vn-database-image-2021-07-22-_cnxh.jpg",
      content: [
        "Tiến thẳng lên CNXH từ một nước nông nghiệp lạc hậu, không kinh qua giai đoạn phát triển tư bản chủ nghĩa.",
        "Xã hội tồn tại sự đan xen giữa những yếu tố cũ và những yếu tố mới đang nảy sinh.",
        "Phải vừa xây dựng cơ sở vật chất, vừa cải tạo quan hệ xã hội cũ.",
      ],
      quote: {
        text: "Đặc điểm to lớn nhất của ta trong thời kỳ quá độ là từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội.",
        source: "Hồ Chí Minh Toàn tập, tập 12",
      },
    },
    {
      id: "mission",
      label: "Nhiệm vụ",
      icon: Target,
      title: "Nhiệm vụ trọng tâm",
      image: "https://s-aicmscdn.vietnamhoinhap.vn/vnhn-media/24/1/16/xdcnxh_65a5e607f33e7.jpg",
      content: [
        "Về chính trị: Xây dựng chế độ dân chủ, bồi dưỡng năng lực làm chủ của nhân dân.",
        "Về kinh tế: Cải tạo nền kinh tế cũ, xây dựng nền kinh tế mới có công nghiệp và nông nghiệp hiện đại.",
        "Đây là quá trình xây dựng nền tảng vật chất kỹ thuật cho CNXH.",
      ],
      quote: {
        text: "Muốn tiến lên chủ nghĩa xã hội thì phải phát triển kinh tế và văn hoá.",
        source: "Hồ Chí Minh Toàn tập, tập 10",
      },
    },
  ]

  const currentTab = tabs[activeTab]
  const IconComponent = currentTab.icon

  return (
    <section id="theory" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Chuyên mục 1</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Lý thuyết cốt lõi</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quá độ là gì? Các luận điểm then chốt trong tư tưởng Hồ Chí Minh về thời kỳ quá độ
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab, index) => {
            const TabIcon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === index
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-muted-foreground hover:bg-muted border border-border"
                }`}
              >
                <TabIcon className="h-4 w-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="relative w-full h-48 md:h-56 rounded-xl overflow-hidden">
              <Image
                src={currentTab.image || "/placeholder.svg"}
                alt={currentTab.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{currentTab.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {currentTab.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Quote Card */}
          <Card className="bg-primary text-primary-foreground border-0 h-fit">
            <CardContent className="p-6 md:p-8 flex flex-col justify-center">
              <div className="mb-4">
                <svg className="h-10 w-10 opacity-50" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <blockquote className="text-lg md:text-xl font-medium leading-relaxed mb-4">
                {currentTab.quote.text}
              </blockquote>
              <cite className="text-sm opacity-80 not-italic">— {currentTab.quote.source}</cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
