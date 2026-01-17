import { NextRequest, NextResponse } from 'next/server'
import { rooms } from '../../store'

// POST: Admin start game
export async function POST(
  request: NextRequest,
  context: { params: Promise<{ roomCode: string }> }
) {
  const params = await context.params
  const roomCode = params.roomCode.toUpperCase()

  console.log(`[START] Starting game in room ${roomCode}`)

  // Mark room as game started
  if (rooms.has(roomCode)) {
    const roomState = rooms.get(roomCode)
    roomState.gameStarted = true
    roomState.gameState = "intro"
    roomState.startedAt = Date.now()
    rooms.set(roomCode, roomState)
  }

  return NextResponse.json({ success: true })
}
