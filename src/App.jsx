import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Project Nexus. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#privacy" className="hover:text-white">Privacy</a>
          <a href="#terms" className="hover:text-white">Terms</a>
          <a href="#security" className="hover:text-white">Security</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
