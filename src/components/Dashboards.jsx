import { useState } from 'react';
import { ChefHat, LayoutDashboard, PieChart, Users, Flame } from 'lucide-react';

const roles = [
  {
    key: 'chef',
    name: 'Chef',
    icon: ChefHat,
    widgets: [
      { label: 'Prep List', value: '12 items', trend: '+3 today' },
      { label: 'Food Cost', value: '29.4%', trend: '-0.8% WoW' },
      { label: 'Waste', value: '0.7%', trend: '-0.2% WoW' },
    ],
  },
  {
    key: 'manager',
    name: 'Manager',
    icon: Users,
    widgets: [
      { label: 'Labor', value: '18.6%', trend: '+1.1% Today' },
      { label: 'Voids/Comps', value: '0.3%', trend: 'Healthy' },
      { label: 'Reviews', value: '4.7 ★', trend: '23 new' },
    ],
  },
  {
    key: 'owner',
    name: 'Owner',
    icon: PieChart,
    widgets: [
      { label: 'Net Margin', value: '14.2%', trend: '+2.1% MoM' },
      { label: 'Same-Store Sales', value: '+8.4%', trend: 'vs LY' },
      { label: 'Runway', value: '18 mo', trend: 'Stable' },
    ],
  },
];

export default function Dashboards() {
  const [active, setActive] = useState('chef');
  const role = roles.find((r) => r.key === active) ?? roles[0];

  return (
    <section id="dashboards" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Role‑based dashboards</h2>
            <p className="mt-2 text-slate-600">Purpose-built views for every role to move faster with clarity.</p>
          </div>
          <div className="flex items-center gap-2">
            {roles.map((r) => (
              <button
                key={r.key}
                onClick={() => setActive(r.key)}
                className={`${active === r.key ? 'bg-indigo-600 text-white' : 'bg-white text-slate-700'} inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm`}
              >
                <r.icon className="h-4 w-4" />
                {r.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <LayoutDashboard className="h-5 w-5 text-indigo-600" />
                <h3 className="font-semibold text-slate-900">{role.name} Overview</h3>
              </div>
              <span className="text-xs text-slate-500">Live</span>
            </div>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {role.widgets.map((w) => (
                <div key={w.label} className="rounded-lg border border-slate-200 p-4">
                  <p className="text-xs text-slate-500">{w.label}</p>
                  <p className="mt-1 text-xl font-semibold text-slate-900">{w.value}</p>
                  <p className="text-xs text-emerald-600 mt-1">{w.trend}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 h-48 rounded-lg border border-dashed border-slate-300 grid place-items-center text-slate-500">
              Sample chart area
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-orange-600" />
              <h3 className="font-semibold text-slate-900">Hot KPIs</h3>
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center justify-between"><span>Throughput</span><span className="font-medium">+12%</span></li>
              <li className="flex items-center justify-between"><span>Avg Ticket</span><span className="font-medium">$23.40</span></li>
              <li className="flex items-center justify-between"><span>Table Turn</span><span className="font-medium">36m</span></li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex w-full justify-center rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">Get full access</a>
          </div>
        </div>
      </div>
    </section>
  );
}
