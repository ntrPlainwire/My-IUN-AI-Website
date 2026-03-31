import { ArrowRight, Users, TrendingUp, ShieldCheck, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div
              className="flex flex-col gap-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-brand-green ring-1 ring-inset ring-emerald-200">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                Otu Obi na ịhụnanya — Unity & Love
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                Promoting Unity, <br />
                <span className="text-brand-green">Culture & Welfare</span> in Nottingham.
              </h1>
              <p className="text-lg leading-relaxed text-slate-600">
                Igbo Union Nottingham is dedicated to fostering a strong, supportive community for the Igbo people and their friends in Nottingham. We celebrate our heritage while building a brighter future together.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/get-involved"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-4 text-lg font-bold text-white shadow-xl shadow-emerald-100 transition-all hover:bg-emerald-700 hover:shadow-emerald-200 active:scale-95"
                >
                  Support Us <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/impact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-slate-900 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-slate-50 active:scale-95"
                >
                  Our Impact
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      className="h-10 w-10 rounded-full ring-2 ring-white"
                      src={`https://picsum.photos/seed/user${i}/100/100`}
                      alt="User"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-500">
                  Joined by <span className="font-bold text-slate-900">2,500+</span> local volunteers
                </p>
              </div>
            </div>
            <div className="relative">

              <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-slate-200 shadow-2xl">
                <img
                  src="https://picsum.photos/seed/community/800/600"
                  alt="Community Impact"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-100">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Impact Growth</p>
                    <p className="text-2xl font-bold text-slate-900">+45% YoY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Partners */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center text-sm font-bold uppercase tracking-widest text-slate-400">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0 md:gap-16">
            {['Global Grant', 'City Council', 'Unity Fund', 'Tech4Good', 'EcoTrust'].map((partner) => (
              <span key={partner} className="text-2xl font-black tracking-tighter text-slate-400">{partner}</span>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Pillars */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Pillars of Change</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">We focus our efforts where they matter most, creating sustainable systems of support for lasting community transformation.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Education & Skills',
                desc: 'Providing vocational training and digital literacy to bridge the employment gap.',
                icon: Globe,
                color: 'bg-blue-50 text-blue-600',
              },
              {
                title: 'Health & Wellbeing',
                desc: 'Mental health support and community wellness programs for all ages.',
                icon: Heart,
                color: 'bg-rose-50 text-rose-600',
              },
              {
                title: 'Sustainable Living',
                desc: 'Promoting local food security and green energy initiatives for a better planet.',
                icon: ShieldCheck,
                color: 'bg-emerald-50 text-emerald-600',
              },
            ].map((pillar) => (
              <div key={pillar.title} className="group rounded-3xl border border-slate-100 bg-white p-8 transition-all hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50">
                <div className={cn("mb-6 flex h-14 w-14 items-center justify-center rounded-2xl", pillar.color)}>
                  <pillar.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-slate-900">{pillar.title}</h3>
                <p className="mb-6 text-slate-600">{pillar.desc}</p>
                <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 transition-colors group-hover:text-indigo-700">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 text-center md:grid-cols-4">
            {[
              { label: 'Lives Impacted', value: '15,000+' },
              { label: 'Volunteers', value: '2,500+' },
              { label: 'Funds Raised', value: '£2.4M' },
              { label: 'Active Projects', value: '42' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="mb-2 text-4xl font-black text-indigo-400">{stat.value}</p>
                <p className="text-sm font-medium uppercase tracking-widest text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-full border-[16px] border-slate-50 shadow-2xl">
                <img
                  src="https://picsum.photos/seed/story/800/800"
                  alt="Success Story"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -right-4 top-1/4 rounded-2xl bg-indigo-600 p-6 text-white shadow-xl max-w-[200px]">
                <p className="text-sm italic">"ImpactBridge didn't just give me a job, they gave me a career and a community."</p>
                <p className="mt-4 text-xs font-bold uppercase">— Sarah J., Beneficiary</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Real Stories, Real Change.</h2>
              <p className="text-lg text-slate-600">
                Behind every number is a human story. Meet Sarah, who joined our 'Digital Leap' program in 2024. After six months of training and mentorship, she's now a junior developer at a top tech firm.
              </p>
              <p className="text-lg text-slate-600">
                Our mission is to create thousands more stories like Sarah's. But we can't do it alone.
              </p>
              <Link
                to="/impact"
                className="inline-flex items-center gap-2 font-bold text-indigo-600 hover:text-indigo-700"
              >
                Read more case studies <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-brand-green py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white">Ready to join the union?</h2>
              <p className="mt-2 text-emerald-100">Your support helps us preserve our heritage and support our people.</p>
            </div>
            <div className="flex gap-4">
              <Link
                to="/get-involved"
                className="rounded-full bg-white px-8 py-4 font-bold text-brand-green shadow-lg transition-all hover:bg-slate-50 active:scale-95"
              >
                Support Us
              </Link>
              <Link
                to="/get-involved"
                className="rounded-full border-2 border-white px-8 py-4 font-bold text-white transition-all hover:bg-white/10 active:scale-95"
              >
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
