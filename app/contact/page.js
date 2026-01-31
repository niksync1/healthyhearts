export const metadata = {
  title: 'Contact — Life After 30',
  description: 'Contact us for partnerships, questions, or support.'
}

export default function Contact(){
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mt-2 text-slate-600">We'd love to hear from you. Reach out with questions or to get involved.</p>

      <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
        <input aria-label="Name" placeholder="Name" className="p-2 border rounded" />
        <input aria-label="Email" placeholder="Email" className="p-2 border rounded" />
        <textarea aria-label="Message" placeholder="Message" className="p-2 border rounded col-span-1 sm:col-span-2" />
        <button className="px-4 py-2 bg-teal-600 text-white rounded">Send Message</button>
      </form>

      <section className="mt-8">
        <h2 className="text-2xl">Find Us</h2>
        <div className="mt-4 p-6 bg-white rounded shadow">Map placeholder</div>
        <div className="mt-4 flex gap-3">
          <a href="#" aria-label="Twitter" className="text-slate-700">Twitter</a>
          <a href="#" aria-label="Facebook" className="text-slate-700">Facebook</a>
        </div>
      </section>
    </div>
  )
}
