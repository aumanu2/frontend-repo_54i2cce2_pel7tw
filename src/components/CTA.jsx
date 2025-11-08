import { Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section id="get-started" className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-violet-600 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Launch Nexus in your restaurant</h2>
            <p className="mt-3 text-white/90">Start with online ordering and CRM, add POS and inventory when you’re ready. No rip-and-replace—connect, automate, optimize.</p>
          </div>
          <form className="rounded-xl bg-white p-6 shadow-2xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-zinc-900">Restaurant name</label>
                <input type="text" className="mt-1 w-full rounded-md border border-zinc-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g., Aurora Bistro" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-900">Your name</label>
                <input type="text" className="mt-1 w-full rounded-md border border-zinc-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Alex Rivera" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-900">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-zinc-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@restaurant.com" />
              </div>
            </div>
            <button type="button" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-black">
              <Sparkles size={16} /> Request a demo
            </button>
            <p className="mt-3 text-center text-xs text-zinc-600">14-day free trial • No credit card required</p>
          </form>
        </div>
      </div>
    </section>
  );
}
