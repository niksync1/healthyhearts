import Image from 'next/image'

export const metadata = {
  title: 'About — Life After 30',
  description: 'Our story and mission to help adults live healthier lives after 30.'
}

export default function About(){
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">About Life After 30</h1>
      <p className="text-slate-700 dark:text-slate-300 mb-4">We advocate for adults to prioritize long-term health after their 30s through exercise, nutrition, and routine monitoring.</p>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Our Story</h2>
        <p className="mt-2 text-slate-700 dark:text-slate-300">Life After 30 started as a small community initiative and grew into a charity focused on practical, sustainable health habits for busy adults.</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Mission & Vision</h2>
        <p className="mt-2 text-slate-700 dark:text-slate-300">We build supportive spaces and provide easy-to-follow resources so adults aged 30–60 can maintain long-term health without drastic measures.</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Team</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center">
            <Image src="/avatar-placeholder.png" width={96} height={96} alt="Alex Morgan" className="mx-auto rounded-full" />
            <div className="mt-3 font-semibold">Alex Morgan</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">Founder</div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center">
            <Image src="/avatar-placeholder.png" width={96} height={96} alt="Priya Singh" className="mx-auto rounded-full" />
            <div className="mt-3 font-semibold">Priya Singh</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">Community Lead</div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center">
            <Image src="/avatar-placeholder.png" width={96} height={96} alt="Marcus Lee" className="mx-auto rounded-full" />
            <div className="mt-3 font-semibold">Marcus Lee</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">Health Educator</div>
          </div>
        </div>
      </section>
    </div>
  )
}
