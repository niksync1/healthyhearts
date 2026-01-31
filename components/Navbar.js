"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(()=>{
    const saved = typeof window !== 'undefined' && localStorage.getItem('theme')
    if(saved === 'dark') setDark(true)
  },[])

  useEffect(()=>{
    if(dark){
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme','dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme','light')
    }
  },[dark])

  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-40">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/main_logo.png" alt="Life After 30" width={40} height={40} />
          <span className="font-semibold text-lg text-slate-900 dark:text-slate-100">Life After 30</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/about" className="text-slate-700 dark:text-slate-200">About</Link>
          <Link href="/resources" className="text-slate-700 dark:text-slate-200">Resources</Link>
          <Link href="/community" className="text-slate-700 dark:text-slate-200">Community</Link>
          <Link href="/contact" className="text-slate-700 dark:text-slate-200">Contact</Link>
          <button onClick={()=>setDark(d=>!d)} aria-label="Toggle dark mode" className="ml-2 px-3 py-1 rounded bg-amber-100 text-amber-700">{dark ? 'Light' : 'Dark'}</button>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <button onClick={()=>setDark(d=>!d)} aria-label="Toggle dark mode" className="px-2 py-1 rounded bg-amber-100 text-amber-700">{dark ? '☀️' : '🌙'}</button>
          <button aria-label="Open menu" onClick={()=>setOpen(o=>!o)} className="p-2">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t">
          <div className="container flex flex-col py-4">
            <Link href="/about" className="py-2">About</Link>
            <Link href="/resources" className="py-2">Resources</Link>
            <Link href="/community" className="py-2">Community</Link>
            <Link href="/contact" className="py-2">Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}
 
