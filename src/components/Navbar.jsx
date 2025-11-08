import { useState } from 'react';
import { Menu, X, Rocket, Github, LogIn } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Dashboards', href: '#dashboards' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '#docs' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-slate-900">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 grid place-items-center text-white shadow">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight">Project Nexus</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#docs"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 hover:bg-slate-50"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-indigo-500"
            >
              <LogIn className="h-4 w-4" />
              Request Demo
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-300 p-2 text-slate-700"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#cta"
                className="rounded-md px-3 py-2 text-white bg-indigo-600 hover:bg-indigo-500"
                onClick={() => setOpen(false)}
              >
                Request Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
