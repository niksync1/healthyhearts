"use client";

import { useState } from "react";
import Image from "next/image";

export default function Gallery({ events }) {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null); // { src, alt, caption }

  const allImages = events.flatMap((e) =>
    e.images.map((img) => ({ ...img, eventId: e.id, eventTitle: e.title }))
  );

  const filtered = filter === "all" ? allImages : allImages.filter((i) => i.eventId === filter);

  return (
    <div>
      <div className="mb-4 flex gap-2 flex-wrap">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1 rounded-full text-sm ${filter === "all" ? "bg-brand-green text-white" : "bg-slate-100 dark:bg-slate-800"}`}
        >
          All
        </button>
        {events.map((e) => (
          <button
            key={e.id}
            onClick={() => setFilter(e.id)}
            className={`px-3 py-1 rounded-full text-sm ${filter === e.id ? "bg-brand-green text-white" : "bg-slate-100 dark:bg-slate-800"}`}
          >
            {e.title}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {filtered.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setLightbox(img)}
            className="block overflow-hidden rounded-md bg-slate-100 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-green"
          >
            <div className="relative w-full h-40">
              <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} />
            </div>
            <div className="p-2 text-xs text-slate-700 dark:text-slate-300">{img.caption}</div>
          </button>
        ))}
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setLightbox(null)}>
          <div className="max-w-3xl w-full bg-white dark:bg-slate-800 rounded-md overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-96 bg-black">
              <Image src={lightbox.src} alt={lightbox.alt} fill style={{ objectFit: "contain" }} />
            </div>
            <div className="p-4">
              <div className="text-sm text-slate-900 dark:text-slate-100">{lightbox.caption}</div>
              <div className="text-xs text-slate-500">{lightbox.eventTitle}</div>
              <div className="mt-3 flex justify-end">
                <button onClick={() => setLightbox(null)} className="px-3 py-1 rounded bg-brand-dark text-white">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
