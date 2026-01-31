export const metadata = {
  title: 'Resources — Life After 30',
  description: 'Exercise tips, nutrition guidance, and blood pressure education for adults.'
}

export default function Resources(){
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Healthy Living Resources</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Exercise Tips for Busy Adults</h2>
        <p className="mt-2 text-slate-700 dark:text-slate-300">Short, effective workouts and activity suggestions you can do in 20–30 minutes.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Nutrition Guidance</h2>
        <p className="mt-2 text-slate-700 dark:text-slate-300">Practical meal ideas and nutrition basics focused on whole foods and balance.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Blood Pressure Education</h2>
        <p className="mt-2 text-slate-700 dark:text-slate-300">Why routine monitoring matters and how to track readings at home.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Downloadable Health Check Tracker</h2>
        <p className="mt-2 text-slate-700 dark:text-slate-300">Download the tracker (placeholder) to record routine checks and habits.</p>
        <div className="mt-3">
          <a className="bg-teal-600 text-white px-4 py-2 rounded" href="#">Download tracker (placeholder)</a>
        </div>
      </section>
    </div>
  )
}
