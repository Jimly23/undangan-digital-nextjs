import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import { v4 as uuidv4 } from 'uuid'

export async function POST(req: Request) {
  try {
    const data = await req.formData()
    const file: File | null = data.get('file') as unknown as File

    if (!file) {
      return NextResponse.json({ success: false, error: 'File tidak ditemukan' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Generate unique filename
    const ext = file.name.split('.').pop()
    const filename = `${uuidv4()}.${ext}`
    
    // Save to public/uploads
    const uploadDir = join(process.cwd(), 'public', 'uploads')
    const path = join(uploadDir, filename)

    await writeFile(path, buffer)

    return NextResponse.json({ success: true, url: `/uploads/${filename}` })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
