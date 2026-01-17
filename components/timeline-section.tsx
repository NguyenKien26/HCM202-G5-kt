import { Calendar, Flag, Sparkles, TrendingUp } from "lucide-react"

export function TimelineSection() {
  const timeline = [
    {
      period: "1945-1954",
      title: "Cách mạng dân tộc dân chủ",
      description: "Giành độc lập, xây dựng chính quyền nhân dân, tiến hành kháng chiến chống thực dân Pháp",
      icon: Flag,
    },
    {
      period: "1954-1975",
      title: "Xây dựng CNXH ở miền Bắc",
      description: "Đồng thời tiến hành cách mạng giải phóng miền Nam, thống nhất đất nước",
      icon: Sparkles,
    },
    {
      period: "1975-1986",
      title: "Xây dựng CNXH trên cả nước",
      description: "Khắc phục hậu quả chiến tranh, từng bước xây dựng cơ sở vật chất cho CNXH",
      icon: TrendingUp,
    },
    {
      period: "1986-nay",
      title: "Đổi mới và hội nhập",
      description: "Đổi mới toàn diện, phát triển kinh tế thị trường định hướng XHCN, hội nhập quốc tế",
      icon: Calendar,
    },
  ]

  return (
    <section id="timeline" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-medium mb-4">
            <Calendar className="h-4 w-4" />
            Tiến trình lịch sử
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            Con đường quá độ của Việt Nam
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Tiến trình quá độ lên chủ nghĩa xã hội ở Việt Nam trải qua nhiều giai đoạn lịch sử quan trọng
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={item.period}
                className={`relative flex items-center gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-primary">{item.period}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
