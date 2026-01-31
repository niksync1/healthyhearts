export default function Card({title, children, icon}){
  return (
    <article className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
      {icon && <div className="text-2xl mb-3">{icon}</div>}
      <h4 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100">{title}</h4>
      <div className="text-sm text-slate-700 dark:text-slate-300">{children}</div>
    </article>
  )
}
 
