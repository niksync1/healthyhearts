import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t mt-8">
      <div className="container py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">Life After 30</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">Encouraging adults to live healthier lives after 30.</p>
        </div>

        <nav className="flex gap-4">
          <Link href="/about" className="text-slate-600 dark:text-slate-300">About</Link>
          <Link href="/resources" className="text-slate-600 dark:text-slate-300">Resources</Link>
          <Link href="/community" className="text-slate-600 dark:text-slate-300">Community</Link>
        </nav>

        <div className="text-sm text-slate-600 dark:text-slate-300">© {new Date().getFullYear()} Life After 30</div>
      </div>
    </footer>
  )
}
 
