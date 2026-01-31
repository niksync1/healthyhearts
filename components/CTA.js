import Link from 'next/link'

export default function CTA({title, subtitle, primaryHref = '/', secondaryHref = '/resources'}){
  return (
    <section className="bg-gradient-to-r from-brand-green to-brand-dark text-white rounded-lg p-8 shadow-md">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-brand-charcoal">{title}</h3>
          <p className="mt-2 text-sm opacity-90">{subtitle}</p>
        </div>
        <div className="flex gap-3">
          <Link href={primaryHref} className="bg-white text-brand-green px-4 py-2 rounded font-semibold">Join Community</Link>
          <Link href={secondaryHref} className="border border-white px-4 py-2 rounded">Learn Healthy Habits</Link>
        </div>
      </div>
    </section>
  )
}
