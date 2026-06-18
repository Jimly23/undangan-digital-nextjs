import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const data = await prisma.undangan.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { slug, tema } = body // ID bisa ada kalau Update

    if (!slug || !tema) {
      return NextResponse.json({ success: false, error: 'Slug dan tema wajib diisi' }, { status: 400 })
    }

    if (body.id) {
        // UPDATE
        const res = await prisma.undangan.update({
            where: { id: body.id },
            data: { slug, tema }
        });
        return NextResponse.json({ success: true, data: res });
    } else {
        // CREATE
        const exist = await prisma.undangan.findUnique({
          where: { slug }
        })

        if (exist) {
          return NextResponse.json({ success: false, error: 'Slug sudah digunakan, pilih slug lain' }, { status: 400 })
        }

        const data = await prisma.undangan.create({
          data: { slug, tema }
        })
        return NextResponse.json({ success: true, data })
    }
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const id = parseInt(url.searchParams.get('id') || '');
    if (isNaN(id)) return NextResponse.json({ success: false, error: 'id missing' }, { status: 400 });
    await prisma.undangan.delete({
      where: { id }
    })
    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
