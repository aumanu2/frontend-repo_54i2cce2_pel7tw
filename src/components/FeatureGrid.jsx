import { Shield, Database, BarChart3, Layers, ShoppingCart, Smartphone } from 'lucide-react';

const features = [
  {
    title: 'Unified Platform',
    desc: 'POS, CRM, inventory, and analytics connected by design.',
    icon: Layers,
  },
  {
    title: 'Real-time KPIs',
    desc: 'Live dashboards show margins, labor, and promos instantly.',
    icon: BarChart3,
  },
  {
    title: 'Secure & Compliant',
    desc: 'Best-in-class security with audit trails and SSO.',
    icon: Shield,
  },
  {
    title: 'Inventory Control',
    desc: 'Recipe costing, waste tracking, and vendor automation.',
    icon: Database,
  },
  {
    title: 'Modern POS',
    desc: 'Offline-ready, fast checkouts, and flexible menus.',
    icon: ShoppingCart,
  },
  {
    title: 'Mobile First',
    desc: 'Native-like PWA on any device for your team.',
    icon: Smartphone,
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Built for multi-unit operators</h2>
          <p className="mt-3 text-slate-600">Scale with confidence using a platform engineered for speed, reliability, and extensibility.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-indigo-600/10 text-indigo-600 grid place-items-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
