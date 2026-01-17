"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Building2, 
  Users, 
  GraduationCap, 
  Scale, 
  Globe,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  Copy,
  Link as LinkIcon
} from "lucide-react"

interface Decision {
  id: number
  title: string
  icon: any
  problem: string
  optionA: {
    label: string
    positives: string[]
    negatives: string[]
  }
  optionB: {
    label: string
    positives: string[]
    negatives: string[]
  }
  question: string
}

const decisions: Decision[] = [
  {
    id: 1,
    title: "Kinh tế",
    icon: Building2,
    problem: "Nền kinh tế đang tăng trưởng chậm. Nhiều ý kiến cho rằng cần đẩy mạnh tăng trưởng bằng mọi giá, nhưng cũng có lo ngại về hệ lụy xã hội.",
    optionA: {
      label: "Ưu tiên tăng trưởng nhanh",
      positives: ["Kinh tế khởi sắc", "Việc làm tăng"],
      negatives: ["Bất bình đẳng gia tăng", "Áp lực xã hội lớn hơn"]
    },
    optionB: {
      label: "Tăng trưởng thận trọng",
      positives: ["Đời sống ổn định hơn"],
      negatives: ["Đất nước phát triển chậm", "Lỡ cơ hội cạnh tranh"]
    },
    question: "Theo các em, nên chấp nhận rủi ro hay đi chậm cho chắc?"
  },
  {
    id: 2,
    title: "Xã hội",
    icon: Users,
    problem: "Bất mãn xã hội xuất hiện. Có ý kiến đề nghị mở rộng phúc lợi, nhưng ngân sách đang hạn hẹp.",
    optionA: {
      label: "Mở rộng phúc lợi xã hội",
      positives: ["Người dân an tâm hơn"],
      negatives: ["Ngân sách căng thẳng", "Gánh nặng tài chính tăng"]
    },
    optionB: {
      label: "Thắt chặt chi tiêu",
      positives: ["Giữ ổn định tài chính"],
      negatives: ["Một bộ phận người dân cảm thấy bị bỏ rơi"]
    },
    question: "Nhà nước nên ưu tiên ổn định tài chính hay đời sống trước mắt?"
  },
  {
    id: 3,
    title: "Giáo dục & Dân trí",
    icon: GraduationCap,
    problem: "Giáo dục cần cải cách sâu rộng nhưng hiệu quả chỉ thấy sau nhiều năm.",
    optionA: {
      label: "Đầu tư mạnh cho giáo dục – khoa học",
      positives: ["Nền tảng tương lai tốt hơn"],
      negatives: ["Ngắn hạn chưa giải quyết được khó khăn hiện tại"]
    },
    optionB: {
      label: "Ưu tiên giải quyết vấn đề trước mắt",
      positives: ["Xoa dịu áp lực hiện tại"],
      negatives: ["Dân trí và năng lực dài hạn không cải thiện"]
    },
    question: "Nếu kết quả chỉ thấy sau 10–20 năm, các em có dám đầu tư không?"
  },
  {
    id: 4,
    title: "Ổn định & Chính trị",
    icon: Scale,
    problem: "Xã hội xuất hiện nhiều ý kiến trái chiều, thậm chí phản đối chính sách.",
    optionA: {
      label: "Kiểm soát chặt để giữ ổn định",
      positives: ["Trật tự được đảm bảo"],
      negatives: ["Niềm tin và đối thoại xã hội suy giảm"]
    },
    optionB: {
      label: "Đối thoại và cải cách",
      positives: ["Niềm tin tăng"],
      negatives: ["Nguy cơ bất ổn ngắn hạn"]
    },
    question: "Ổn định bằng kiểm soát hay bằng đồng thuận?"
  },
  {
    id: 5,
    title: "Đối ngoại & Chủ quyền",
    icon: Globe,
    problem: "Đất nước cần nguồn lực từ bên ngoài nhưng cũng lo ngại phụ thuộc.",
    optionA: {
      label: "Hợp tác sâu với nước ngoài",
      positives: ["Có vốn, công nghệ"],
      negatives: ["Gia tăng phụ thuộc"]
    },
    optionB: {
      label: "Tự lực, thận trọng hội nhập",
      positives: ["Giữ chủ động"],
      negatives: ["Phát triển chậm hơn"]
    },
    question: "Độc lập tuyệt đối có khả thi không?"
  },
  {
    id: 6,
    title: "Công nghệ & Tương lai",
    icon: Building2,
    problem: "Cuộc cách mạng công nghệ đang diễn ra. Nhà nước có nên kiểm soát chặt hay để thị trường tự do?",
    optionA: {
      label: "Để thị trường tự do phát triển",
      positives: ["Sáng tạo và đổi mới được khuyến khích", "Kinh tế số phát triển nhanh"],
      negatives: ["Khó kiểm soát gian lận", "Bất bình đẳng kỹ thuật số gia tăng"]
    },
    optionB: {
      label: "Kiểm soát chặt cho an toàn",
      positives: ["Bảo vệ dữ liệu và an niên"],
      negatives: ["Doanh nghiệp công nghệ lại ngại phát triển"]
    },
    question: "Tự do hay an toàn khi bước vào kỷ nguyên công nghệ?"
  },
  {
    id: 7,
    title: "Môi trường & Phát triển",
    icon: Globe,
    problem: "Biến đổi khí hậu đe dọa, nhưng xanh hóa nền kinh tế cần chi phí lớn.",
    optionA: {
      label: "Ưu tiên bảo vệ môi trường",
      positives: ["Tương lai thế hệ sau được đảm bảo", "Sức khỏe con người tốt hơn"],
      negatives: ["Chi phí cao, phát triển kinh tế chậm"]
    },
    optionB: {
      label: "Phát triển kinh tế trước",
      positives: ["Tăng trưởng nhanh hơn"],
      negatives: ["Môi trường sẽ bị tàn phá", "Chi phí xử lý sau này còn tốn kém"]
    },
    question: "Giàu trước hay sạch trước?"
  }
]

