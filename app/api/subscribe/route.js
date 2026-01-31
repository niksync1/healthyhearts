import { NextResponse } from 'next/server'

export async function POST(req){
  try {
    const data = await req.json()
    // In a real app we'd validate and store the email; here we return success mock
    return NextResponse.json({ success:true, email: data.email })
  } catch(err){
    return NextResponse.json({ success:false, error: 'Invalid payload' }, { status:400 })
  }
}
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
