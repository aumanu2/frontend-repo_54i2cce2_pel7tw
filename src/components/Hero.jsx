import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-indigo-50 via-transparent to-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 py-20 lg:py-28">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Run your hospitality ops with confidence.
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Project Nexus unifies POS, inventory, CRM, and analytics into one streamlined platform. Real-time insights, role-based dashboards, and blazing-fast performance.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-500">
              Request a Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-slate-800 hover:bg-slate-50">
              Explore Features
            </a>
          </div>
        </div>
        <div className="h-[420px] sm:h-[520px] rounded-2xl border border-slate-200/70 bg-white shadow-sm overflow-hidden">
          <Spline scene="https://prod.spline.design/9q1a4fYH8g3qfVqQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
