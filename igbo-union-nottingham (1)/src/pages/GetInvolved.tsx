import { Heart, Users, Handshake, CheckCircle2, ArrowRight } from 'lucide-react';

export function GetInvolved() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Your Action, Our Impact.</h1>
          <p className="mx-auto max-w-2xl text-xl text-slate-600">Whether you donate, volunteer, or partner with us, you are the catalyst for change in our community.</p>
        </div>
      </section>

      {/* Options Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Donate */}
            <div className="flex flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-emerald-50/50 ring-1 ring-slate-100">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-brand-green">
                <Heart className="h-7 w-7 fill-current" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Membership & Support</h2>
              <p className="mb-8 text-slate-600">Your contributions help us organize cultural events, support members in need, and maintain our community presence.</p>
              <div className="mb-8 grid grid-cols-2 gap-3">
                {['£10', '£25', '£50', '£100'].map((amt) => (
                  <button key={amt} className="rounded-xl border border-slate-200 py-3 font-bold text-slate-600 transition-all hover:border-brand-green hover:text-brand-green">
                    {amt}
                  </button>
                ))}
              </div>
              <button className="mt-auto w-full rounded-full bg-brand-green py-4 font-bold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-700 active:scale-95">
                Support Now
              </button>
            </div>

            {/* Volunteer */}
            <div className="flex flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Users className="h-7 w-7" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Volunteer</h2>
              <p className="mb-8 text-slate-600">Share your skills and time. From mentoring to event support, we need your expertise.</p>
              <ul className="mb-8 space-y-3">
                {['Mentorship Programs', 'Community Events', 'Skills Workshops', 'Admin Support'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
              <button className="mt-auto w-full rounded-full border-2 border-slate-900 py-4 font-bold text-slate-900 transition-all hover:bg-slate-900 hover:text-white active:scale-95">
                Apply to Volunteer
              </button>
            </div>

            {/* Partner */}
            <div className="flex flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                <Handshake className="h-7 w-7" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Partner</h2>
              <p className="mb-8 text-slate-600">Corporate social responsibility that makes a real difference. Let's build a partnership that lasts.</p>
              <ul className="mb-8 space-y-3">
                {['CSR Initiatives', 'Grant Funding', 'In-kind Donations', 'Co-branded Projects'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-amber-500" /> {item}
                  </li>
                ))}
              </ul>
              <button className="mt-auto w-full rounded-full border-2 border-slate-900 py-4 font-bold text-slate-900 transition-all hover:bg-slate-900 hover:text-white active:scale-95">
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Form Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 md:p-12">
            <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Get in Touch to Help</h2>
            <form className="grid gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input type="text" className="rounded-xl bg-slate-50 px-4 py-3 outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-indigo-500" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input type="email" className="rounded-xl bg-slate-50 px-4 py-3 outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-indigo-500" placeholder="john@example.com" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">How would you like to help?</label>
                <select className="rounded-xl bg-slate-50 px-4 py-3 outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-indigo-500">
                  <option>Select an option</option>
                  <option>Donating</option>
                  <option>Volunteering</option>
                  <option>Corporate Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">Message (Optional)</label>
                <textarea rows={4} className="rounded-xl bg-slate-50 px-4 py-3 outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-indigo-500" placeholder="Tell us a bit about yourself..."></textarea>
              </div>
              <button className="rounded-full bg-indigo-600 py-4 font-bold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 active:scale-95">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