const endings = {
  bad: {
    title: "Kết thúc: Trì trệ",
    color: "text-red-500",
    badge: "destructive",
    description: "Sau nhiều quyết định ngắn hạn và thỏa hiệp, đất nước tránh được sụp đổ nhưng rơi vào trì trệ. Cơ hội lịch sử đã trôi qua."
  },
  neutral: {
    title: "Kết thúc: Ổn định",
    color: "text-yellow-500",
    badge: "secondary",
    description: "Đất nước giữ được ổn định, nhưng cải cách chưa đủ sâu để tạo bước ngoặt phát triển."
  },
  good: {
    title: "Kết thúc: Phát triển bền vững",
    color: "text-green-500",
    badge: "default",
    description: "Chuỗi quyết định khó khăn, nhiều hy sinh ngắn hạn đã tạo nền tảng cho một xã hội phát triển bền vững và công bằng hơn."
  }
}

type GameState = "login" | "createRoom" | "waiting" | "joinRoom" | "intro" | "playing" | "result"
type EndType = "bad" | "neutral" | "good"
type UserRole = "admin" | "student" | null

const TOTAL_PARTICIPANTS = 30
const VOTE_DURATION = 60 // seconds
export function DecisionGameSection() {
  const searchParams = useSearchParams()
  const [gameState, setGameState] = useState<GameState>("login")
  const [userRole, setUserRole] = useState<UserRole>(null)
  const [passkey, setPasskey] = useState("")
  const [passKeyError, setPassKeyError] = useState("")
  const [roomCode, setRoomCode] = useState("")
  const [roomCodeInput, setRoomCodeInput] = useState("")
  const [roomError, setRoomError] = useState("")
  const [participants, setParticipants] = useState<Array<{ userId: string; userName: string }>>([])
  const [minParticipants, setMinParticipants] = useState(2)
  const [minParticipantsInput, setMinParticipantsInput] = useState("2")
  const [studentName, setStudentName] = useState("")
  const [currentRound, setCurrentRound] = useState(0)
  const [choices, setChoices] = useState<string[]>([])
  const [selectedOption, setSelectedOption] = useState<"A" | "B" | null>(null)
  const [showResults, setShowResults] = useState(false)
  const [votes, setVotes] = useState<{ A: number; B: number }>({ A: 0, B: 0 })
  const [isVotingActive, setIsVotingActive] = useState(false)
  const [votesCount, setVotesCount] = useState(0)
  const [userHasVoted, setUserHasVoted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(VOTE_DURATION)
  const [userId] = useState(() => `user-${Math.random().toString(36).substr(2, 9)}`)

  // Helper function to copy text to clipboard with fallback
  const copyToClipboard = (text: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(err => {
        console.error('Clipboard copy failed:', err)
        // Fallback to old method
        copyToClipboardFallback(text)
      })
    } else {
      // Fallback method
      copyToClipboardFallback(text)
    }
  }

  const copyToClipboardFallback = (text: string) => {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    try {
      document.execCommand('copy')
    } catch (err) {
      console.error('Fallback copy failed:', err)
    }
    document.body.removeChild(textarea)
  }

  // Auto-join Student nếu có room code trong URL
  useEffect(() => {
    const roomParam = searchParams.get('room')
    if (roomParam) {
      console.log('[Student] Auto-joining room from URL:', roomParam)
      setRoomCode(roomParam.toUpperCase())
      setUserRole("student")
      setGameState("joinRoom")
    }
  }, [searchParams])

  // Poll participants (mỗi 1 giây)
  useEffect(() => {
    if (!roomCode || gameState !== "waiting") return

    const interval = setInterval(async () => {
      try {
        const response = await fetch(`/api/rooms/${roomCode}/participants`)
        if (response.ok) {
          const data = await response.json()
          setParticipants(data.participants || [])
        }
      } catch (error) {
        console.error('Failed to poll participants:', error)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [roomCode, gameState])

  // Sync state to API (Admin only)
  const syncStateToAPI = async () => {
    if (userRole !== "admin" || !roomCode) return
    
    try {
      await fetch(`/api/rooms/${roomCode}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentRound,
          isVotingActive,
          timeLeft,
          votes,
          votesCount,
          showResults,
          selectedOption,
          gameState: gameState === "playing" ? "playing" : "waiting"
        })
      })
    } catch (error) {
      console.error('Failed to sync state:', error)
    }
  }

  // Poll state from API (Student in waiting room to detect game start)
  useEffect(() => {
    if (userRole !== "student" || !roomCode || gameState !== "waiting") return

    const interval = setInterval(async () => {
      try {
        const response = await fetch(`/api/rooms/${roomCode}`)
        if (response.ok) {
          const data = await response.json()
          // Check if game started (gameState changed to "playing")
          if (data.gameState === "playing") {
            console.log('[Student] Game started, transitioning to playing...')
            setCurrentRound(data.currentRound || 0)
            setIsVotingActive(data.isVotingActive || false)
            setTimeLeft(data.timeLeft || 60)
            setVotes(data.votes || { A: 0, B: 0 })
            setVotesCount(data.votesCount || 0)
            setShowResults(data.showResults || false)
            setSelectedOption(data.selectedOption || null)
            setGameState("intro")
          }
        }
      } catch (error) {
        console.error('Failed to poll game state:', error)
      }
    }, 1000) // Poll mỗi 1 giây để detect start game nhanh

    return () => clearInterval(interval)
  }, [userRole, roomCode, gameState])

  // Poll state from API (Student only, when playing)
  useEffect(() => {
    if (userRole !== "student" || !roomCode || gameState !== "playing") return

    const interval = setInterval(async () => {
      try {
        const response = await fetch(`/api/rooms/${roomCode}`)
        if (response.ok) {
          const data = await response.json()
          setCurrentRound(data.currentRound)
          setIsVotingActive(data.isVotingActive)
          setTimeLeft(data.timeLeft)
          setVotes(data.votes)
          setVotesCount(data.votesCount)
          setShowResults(data.showResults)
          setSelectedOption(data.selectedOption)
        }
      } catch (error) {
        console.error('Failed to poll state:', error)
      }
    }, 2000) // Poll mỗi 2 giây

    return () => clearInterval(interval)
  }, [userRole, roomCode, gameState])

  // Admin poll votes from API (when playing)
  useEffect(() => {
    if (userRole !== "admin" || !roomCode || gameState !== "playing") return

    const interval = setInterval(async () => {
      try {
        const response = await fetch(`/api/rooms/${roomCode}`)
        if (response.ok) {
          const data = await response.json()
          // Only update votes and votesCount from API, keep other state local
          if (data.votes) {
            setVotes(data.votes)
          }
          if (data.votesCount !== undefined) {
            setVotesCount(data.votesCount)
          }
        }
      } catch (error) {
        console.error('Failed to poll votes:', error)
      }
    }, 1000) // Poll mỗi 1 giây để real-time votes

    return () => clearInterval(interval)
  }, [userRole, roomCode, gameState])

  // Admin auto-sync khi state thay đổi
  useEffect(() => {
    if (userRole === "admin" && gameState === "playing") {
      syncStateToAPI()
    }
  }, [currentRound, isVotingActive, timeLeft, votes, votesCount, showResults, selectedOption])

  const generateRoomCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
    let code = ''
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return code
  }

  const handlePasskeySubmit = () => {
    const key = passkey.trim().toUpperCase()

    if (key === "HCM2024") {
      setUserRole("admin")
      setPassKeyError("")
      setGameState("createRoom")
      setPasskey("")
      return
    }

    setPassKeyError("Mã không hợp lệ. Chỉ Admin mới cần nhập mã HCM2024")
  }

  const handleCreateRoom = async () => {
    const code = generateRoomCode()
    setRoomCode(code)
    console.log('[Admin] Creating room:', code)
    
    try {
      const response = await fetch(`/api/rooms/${code}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          createdAt: Date.now(),
          admin: userId,
          currentRound: 0,
          isVotingActive: false,
          votes: { A: 0, B: 0 },
          votesCount: 0,
          participants: [{ userId, userName: "Admin" }]
        })
      })
      
      if (response.ok) {
        console.log('[Admin] Room created successfully:', code)
        setParticipants([{ userId, userName: "Admin" }])
        // Vẫn ở màn createRoom để copy link, không vào waiting ngay
      } else {
        console.error('[Admin] Failed to create room:', await response.text())
      }
    } catch (error) {
      console.error('[Admin] Error creating room:', error)
    }
  }

  const handleJoinRoom = async () => {
    const code = roomCodeInput.trim().toUpperCase()
    if (code.length !== 6) {
      setRoomError("Mã phòng phải có 6 ký tự")
      return
    }
    
    console.log('[Student] Attempting to join room:', code)
    
    // Kiểm tra room có tồn tại không
    try {
      const response = await fetch(`/api/rooms/${code}`)
      console.log('[Student] Join room response status:', response.status)
      
      if (!response.ok) {
        const error = await response.json()
        console.error('[Student] Room not found:', error)
        setRoomError("Mã phòng không tồn tại")
        return
      }
      
      const roomData = await response.json()
      console.log('[Student] Room found:', roomData)
      
      setRoomCode(code)
      setRoomError("")
      setGameState("intro")
    } catch (error) {
      console.error('[Student] Error joining room:', error)
      setRoomError("Không thể kết nối đến phòng")
    }
  }

  const handleStartGame = async () => {
    if (userRole !== "admin" || !roomCode) return
    
    try {
      await fetch(`/api/rooms/${roomCode}/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })
      // Admin set local state to intro
      setGameState("intro")
      setCurrentRound(0)
      setChoices([])
      setSelectedOption(null)
    } catch (error) {
      console.error('Failed to start game:', error)
    }
  }

  const handleStartWaiting = () => {
    setGameState("waiting")
  }

  const handleJoinRoomWithName = async () => {
    if (!studentName.trim()) {
      return
    }

    try {
      const response = await fetch(`/api/rooms/${roomCode}/participants`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, userName: studentName.trim() })
      })

      if (response.ok) {
        console.log('[Student] Joined room with name:', studentName)
        setGameState("waiting")
      } else {
        console.error('[Student] Failed to join room:', await response.text())
      }
    } catch (error) {
      console.error('[Student] Error joining room:', error)
    }
  }

  const startGame = () => {
    setGameState("playing")
    setCurrentRound(0)
    setChoices([])
    setSelectedOption(null)
    setShowResults(false)
    setVotes({ A: 0, B: 0 })
    setIsVotingActive(true)
    setVotesCount(0)
    setUserHasVoted(false)
    setTimeLeft(VOTE_DURATION)
  }

  // Timer effect
  useEffect(() => {
    if (!isVotingActive || timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsVotingActive(false)
          setShowResults(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isVotingActive, timeLeft])

  const handleVoteMessage = () => {
    // Deprecated - use handleClickVote instead
    return
  }

  const handleClickVote = async (option: "A" | "B") => {
    if (!isVotingActive) {
      return
    }

    // Both Admin and Student gửi vote qua API
    try {
      const response = await fetch(`/api/rooms/${roomCode}/vote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, option })
      })
      
      if (response.ok) {
        setUserHasVoted(true)
        setSelectedOption(option)
        
        // Admin: Immediately update local votes from response
        if (userRole === "admin") {
          const data = await response.json()
          if (data.votes) {
            setVotes(data.votes)
          }
        }
      }
    } catch (error) {
      console.error('Failed to send vote:', error)
    }
  }

  const endVotingPhase = () => {
    setShowResults(true)
    setIsVotingActive(false)
    // Calculate which option won
    if (votes.A > votes.B) {
      setSelectedOption("A")
    } else if (votes.B > votes.A) {
      setSelectedOption("B")
    } else {
      // Tie - randomly select
      setSelectedOption(Math.random() > 0.5 ? "A" : "B")
    }
  }

  const nextRound = () => {
    if (!selectedOption) return
    
    const newChoices = [...choices, selectedOption]
    setChoices(newChoices)
    
    if (currentRound < decisions.length - 1) {
      setCurrentRound(currentRound + 1)
      setSelectedOption(null)
      setShowResults(false)
      setUserHasVoted(false)
      setIsVotingActive(true)
      setVotesCount(0)
      setVotes({ A: 0, B: 0 })
      setTimeLeft(VOTE_DURATION)
    } else {
      setGameState("result")
    }
  }

  const calculateEndType = (): EndType => {
    const longTermChoices = [
      choices[0] === "A",
      choices[1] === "A",
      choices[2] === "A",
      choices[3] === "B",
      choices[4] === "A"
    ].filter(Boolean).length

    if (longTermChoices >= 4) return "good"
    if (longTermChoices >= 2) return "neutral"
    return "bad"
  }

  const currentDecision = decisions[currentRound]
  const progress = ((currentRound + (showResults ? 1 : 0)) / decisions.length) * 100
  const Icon = currentDecision?.icon
  const winningOption = votes.A > votes.B ? "A" : votes.B > votes.A ? "B" : null

  return (
    <section id="game" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {gameState === "login" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-6"
            >
              <div className="space-y-2">
                <Badge className="mb-4 text-lg px-4 py-2">🔐 Xác thực</Badge>
                <h2 className="text-3xl font-bold tracking-tight">
                  Game mô phỏng
                </h2>
                <p className="text-muted-foreground">
                  Admin nhập mã để tạo phòng chơi
                </p>
              </div>

              <Card className="max-w-md mx-auto">
                <CardHeader>
                  <CardTitle>Mã truy cập Admin</CardTitle>
                  <CardDescription>Chỉ Admin mới cần nhập mã</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <input
                      type="password"
                      value={passkey}
                      onChange={(e) => {
                        setPasskey(e.target.value.toUpperCase())
                        setPassKeyError("")
                      }}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") handlePasskeySubmit()
                      }}
                      placeholder="Nhập mã ở đây"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-center text-lg font-semibold tracking-widest"
                    />
                    {passKeyError && (
                      <p className="text-sm text-red-500 text-center">{passKeyError}</p>
                    )}
                  </div>
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={handlePasskeySubmit}
                    disabled={!passkey.trim()}
                  >
                    Vào Game
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {gameState === "createRoom" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6"
            >
              <div className="space-y-2">
                <Badge className="mb-4 text-lg px-4 py-2 bg-amber-500">👨‍🏫 Admin</Badge>
                <h2 className="text-3xl font-bold tracking-tight">
                  Tạo phòng game
                </h2>
                <p className="text-muted-foreground">
                  Tạo phòng và chia sẻ mã cho học sinh
                </p>
              </div>

              <Card className="max-w-md mx-auto">
                <CardHeader>
                  <CardTitle>Khởi tạo phòng chơi</CardTitle>
                  <CardDescription>
                    Bạn sẽ là người điều khiển game
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {roomCode ? (
                    <div className="space-y-4">
                      <div className="p-6 bg-primary/10 rounded-lg border-2 border-primary/20">
                        <p className="text-sm text-muted-foreground mb-2">Mã phòng</p>
                        <div className="text-4xl font-bold tracking-widest text-primary">
                          {roomCode}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => {
                            copyToClipboard(roomCode)
                          }}
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          Sao chép mã
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => {
                            const url = `${window.location.origin}/game?room=${roomCode}`
                            copyToClipboard(url)
                          }}
                        >
                          <LinkIcon className="h-4 w-4 mr-2" />
                          Sao chép link
                        </Button>
                      </div>
                      <Button
                        className="w-full"
                        size="lg"
                        onClick={handleStartWaiting}
                      >
                        Sẵn sàng chờ ✓
                      </Button>
                    </div>
                  ) : (
                    <Button
                      className="w-full"
                      size="lg"
                      onClick={handleCreateRoom}
                    >
                      Tạo phòng
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {gameState === "joinRoom" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-6"
            >
              <div className="space-y-2">
                <Badge className="mb-4 text-lg px-4 py-2">🎮 Tham gia phòng</Badge>
                <h2 className="text-3xl font-bold tracking-tight">
                  Nhập tên của bạn
                </h2>
                <p className="text-muted-foreground">
                  Mã phòng: <span className="font-bold text-primary">{roomCode}</span>
                </p>
              </div>

              <Card className="max-w-md mx-auto">
                <CardHeader>
                  <CardTitle>Tên người chơi</CardTitle>
                  <CardDescription>Nhập tên để tham gia phòng</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Nhập tên của bạn..."
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && studentName.trim()) {
                          handleJoinRoomWithName()
                        }
                      }}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      autoFocus
                    />
                  </div>
                  <Button
                    onClick={handleJoinRoomWithName}
                    disabled={!studentName.trim()}
                    className="w-full"
                    size="lg"
                  >
                    Vào phòng
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {gameState === "waiting" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-6"
            >
              <div className="space-y-2">
                <Badge className="mb-4 text-lg px-4 py-2">⏳ Chờ tham gia</Badge>
                <h2 className="text-3xl font-bold tracking-tight">
                  Phòng: <span className="text-primary">{roomCode}</span>
                </h2>
                <p className="text-muted-foreground">
                  {userRole === "admin" ? "Chờ học sinh tham gia" : "Chờ Admin bắt đầu"}
                </p>
              </div>

              <Card className="max-w-md mx-auto">
                <CardHeader>
                  <CardTitle>Người tham gia</CardTitle>
                  <CardDescription>{participants.length} người đã vào</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Danh sách participants */}
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {participants.map((p, i) => (
                      <div key={i} className="p-3 bg-muted rounded-lg text-sm flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>{p.userName || `Student ${i + 1}`}</span>
                      </div>
                    ))}
                  </div>

                  {/* Admin set số người và start */}
                  {userRole === "admin" && (
                    <>
                      <div className="border-t pt-4 space-y-3">
                        <div>
                          <label className="text-sm font-medium">Số người tối thiểu:</label>
                          <div className="flex gap-2 mt-2">
                            <input
                              type="number"
                              min="1"
                              max="50"
                              value={minParticipantsInput}
                              onChange={(e) => {
                                setMinParticipantsInput(e.target.value)
                                setMinParticipants(Math.max(1, parseInt(e.target.value) || 1))
                              }}
                              className="flex-1 px-3 py-2 rounded-lg border border-input bg-background text-center"
                            />
                          </div>
                        </div>
                        
                        <Button
                          className="w-full"
                          size="lg"
                          onClick={handleStartGame}
                          disabled={participants.length < minParticipants}
                        >
                          {participants.length < minParticipants
                            ? `Chờ ${minParticipants - participants.length} người nữa`
                            : "Bắt đầu chơi"}
                        </Button>
                      </div>
                    </>
                  )}

                  {/* Student chờ */}
                  {userRole === "student" && (
                    <div className="text-sm text-muted-foreground p-4 bg-muted rounded-lg">
                      Chờ Admin bắt đầu trò chơi...
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {gameState === "intro" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-6"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Badge className="text-lg px-4 py-2">🎮 Game Mô phỏng</Badge>
                  {roomCode && (
                    <Badge variant="outline" className="text-lg px-4 py-2">
                      📍 Phòng: {roomCode}
                    </Badge>
                  )}
                </div>
                <h2 className="text-4xl font-bold tracking-tight">
                  7 Quyết định – 1 Vận mệnh Quốc gia
                </h2>
                <p className="text-xl text-muted-foreground">
                  Thời lượng: 8–10 phút | Vai trò: Đại biểu Quốc hội
                </p>
              </div>

              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>Giới thiệu</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-left">
                  <p>
                    Hôm nay, cả lớp sẽ đóng vai <strong>Quốc hội</strong>.
                    Nhiệm vụ của các em là đưa ra <strong>5 quyết định lớn</strong> cho đất nước 
                    trong giai đoạn phát triển khó khăn.
                  </p>
                  <div className="bg-muted p-4 rounded-lg space-y-3">
                    <p className="font-semibold">📋 Cách chơi:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Mỗi em nhập <strong>A</strong> hoặc <strong>B</strong> để bình chọn</li>
                      <li><strong>30 người</strong> tham gia, vote sẽ đóng khi đủ số người</li>
                      <li>MC/Admin xác nhận kết quả mới chuyển sang vòng tiếp theo</li>
                      <li>Không có lựa chọn "đúng" - mỗi lựa chọn đều có ưu/nhược</li>
                    </ul>
                  </div>
                  <p className="text-center font-medium">
                    Sau 5 quyết định, chúng ta sẽ xem đất nước đi đến đâu...
                  </p>
                </CardContent>
              </Card>

              <Button size="lg" className="text-lg px-8 py-6" onClick={startGame}>
                Bắt đầu Game
              </Button>
            </motion.div>
          )}

          {gameState === "playing" && currentDecision && (
            <motion.div
              key={currentRound}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <Badge variant="outline" className="text-lg px-4 py-2">
                    Lượt {currentRound + 1}/7
                  </Badge>
                  {roomCode && (
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      📍 {roomCode}
                    </Badge>
                  )}
                  <Progress value={progress} className="w-64" />
                  {isVotingActive && (
                    <Badge className={`text-sm font-bold px-3 py-1 ${
                      timeLeft <= 10 ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
                    }`}>
                      ⏱ {timeLeft}s
                    </Badge>
                  )}
                  {userRole === "admin" && (
                    <Badge className="text-sm bg-amber-500 hover:bg-amber-600">👨‍🏫 Admin</Badge>
                  )}
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Left: Vấn đề và lựa chọn */}
                  <div className="lg:col-span-2 space-y-4">
                    <Card className="border-2">
                      <CardHeader className="space-y-4">
                        <div className="flex items-center gap-3">
                          {Icon && <Icon className="h-8 w-8 text-primary" />}
                          <CardTitle className="text-2xl">{currentDecision.title}</CardTitle>
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {currentDecision.problem}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          {/* Option A */}
                          <Card
                            onClick={() => handleClickVote("A")}
                            className={`cursor-pointer transition-all border-2 p-4 ${
                              userHasVoted && selectedOption !== "A"
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:shadow-lg hover:scale-105"
                            } ${
                              showResults && votes.A > 0
                                ? "border-primary bg-primary/5"
                                : "border-muted hover:border-primary/50"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                                    A
                                  </span>
                                  <span className="font-semibold">{currentDecision.optionA.label}</span>
                                </div>
                                <div className="space-y-2 ml-10">
                                  {currentDecision.optionA.positives.map((pro, i) => (
                                    <div key={i} className="flex items-start gap-2 text-sm">
                                      <TrendingUp className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                                      <span>{pro}</span>
                                    </div>
                                  ))}
                                  {currentDecision.optionA.negatives.map((con, i) => (
                                    <div key={i} className="flex items-start gap-2 text-sm">
                                      <TrendingDown className="h-3 w-3 text-red-500 mt-0.5 flex-shrink-0" />
                                      <span>{con}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              {showResults && (
                                <div className="text-right">
                                  <div className="text-2xl font-bold text-primary">{votes.A}</div>
                                  <div className="text-xs text-muted-foreground">phiếu</div>
                                  <div className="mt-1 text-xs font-semibold text-primary">
                                    {votesCount > 0 ? Math.round((votes.A / votesCount) * 100) : 0}%
                                  </div>
                                </div>
                              )}
                            </div>
                          </Card>

                          {/* Option B */}
                          <Card
                            onClick={() => handleClickVote("B")}
                            className={`cursor-pointer transition-all border-2 p-4 ${
                              userHasVoted && selectedOption !== "B"
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:shadow-lg hover:scale-105"
                            } ${
                              showResults && votes.B > 0
                                ? "border-secondary bg-secondary/5"
                                : "border-muted hover:border-primary/50"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-bold">
                                    B
                                  </span>
                                  <span className="font-semibold">{currentDecision.optionB.label}</span>
                                </div>
                                <div className="space-y-2 ml-10">
                                  {currentDecision.optionB.positives.map((pro, i) => (
                                    <div key={i} className="flex items-start gap-2 text-sm">
                                      <TrendingUp className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                                      <span>{pro}</span>
                                    </div>
                                  ))}
                                  {currentDecision.optionB.negatives.map((con, i) => (
                                    <div key={i} className="flex items-start gap-2 text-sm">
                                      <TrendingDown className="h-3 w-3 text-red-500 mt-0.5 flex-shrink-0" />
                                      <span>{con}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              {showResults && (
                                <div className="text-right">
                                  <div className="text-2xl font-bold text-secondary">{votes.B}</div>
                                  <div className="text-xs text-muted-foreground">phiếu</div>
                                  <div className="mt-1 text-xs font-semibold text-secondary">
                                    {votesCount > 0 ? Math.round((votes.B / votesCount) * 100) : 0}%
                                  </div>
                                </div>
                              )}
                            </div>
                          </Card>
                        </div>

                        <Card className="bg-muted/50">
                          <CardContent className="pt-6">
                            <p className="text-center text-base font-medium">
                              💭 {currentDecision.question}
                            </p>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Right: Vote results */}
                  <div className="space-y-4">
                    {showResults && (
                      <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm">📊 Kết quả bình chọn</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {/* Option A Results */}
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                                  A
                                </span>
                                <span className="text-sm font-medium truncate">{currentDecision.optionA.label}</span>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold text-primary">{votes.A}</div>
                                <div className="text-xs text-muted-foreground">
                                  {votesCount > 0 ? Math.round((votes.A / votesCount) * 100) : 0}%
                                </div>
                              </div>
                            </div>
                            <Progress 
                              value={votesCount > 0 ? (votes.A / votesCount) * 100 : 0} 
                              className="h-3"
                            />
                          </div>

                          {/* Option B Results */}
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-xs font-bold">
                                  B
                                </span>
                                <span className="text-sm font-medium truncate">{currentDecision.optionB.label}</span>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold text-secondary">{votes.B}</div>
                                <div className="text-xs text-muted-foreground">
                                  {votesCount > 0 ? Math.round((votes.B / votesCount) * 100) : 0}%
                                </div>
                              </div>
                            </div>
                            <Progress 
                              value={votesCount > 0 ? (votes.B / votesCount) * 100 : 0} 
                              className="h-3"
                            />
                          </div>

                          {/* Total votes */}
                          <div className="pt-2 border-t text-center">
                            <p className="text-sm font-semibold">
                              Tổng: <span className="text-primary">{votesCount}</span> phiếu
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Admin controls */}
                    {!showResults && isVotingActive && (
                      <Card className="bg-muted/50">
                        <CardContent className="pt-6 space-y-3">
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground mb-2">Đã vote: <span className="font-bold text-primary">{votesCount}</span> người</p>
                            {userHasVoted && (
                              <Badge variant="secondary">✓ Bạn đã vote</Badge>
                            )}
                          </div>
                          {userRole === "admin" && votesCount > 0 && (
                            <Button
                              className="w-full"
                              onClick={endVotingPhase}
                            >
                              ✓ Kết thúc bình chọn (Admin)
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    )}

                    {/* Results controls */}
                    {showResults && (
                      <Card className="bg-muted/50">
                        <CardContent className="pt-6">
                          {userRole === "admin" ? (
                            <Button
                              className="w-full"
                              onClick={nextRound}
                              variant="default"
                            >
                              {currentRound < decisions.length - 1 
                                ? "Vòng tiếp theo →" 
                                : "Xem kết quả cuối cùng"}
                            </Button>
                          ) : (
                            <div className="text-sm text-center text-muted-foreground p-2 bg-muted rounded-lg">
                              Chờ Admin chuyển sang vòng tiếp theo...
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {gameState === "result" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              {(() => {
                const endType = calculateEndType()
                const ending = endings[endType]
                return (
                  <>
                    <div className="text-center space-y-4">
                      <Badge variant={ending.badge as any} className="text-lg px-6 py-3">
                        Kết thúc Game
                      </Badge>
                      <h2 className={`text-4xl font-bold ${ending.color}`}>
                        {ending.title}
                      </h2>
                    </div>

                    <Card className="border-2">
                      <CardContent className="pt-6 space-y-6">
                        <p className="text-lg text-center leading-relaxed">
                          {ending.description}
                        </p>

                        <div className="space-y-4">
                          <h3 className="font-semibold text-xl">📋 Các quyết định của cộng đồng:</h3>
                          <div className="grid gap-3">
                            {decisions.map((decision, index) => {
                              const choice = choices[index]
                              const option = choice === "A" ? decision.optionA : decision.optionB
                              const Icon = decision.icon
                              return (
                                <Card key={decision.id} className="bg-muted/50">
                                  <CardContent className="pt-4">
                                    <div className="flex items-start gap-3">
                                      {Icon && <Icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />}
                                      <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                          <span className="font-semibold">{decision.title}:</span>
                                          <Badge variant={choice === "A" ? "default" : "secondary"}>
                                            Chọn {choice}
                                          </Badge>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{option.label}</p>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              )
                            })}
                          </div>
                        </div>

                        <Card className="bg-primary/10 border-primary/20">
                          <CardHeader>
                            <CardTitle className="text-lg">💬 Câu hỏi thảo luận:</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <p>• Quyết định nào gây tranh cãi nhất?</p>
                            <p>• Nếu là lãnh đạo thật, các em có dám chịu trách nhiệm không?</p>
                            <p>• Bạn có muốn thay đổi quyết định nào không? Vì sao?</p>
                          </CardContent>
                        </Card>

                        <div className="flex justify-center gap-4">
                          <Button size="lg" onClick={startGame}>
                            Chơi lại
                          </Button>
                          <Button 
                            size="lg" 
                            variant="outline"
                            onClick={() => {
                              setGameState("login")
                              setUserRole(null)
                              setPassKeyError("")
                              setPasskey("")
                            }}
                          >
                            Quay lại đăng nhập
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </>
                )
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
