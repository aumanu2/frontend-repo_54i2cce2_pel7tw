import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-gradient-to-b from-black to-zinc-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cb2mFOQm3xLPnK7R/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            Connect • Automate • Optimize
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            The operating system for modern restaurants
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/80">
            Project Nexus unifies your website, ordering, POS, inventory, CRM, and finances into one intelligent platform. Real-time syncing across every channel, automated workflows, and actionable insights—out of the box.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black shadow transition hover:bg-white/90"
            >
              Start free trial <ArrowRight size={16} />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Watch demo
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </section>
  );
}
