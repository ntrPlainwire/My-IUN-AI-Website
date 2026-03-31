import { Target, Eye, Heart, ShieldCheck, Users } from 'lucide-react';

export function About() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Promoting Unity, <br />Preserving Heritage.</h1>
            <p className="text-xl text-slate-600">Igbo Union Nottingham is a vibrant community organization dedicated to the welfare of Igbo people and the promotion of our rich cultural heritage in the heart of Nottingham.</p>
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-brand-green">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-slate-600">To foster unity, provide social support, and promote the cultural identity of the Igbo community in Nottingham and its environs.</p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-slate-900">Our Vision</h3>
              <p className="text-slate-600">A thriving, integrated, and culturally proud Igbo community that contributes positively to the socio-economic fabric of Nottingham.</p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-brand-red">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-slate-900">Our Motto</h3>
              <p className="text-slate-600">"Otu Obi na ịhụnanya" — Unity and Love. We believe in the power of togetherness and mutual respect.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">The Story Behind the Bridge</h2>
              <div className="space-y-4 text-lg text-slate-600">
                <p>ImpactBridge started in a small community center in 2020. Our founder, Marcus Chen, saw firsthand how brilliant minds were being held back by a lack of basic resources and networks.</p>
                <p>"I realized that talent is distributed equally, but opportunity is not. We didn't need more charity; we needed a bridge."</p>
                <p>What started as a local mentoring group has grown into a nationwide CIC, impacting thousands of lives through structured programs and community-led initiatives.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://picsum.photos/seed/founder/800/1000"
                  alt="Founder Marcus Chen"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900">Meet the Team</h2>
            <p className="text-lg text-slate-600">The passionate individuals working behind the scenes.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Marcus Chen', role: 'Founder & CEO', img: 'team1' },
              { name: 'Sarah Jenkins', role: 'Head of Impact', img: 'team2' },
              { name: 'David Okafor', role: 'Community Lead', img: 'team3' },
              { name: 'Elena Rodriguez', role: 'Operations Director', img: 'team4' },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="mb-4 aspect-square overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src={`https://picsum.photos/seed/${member.img}/400/400`}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
                <p className="text-sm text-slate-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Radical Transparency</h2>
              <p className="mb-8 text-lg text-slate-400">As a CIC, we are legally committed to our social mission. 100% of our profits are reinvested back into the community. We publish annual impact reports and financial audits for full accountability.</p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-indigo-400" />
                  <span>Asset Locked (Profits stay in the community)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-indigo-400" />
                  <span>Community Interest Test compliant</span>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
              <h3 className="mb-6 text-xl font-bold">Download Reports</h3>
              <ul className="space-y-4">
                {[2025, 2024, 2023].map((year) => (
                  <li key={year} className="flex items-center justify-between rounded-xl bg-white/5 p-4 transition-colors hover:bg-white/10">
                    <span className="font-medium">Impact Report {year}</span>
                    <button className="text-sm font-bold text-indigo-400 hover:underline">Download PDF</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
