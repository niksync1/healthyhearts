"use client"
import { useState } from 'react'

export default function BMICalculator(){
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState(null)

  function calculate(e){
    e.preventDefault()
    const w = parseFloat(weight)
    const h = parseFloat(height) / 100
    if(!w || !h) return
    const val = (w / (h * h)).toFixed(1)
    setBmi(val)
  }

  return (
    <form onSubmit={calculate} className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
      <div className="grid grid-cols-2 gap-3 mb-3">
        <label className="text-sm text-slate-700 dark:text-slate-300">Weight (kg)
          <input value={weight} onChange={e=>setWeight(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2 bg-transparent text-slate-900 dark:text-slate-100" />
        </label>
        <label className="text-sm text-slate-700 dark:text-slate-300">Height (cm)
          <input value={height} onChange={e=>setHeight(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2 bg-transparent text-slate-900 dark:text-slate-100" />
        </label>
      </div>
      <div className="flex items-center gap-3">
  <button className="bg-brand-green text-white px-4 py-2 rounded hover:bg-brand-dark">Calculate BMI</button>
        {bmi && <div className="text-sm text-slate-700 dark:text-slate-300">BMI: <strong>{bmi}</strong></div>}
      </div>
    </form>
  )
}
