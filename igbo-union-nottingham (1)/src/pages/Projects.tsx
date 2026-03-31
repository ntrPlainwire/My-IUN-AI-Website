import { motion } from 'motion/react';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Igbo Language School',
      category: 'Culture',
      desc: 'Teaching the next generation our mother tongue, ensuring the Igbo language thrives in Nottingham.',
      impact: '100+ children enrolled',
      img: 'p1',
    },
    {
      id: 2,
      title: 'New Yam Festival (Iwa Ji)',
      category: 'Heritage',
      desc: 'Our annual flagship event celebrating the harvest and showcasing Igbo culture to the wider community.',
      impact: '1,000+ attendees yearly',
      img: 'p2',
    },
    {
      id: 3,
      title: 'Welfare Support Fund',
      category: 'Social',
      desc: 'Providing emergency assistance and social support to members and families in the Nottingham area.',
      impact: '50+ families supported',
      img: 'p3',
    },
    {
      id: 4,
      title: 'Youth Mentorship',
      category: 'Education',
      desc: 'Connecting Igbo professionals with students to provide career guidance and cultural grounding.',
      impact: '30+ mentors active',
      img: 'p4',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Our Active Programs.</h1>
          <p className="mx-auto max-w-2xl text-xl text-slate-600">From cultural education to community welfare, we run diverse projects designed to support and uplift the Igbo community in Nottingham.</p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            {projects.map((p) => (
              <div key={p.id} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-2xl hover:ring-brand-green/20">
                <div className="grid lg:grid-cols-2">
                  <div className="aspect-square overflow-hidden md:aspect-video lg:aspect-square">
                    <img
                      src={`https://picsum.photos/seed/${p.img}/600/600`}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col p-8">
                    <div className="mb-2 inline-block self-start rounded-full bg-brand-green/10 px-3 py-1 text-xs font-bold text-brand-green uppercase tracking-wider">
                      {p.category}
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-slate-900">{p.title}</h3>
                    <p className="mb-6 text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                    <div className="mt-auto flex items-center gap-2 text-sm font-bold text-emerald-600">
                      <Users className="h-4 w-4" /> {p.impact}
                    </div>
                    <Link
                      to="/get-involved"
                      className="mt-6 inline-flex items-center gap-2 font-bold text-slate-900 hover:text-brand-green"
                    >
                      Support this project <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight">On the Horizon</h2>
            <p className="mt-4 text-slate-400">New initiatives launching in late 2026.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: 'Igbo Cultural Center', date: 'Sept 2026', loc: 'Nottingham' },
              { title: 'Women\'s Empowerment Network', date: 'Oct 2026', loc: 'Nottingham' },
              { title: 'Elders Care Program', date: 'Dec 2026', loc: 'Nottingham' },
            ].map((up) => (
              <div key={up.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 hover:ring-brand-green/50 transition-colors">
                <h4 className="mb-4 text-xl font-bold">{up.title}</h4>
                <div className="space-y-2 text-sm text-slate-400">
                  <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-brand-green" /> {up.date}</div>
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-green" /> {up.loc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
