import { motion } from 'motion/react';
import { BarChart3, PieChart, TrendingUp, CheckCircle2, Quote } from 'lucide-react';
import { cn } from '../lib/utils';

export function Impact() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Measuring What Matters.</h1>
            <p className="text-xl text-slate-600">We don't just run programs; we track transformation. See how your support is changing lives across the country.</p>
          </div>
        </div>
      </section>

      {/* Key Metrics Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Employment Rate', value: '82%', desc: 'of graduates find work within 6 months', icon: TrendingUp, color: 'text-emerald-600' },
              { label: 'Community Hubs', value: '12', desc: 'Active physical spaces for collaboration', icon: BarChart3, color: 'text-blue-600' },
              { label: 'Volunteer Hours', value: '45k+', desc: 'Dedicated to local growth this year', icon: PieChart, color: 'text-indigo-600' },
              { label: 'Sustainability', value: '100%', desc: 'Profits reinvested in social impact', icon: CheckCircle2, color: 'text-rose-600' },
            ].map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-md">
                <metric.icon className={cn("mb-4 h-8 w-8", metric.color)} />
                <p className="text-3xl font-black text-slate-900">{metric.value}</p>
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-500">{metric.label}</p>
                <p className="text-sm text-slate-400">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Case Studies</h2>
            <p className="mt-4 text-lg text-slate-600">Deep dives into the lives we've helped transform.</p>
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            {[
              {
                title: 'The Green Kitchen Initiative',
                location: 'Manchester',
                impact: 'Fed 2,500+ families while reducing food waste by 40%.',
                img: 'case1',
              },
              {
                title: 'Code Your Future',
                location: 'Birmingham',
                impact: 'Trained 150 refugees in full-stack development with 90% placement.',
                img: 'case2',
              },
            ].map((study) => (
              <div key={study.title} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-xl">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${study.img}/800/450`}
                    alt={study.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-2 text-xs font-bold uppercase tracking-widest text-indigo-600">{study.location}</div>
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">{study.title}</h3>
                  <p className="mb-6 text-slate-600">{study.impact}</p>
                  <button className="font-bold text-slate-900 hover:underline">Read Full Story</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { text: "ImpactBridge provided the support I needed when I felt most alone. Their mentorship changed my life.", author: "James L.", role: "Program Participant" },
              { text: "As a corporate partner, we've seen tangible results from our investment. The transparency is unmatched.", author: "Sarah W.", role: "Corporate Donor" },
              { text: "Volunteering here has been the most rewarding experience of my career. The community is incredible.", author: "Michael R.", role: "Lead Volunteer" },
            ].map((t, i) => (
              <div key={i} className="relative rounded-3xl bg-slate-50 p-8 pt-12">
                <Quote className="absolute left-8 top-6 h-8 w-8 text-indigo-200" />
                <p className="mb-6 text-lg italic text-slate-700">"{t.text}"</p>
                <div>
                  <p className="font-bold text-slate-900">{t.author}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
