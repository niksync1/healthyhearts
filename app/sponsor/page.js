export const metadata = {
  title: 'Sponsor Us — Life From 30',
  description: 'Support our community outreach and health education programs.'
}

export default function Sponsor(){
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-semibold text-brand-dark mb-4">Support Our Work</h1>
      <p className="text-slate-700 dark:text-slate-300 mb-4">Your sponsorship helps fund community health screenings, educational workshops, and outreach in underserved areas. We partner with local clinics and volunteers to deliver measurable impact.</p>

      <div className="bg-white dark:bg-slate-800 p-6 rounded shadow-sm">
        <h2 className="text-lg font-medium mb-2">Sponsorship Options</h2>
        <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300 mb-4">
          <li>Event sponsor — supports a single outreach event</li>
          <li>Program sponsor — funds ongoing workshops and screenings</li>
          <li>Partner sponsor — long-term partnership and visibility</li>
        </ul>

        <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">To discuss sponsorship packages and visibility, please contact our team or use the secure sponsorship portal.</p>

        <a href="https://example.com/sponsor-payment" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-dark text-white px-5 py-2 rounded">Go to Sponsorship Portal</a>
      </div>
    </main>
  )
}
