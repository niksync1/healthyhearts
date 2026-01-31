import Link from 'next/link'

export default function Footer(){
  return (
  <footer className="bg-slate-50 dark:bg-slate-900 border-t mt-12">
      <div className="container py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
      <h3 className="font-bold text-brand-dark">Life After 30</h3>
      <p className="text-sm text-slate-600">Helping adults stay healthy after 30</p>
        </div>

        <nav className="flex gap-4">
      <Link href="/privacy" className="text-slate-600 hover:text-brand-dark">Privacy</Link>
      <Link href="/terms" className="text-slate-600 hover:text-brand-dark">Terms</Link>
        </nav>

        <div className="text-sm text-slate-600 dark:text-slate-300">© {new Date().getFullYear()} Life From 30</div>
      </div>
    </footer>
  )
}
 
