import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-1">
                <img src="/logo.png" alt="Logo" className="h-full w-full object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tight">Igbo Union Nottingham</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 italic">
              "Otu Obi na ịhụnanya" — Unity & Love
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Igbo Union Nottingham is a registered Community Interest Company dedicated to promoting Igbo culture, unity, and social welfare in the Nottingham area.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-indigo-400 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/impact" className="hover:text-indigo-400 transition-colors">Our Impact</Link></li>
              <li><Link to="/projects" className="hover:text-indigo-400 transition-colors">Projects</Link></li>
              <li><Link to="/get-involved" className="hover:text-indigo-400 transition-colors">Get Involved</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-brand-green shrink-0" />
                <span>Nottingham Community Center,<br />Nottingham, NG1 1AA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-green shrink-0" />
                <span>+44 (0) 115 946 0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-green shrink-0" />
                <span>info@igbounionnottingham.org.uk</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Stay Updated</h3>
            <p className="mb-4 text-sm text-slate-400">Join our newsletter to see the impact of your support.</p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="rounded-lg bg-slate-800 px-4 py-2.5 text-sm text-white outline-none ring-1 ring-slate-700 focus:ring-2 focus:ring-indigo-500"
              />
              <button className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-indigo-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>© 2026 Igbo Union Nottingham CIC. All rights reserved. Registered in England & Wales.</p>
          <div className="mt-2 flex justify-center gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
