import VolunteerSignup from '../../components/VolunteerSignup'

export const metadata = {
  title: 'Community — Life From 30',
  description: 'Get involved: events, volunteering, and community support.'
}

const mockEvents = [
  {id:1, title:'Morning Walk - Park Ave', date:'2026-02-14'},
  {id:2, title:'Healthy Cooking Workshop', date:'2026-03-02'},
]

export default function Community(){
  return (
    <div className="container py-12">
      <h1 className="text-2xl font-bold mb-4">Community & Get Involved</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Volunteer Signup</h2>
        <VolunteerSignup />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {mockEvents.map(ev=> (
            <div key={ev.id} className="bg-white dark:bg-slate-800 p-4 rounded shadow-sm">
              <div className="font-semibold">{ev.title}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">{ev.date}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
