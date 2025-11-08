import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$49',
    cadence: 'mo',
    features: ['Core POS', 'Basic inventory', 'Email support'],
  },
  {
    name: 'Growth',
    price: '$149',
    cadence: 'mo',
    features: ['Advanced inventory', 'CRM & campaigns', 'Role dashboards'],
    popular: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    cadence: '',
    features: ['SSO & audit logs', 'Priority support', 'Custom SLAs'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Simple pricing</h2>
          <p className="mt-2 text-slate-600">Start small, scale to thousands of locations without friction.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border ${t.popular ? 'border-indigo-500' : 'border-slate-200'} bg-white p-6 shadow-sm`}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
                {t.popular && (
                  <span className="rounded-full bg-indigo-50 text-indigo-700 text-xs px-2 py-1">Popular</span>
                )}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-slate-900">{t.price}</span>
                <span className="text-slate-500">/{t.cadence || ' '}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-700">
                    <Check className="h-4 w-4 text-emerald-600" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-6 inline-flex w-full justify-center rounded-md px-4 py-2 font-medium ${t.popular ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
