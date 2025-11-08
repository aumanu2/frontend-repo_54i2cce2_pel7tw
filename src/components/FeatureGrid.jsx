import { Database, Layers, BarChart3, ShoppingCart, Smartphone, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Unified platform',
    desc: 'One login, one data model. Website, POS, CRM, inventory, and analytics connected in real time.'
  },
  {
    icon: ShoppingCart,
    title: 'Omni-channel ordering',
    desc: 'Pickup, delivery, dine-in, and third-party marketplaces all flow into a single order hub.'
  },
  {
    icon: Database,
    title: 'Single customer profile',
    desc: 'Every interaction updates a 360° profile—preferences, spend, loyalty, and feedback.'
  },
  {
    icon: BarChart3,
    title: 'Live insights',
    desc: 'Track sales, covers, COGS, labor, and campaign ROI from a unified dashboard.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-first ops',
    desc: 'Manager app for alerts, approvals, and KPIs on the go.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade security',
    desc: 'SOC 2 controls, RBAC, and encrypted payments end-to-end.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="modules" className="relative bg-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Connect every part of your business</h2>
          <p className="mt-4 text-white/70">From first click to last course. Nexus keeps menus, orders, inventory, and finances perfectly in sync.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 transition hover:border-white/20">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white">
                <Icon size={18} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
