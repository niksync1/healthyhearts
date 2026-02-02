import fs from "fs";
import path from "path";
import Gallery from "../../components/Gallery";

export const metadata = {
  title: "Gallery — Life From 30",
  description: "Photos from our outreach events and community activities",
};

export default async function Page() {
  const file = path.join(process.cwd(), "data", "events.json");
  const raw = fs.readFileSync(file, "utf8");
  const events = JSON.parse(raw);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-semibold text-brand-dark mb-4">Event Gallery</h1>
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">Browse photos from our past outreach and community events.</p>
      {/* Gallery is a client component */}
      <Gallery events={events} />
    </main>
  );
}
