import { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/demo-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });
      if (res.ok) setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    }
  };

  return (
    <section id="cta" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-indigo-50 to-white" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white grid place-items-center">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Request a live demo</h3>
              <p className="text-sm text-slate-600">We’ll reach out within 24 hours.</p>
            </div>
          </div>

          {submitted ? (
            <div className="mt-6 flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-emerald-700">
              <CheckCircle2 className="h-5 w-5" />
              Thanks! We’ve received your request.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 grid sm:grid-cols-3 gap-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="sm:col-span-1 col-span-3 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                className="sm:col-span-2 col-span-3 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button
                type="submit"
                className="sm:col-span-1 col-span-3 inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-500"
              >
                Send Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
