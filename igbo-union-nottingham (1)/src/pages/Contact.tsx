import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Let's Connect.</h1>
          <p className="mx-auto max-w-2xl text-xl text-slate-600">Have a question? Want to collaborate? We'd love to hear from you. Nnọọ! (Welcome!)</p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Info */}
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-slate-900">Get in touch</h2>
                <p className="text-lg text-slate-600">Our team is here to help. Reach out via any of the channels below or fill out the form.</p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email Us</h4>
                    <p className="text-sm text-slate-600">info@igbounionnottingham.org</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Call Us</h4>
                    <p className="text-sm text-slate-600">+44 (0) 115 000 0000</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Visit Us</h4>
                    <p className="text-sm text-slate-600">Nottingham Community Center,<br />Nottingham, UK</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Hours</h4>
                    <p className="text-sm text-slate-600">Mon-Fri: 9am - 5pm</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video w-full overflow-hidden rounded-3xl bg-slate-100 ring-1 ring-slate-200">
                <img
                  src="https://picsum.photos/seed/map/800/450"
                  alt="Map Location"
                  className="h-full w-full object-cover opacity-50 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="rounded-full bg-brand-green p-4 text-white shadow-xl">
                     <MapPin className="h-8 w-8" />
                   </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl bg-white p-8 shadow-2xl shadow-slate-200/50 ring-1 ring-slate-100 md:p-12">
              <form className="grid gap-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">First Name</label>
                    <input type="text" className="rounded-xl bg-slate-50 px-4 py-3 outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-brand-green" placeholder="Jane" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">Last Name</label>
                    <input type="text" className="rounded-xl bg-slate-50 px-4 py-3 outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-brand-green" placeholder="Smith" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input type="email" className="rounded-xl bg-slate-50 px-4 py-3 outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-brand-green" placeholder="jane@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">Subject</label>
                  <select className="rounded-xl bg-slate-50 px-4 py-3 outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-brand-green">
                    <option>General Inquiry</option>
                    <option>Membership Proposal</option>
                    <option>Volunteer Application</option>
                    <option>Welfare Support</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea rows={6} className="rounded-xl bg-slate-50 px-4 py-3 outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-brand-green" placeholder="How can we help?"></textarea>
                </div>
                <button className="rounded-full bg-brand-green py-4 font-bold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-green-700 active:scale-95">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
