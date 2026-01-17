import { NextRequest, NextResponse } from 'next/server'
import { rooms } from '../../store'

// POST: Student gửi vote
export async function POST(
  request: NextRequest,
  context: { params: Promise<{ roomCode: string }> }
) {
  const params = await context.params
  const roomCode = params.roomCode.toUpperCase()
  const { userId, option } = await request.json()

  console.log('[VOTE] Received vote:', { roomCode, userId, option })

  const roomState = rooms.get(roomCode)
  
  if (!roomState) {
    console.log('[VOTE] Room not found:', roomCode)
    return NextResponse.json(
      { error: 'Room not found' },
      { status: 404 }
    )
  }

  // Cập nhật votes
  if (!roomState.userVotes) {
    roomState.userVotes = {}
  }

  const previousVote = roomState.userVotes[userId]
  
  // Nếu đã vote trước đó, trừ vote cũ
  if (previousVote) {
    roomState.votes[previousVote] = Math.max(0, roomState.votes[previousVote] - 1)
  } else {
    // Vote lần đầu, tăng votesCount
    roomState.votesCount = (roomState.votesCount || 0) + 1
  }

  // Thêm vote mới
  roomState.votes[option] = (roomState.votes[option] || 0) + 1
  roomState.userVotes[userId] = option
  roomState.lastUpdate = Date.now()

  rooms.set(roomCode, roomState)

  console.log('[VOTE] Vote recorded. Current votes:', roomState.votes)

  return NextResponse.json({ success: true, votes: roomState.votes })
}
