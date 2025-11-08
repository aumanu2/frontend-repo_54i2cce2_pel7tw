import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Dashboards from './components/Dashboards';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex items-center justify-between flex-wrap gap-4">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Project Nexus. All rights reserved.</p>
        <div className="text-sm text-slate-500 flex gap-4">
          <a href="#docs" className="hover:text-slate-700">Docs</a>
          <a href="#privacy" className="hover:text-slate-700">Privacy</a>
          <a href="#terms" className="hover:text-slate-700">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <Dashboards />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
