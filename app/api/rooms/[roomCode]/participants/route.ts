import { NextRequest, NextResponse } from 'next/server'
import { rooms } from '../../store'

// GET: Lấy danh sách participants
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ roomCode: string }> }
) {
  const params = await context.params
  const roomCode = params.roomCode.toUpperCase()

  const roomState = rooms.get(roomCode)

  if (!roomState) {
    return NextResponse.json(
      { error: 'Room not found' },
      { status: 404 }
    )
  }

  return NextResponse.json({
    participants: roomState.participants || [],
    count: (roomState.participants || []).length
  })
}

// POST: Student join room
export async function POST(
  request: NextRequest,
  context: { params: Promise<{ roomCode: string }> }
) {
  const params = await context.params
  const roomCode = params.roomCode.toUpperCase()
  const { userId, userName } = await request.json()

  const roomState = rooms.get(roomCode)

  if (!roomState) {
    return NextResponse.json(
      { error: 'Room not found' },
      { status: 404 }
    )
  }

  // Add participant with name
  if (!roomState.participants) {
    roomState.participants = []
  }

  // Check if user already exists
  const existingUser = roomState.participants.find((p: any) => p.userId === userId)
  if (!existingUser) {
    roomState.participants.push({ userId, userName })
    console.log(`[JOIN] User ${userId} (${userName}) joined room ${roomCode}. Total: ${roomState.participants.length}`)
  }

  rooms.set(roomCode, roomState)

  return NextResponse.json({
    success: true,
    participants: roomState.participants
  })
}
