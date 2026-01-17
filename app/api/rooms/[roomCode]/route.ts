import { NextRequest, NextResponse } from 'next/server'
import { rooms } from '../store'

// GET: Lấy state của room
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ roomCode: string }> }
) {
  const params = await context.params
  const roomCode = params.roomCode.toUpperCase()
  
  console.log('[GET] Checking room:', roomCode, 'Available rooms:', Array.from(rooms.keys()))
  
  const roomState = rooms.get(roomCode)
  
  if (!roomState) {
    console.log('[GET] Room not found:', roomCode)
    return NextResponse.json(
      { error: 'Room not found' },
      { status: 404 }
    )
  }

  console.log('[GET] Room found:', roomCode)
  return NextResponse.json(roomState)
}

// POST: Tạo hoặc cập nhật state của room
export async function POST(
  request: NextRequest,
  context: { params: Promise<{ roomCode: string }> }
) {
  const params = await context.params
  const roomCode = params.roomCode.toUpperCase()
  const body = await request.json()

  console.log('[POST] Creating/updating room:', roomCode, body)

  rooms.set(roomCode, {
    ...body,
    lastUpdate: Date.now()
  })

  console.log('[POST] Room saved. Total rooms:', rooms.size)
  return NextResponse.json({ success: true })
}

// DELETE: Xóa room
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ roomCode: string }> }
) {
  const params = await context.params
  const roomCode = params.roomCode.toUpperCase()
  rooms.delete(roomCode)
  
  return NextResponse.json({ success: true })
}
