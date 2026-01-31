import Image from 'next/image'
import Card from '../components/Card'
import Testimonial from '../components/Testimonial'
import BMICalculator from '../components/BMICalculator'
import CTA from '../components/CTA'

export default function Home(){
  return (
    <div>
      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="p-4 rounded-lg md:p-0 md:bg-transparent bg-white/90 dark:bg-slate-900/75 md:dark:bg-transparent md:backdrop-blur-0">
            <h1 className="text-3xl md:text-4xl font-bold text-black md:text-slate-900 dark:text-slate-100">Healthy Living Starts After 30</h1>
            <p className="mt-4 text-slate-800 md:text-slate-700 dark:text-slate-300">Join a community focused on sustainable habits: regular exercise, balanced nutrition, and routine blood pressure checks.</p>
            <div className="mt-6 flex gap-3">
              <a href="/community" className="bg-teal-600 text-white px-4 py-2 rounded">Join Community</a>
              <a href="/resources" className="border border-teal-600 text-teal-600 px-4 py-2 rounded">Learn Healthy Habits</a>
            </div>
          </div>
          <div>
            <Image src="/hero-placeholder.jpg" alt="Healthy living" width={600} height={400} className="rounded-lg shadow-md object-cover" />
          </div>
        </div>
      </section>

      <section className="container py-8">
        <h2 className="text-2xl font-semibold mb-4">Key Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card title="Exercise" icon="🏃‍♂️">Practical workouts and short routines for busy adults to build consistency.</Card>
          <Card title="Healthy Diet" icon="🥗">Simple meal patterns and grocery tips for balanced nutrition.</Card>
          <Card title="Blood Pressure" icon="🩺">Easy ways to monitor blood pressure and when to seek help.</Card>
        </div>
      </section>

      <section className="container py-8">
        <h2 className="text-2xl font-semibold mb-4">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Testimonial name="Aisha R." text="Joining the group helped me start walking daily—I've never felt better." />
          <Testimonial name="Mark T." text="The tips are practical and fit my schedule as a parent and full-time worker." />
        </div>
      </section>

      <section className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Try a quick BMI check</h3>
            <BMICalculator />
          </div>
          <div>
            <CTA title="Be part of a healthier future" subtitle="Join thousands of adults building lasting habits after 30." />
          </div>
        </div>
      </section>
    </div>
  )
}
