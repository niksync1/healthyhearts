import { NextResponse } from 'next/server'

export async function POST(request){
  try{
    const data = await request.json()
    // mock: accept any email and return success
    return NextResponse.json({ ok: true, email: data.email })
  }catch(e){
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
