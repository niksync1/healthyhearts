import Image from 'next/image'

export default function Testimonial({name, text, avatar}){
  return (
    <blockquote className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-4 mb-3">
    <Image src={avatar || '/avatar-placeholder.png'} width={48} height={48} alt={name} className="rounded-full ring-2 ring-brand-green" />
        <div>
      <div className="font-semibold text-brand-dark">{name}</div>
          <div className="text-sm text-slate-600 dark:text-slate-300">Community member</div>
        </div>
      </div>
      <p className="text-slate-700 dark:text-slate-300">{text}</p>
    </blockquote>
  )
}
