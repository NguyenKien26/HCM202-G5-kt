"use client"

import { useState } from "react"
import { CheckCircle2, XCircle, RotateCcw, Trophy, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    question: '"Bỏ qua chế độ tư bản chủ nghĩa" có nghĩa là gì?',
    options: [
      "Bỏ qua tất cả thành tựu văn minh nhân loại",
      "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất TBCN",
      "Không học hỏi kinh nghiệm các nước tư bản",
      "Không phát triển kinh tế thị trường",
    ],
    correctAnswer: 1,
    explanation:
      '"Bỏ qua" thực chất là bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa, không phải bỏ qua văn minh nhân loại.',
  },
  {
    id: 2,
    question: "Đặc điểm lớn nhất của Việt Nam trong thời kỳ quá độ là gì?",
    options: [
      "Có nền công nghiệp phát triển",
      "Từ nước nông nghiệp lạc hậu tiến thẳng lên CNXH",
      "Đã trải qua giai đoạn TBCN đầy đủ",
      "Có nền kinh tế thị trường hoàn chỉnh",
    ],
    correctAnswer: 1,
    explanation:
      "Hồ Chí Minh chỉ rõ: Đặc điểm to lớn nhất của ta là từ một nước nông nghiệp lạc hậu tiến thẳng lên CNXH, không kinh qua giai đoạn phát triển TBCN.",
  },
  {
    id: 3,
    question: "Tại sao các phong trào cứu nước theo khuynh hướng dân chủ tư sản ở Việt Nam đều thất bại?",
    options: [
      "Vì thiếu vũ khí hiện đại",
      "Vì không có sự ủng hộ của quốc tế",
      "Vì không đáp ứng được khát vọng độc lập thực sự của nhân dân",
      "Vì thiếu kinh phí hoạt động",
    ],
    correctAnswer: 2,
    explanation:
      "Các phong trào này thất bại vì không đáp ứng được khát vọng độc lập thực sự của nhân dân, không giải quyết triệt để vấn đề dân tộc và giai cấp.",
  },
  {
    id: 4,
    question: 'Theo Hồ Chí Minh, nguyên tắc "Xây" đi đôi với "Chống" có nghĩa là gì?',
    options: [
      "Xây dựng quân đội đi đôi với chống giặc ngoại xâm",
      "Xây dựng CNXH đi đôi với chống tham ô, lãng phí, quan liêu",
      "Xây dựng nhà máy đi đôi với chống ô nhiễm",
      "Xây dựng trường học đi đôi với chống mù chữ",
    ],
    correctAnswer: 1,
    explanation:
      'Hồ Chí Minh nhấn mạnh việc xây dựng CNXH phải đi đôi với chống tham ô, lãng phí, quan liêu - những "giặc nội xâm" nguy hiểm.',
  },
  {
    id: 5,
    question: "Động lực lớn nhất của cách mạng Việt Nam theo tư tưởng Hồ Chí Minh là gì?",
    options: [
      "Sự viện trợ của các nước XHCN",
      "Quân đội nhân dân hùng mạnh",
      "Khối đại đoàn kết toàn dân và con người mới XHCN",
      "Nguồn tài nguyên thiên nhiên phong phú",
    ],
    correctAnswer: 2,
    explanation:
      "Sức mạnh lớn nhất là khối đại đoàn kết toàn dân và con người mới XHCN - đây là nguồn lực quan trọng nhất cho sự nghiệp xây dựng CNXH.",
  },
]

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [gameComplete, setGameComplete] = useState(false)

  const handleSelectAnswer = (index: number) => {
    if (answered) return
    setSelectedAnswer(index)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return

    setAnswered(true)
    setShowResult(true)

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
      setAnswered(false)
    } else {
      setGameComplete(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnswered(false)
    setGameComplete(false)
  }

  const question = questions[currentQuestion]

  if (gameComplete) {
    const percentage = (score / questions.length) * 100

    return (
      <section id="quiz" className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center">
            <CardContent className="p-8 md:p-12">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Hoàn thành!</h2>
              <p className="text-5xl font-bold text-primary mb-2">
                {score}/{questions.length}
              </p>
              <p className="text-muted-foreground mb-6">
                Bạn đã trả lời đúng {score} trên {questions.length} câu hỏi ({percentage.toFixed(0)}%)
              </p>

              <div className="mb-6">
                {percentage >= 80 ? (
                  <p className="text-green-600 font-medium">
                    Xuất sắc! Bạn nắm vững kiến thức về tư tưởng Hồ Chí Minh.
                  </p>
                ) : percentage >= 60 ? (
                  <p className="text-blue-600 font-medium">Khá tốt! Hãy ôn tập thêm để hiểu sâu hơn.</p>
                ) : (
                  <p className="text-orange-600 font-medium">Cần cố gắng hơn! Hãy đọc lại nội dung và thử lại.</p>
                )}
              </div>

              <Button onClick={handleRestart} className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Làm lại
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="quiz" className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Công cụ tương tác</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trắc nghiệm kiến thức</h2>
          <p className="text-muted-foreground">Kiểm tra hiểu biết của bạn về tư tưởng Hồ Chí Minh</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Câu {currentQuestion + 1}/{questions.length}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-primary">Điểm: {score}</span>
              </div>
            </div>
            {/* Progress bar */}
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden mt-4">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </CardHeader>

          <CardContent className="p-6">
            <CardTitle className="text-lg md:text-xl mb-6 leading-relaxed">{question.question}</CardTitle>

            <div className="space-y-3 mb-6">
              {question.options.map((option, index) => {
                let buttonClass = "w-full p-4 text-left border rounded-xl transition-all flex items-start gap-3"

                if (showResult) {
                  if (index === question.correctAnswer) {
                    buttonClass += " border-green-500 bg-green-50 text-green-800"
                  } else if (index === selectedAnswer && index !== question.correctAnswer) {
                    buttonClass += " border-red-500 bg-red-50 text-red-800"
                  } else {
                    buttonClass += " border-border bg-muted/30 text-muted-foreground"
                  }
                } else {
                  if (selectedAnswer === index) {
                    buttonClass += " border-primary bg-primary/5 text-foreground"
                  } else {
                    buttonClass += " border-border hover:border-primary/50 hover:bg-muted/50 text-foreground"
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleSelectAnswer(index)}
                    className={buttonClass}
                    disabled={answered}
                  >
                    <span className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {showResult && index === question.correctAnswer && (
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    )}
                    {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                      <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    )}
                  </button>
                )
              })}
            </div>

            {showResult && (
              <div className="mb-6 p-4 bg-accent/50 rounded-xl border border-accent">
                <p className="text-sm font-medium text-foreground mb-1">Giải thích:</p>
                <p className="text-sm text-muted-foreground">{question.explanation}</p>
              </div>
            )}

            <div className="flex justify-end gap-3">
              {!showResult ? (
                <Button onClick={handleSubmit} disabled={selectedAnswer === null}>
                  Trả lời
                </Button>
              ) : (
                <Button onClick={handleNext}>
                  {currentQuestion < questions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
