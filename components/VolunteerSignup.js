"use client"
import { useState } from 'react'

export default function VolunteerSignup(){
  const [form, setForm] = useState({name:'', email:''})
  const [status, setStatus] = useState('')

  async function submit(e){
    e.preventDefault()
    setStatus('Submitting...')
    try{
      // mock delay
      await new Promise(r=>setTimeout(r,500))
      setStatus('Thanks — we received your signup (mock)')
      setForm({name:'', email:''})
    } catch(err){
      setStatus('Error submitting')
    }
  }

  return (
    <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-xl" aria-label="Volunteer signup form">
  <input required placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="p-2 border rounded" />
  <input required type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="p-2 border rounded" />
  <button className="bg-brand-green text-white px-4 py-2 rounded hover:bg-brand-dark">Sign up to volunteer</button>
      <div className="md:col-span-2 text-sm text-slate-700 dark:text-slate-300">{status}</div>
    </form>
  )
}
