import { useState } from 'react';
import { Menu, X, Rocket, Shield } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Platform', href: '#platform' },
    { label: 'Modules', href: '#modules' },
    { label: 'Analytics', href: '#analytics' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '#docs' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-violet-600">
              <Rocket size={18} className="text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Project Nexus</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#signin"
              className="rounded-md px-4 py-2 text-sm font-medium text-white/80 hover:text-white"
            >
              Sign in
            </a>
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-semibold shadow-sm transition hover:bg-white/90"
            >
              <Shield size={16} /> Start free trial
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 py-4">
            <nav className="flex flex-col gap-3 text-sm text-white/80">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="px-1 py-2 rounded hover:bg-white/5">
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-2">
                <a href="#signin" className="px-3 py-2 rounded hover:bg-white/5">Sign in</a>
                <a
                  href="#get-started"
                  className="flex-1 text-center rounded-md bg-white text-black px-4 py-2 text-sm font-semibold shadow-sm transition hover:bg-white/90"
                >
                  Start free trial
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
