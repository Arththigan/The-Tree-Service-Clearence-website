import React from 'react';
import { Award, BadgeCheck, Heart, Leaf, PhoneCall, ShieldCheck, Star, Trees, Users } from 'lucide-react';
import Link from '../components/Link';
import PageIntro from '../components/PageIntro';

const stats = [
  ['5,000+', 'Trees serviced'],
  ['15+', 'Years experience'],
  ['4.9/5', 'Customer rating'],
  ['24/7', 'Emergency response'],
];

const values = [
  [ShieldCheck, 'Safety First', 'Every job starts with a full site assessment. Our crews follow ISA best practices and use modern safety equipment on every project.'],
  [Leaf, 'Environmental Care', 'We work to preserve healthy trees wherever possible, and dispose of removed material responsibly through chipping and recycling.'],
  [Heart, 'Community Roots', 'We live and work in the same neighbourhoods we service. Your property and your safety matter to us personally.'],
  [Award, 'Certified Expertise', 'Our arborists hold ISA certifications and undergo ongoing training to stay current with the latest industry standards.'],
];

const team = [
  ['Head Arborist', 'ISA Certified — 15 years field experience'],
  ['Operations Manager', 'Equipment & crew safety specialist'],
  ['Client Relations', 'Estimates, scheduling & follow-up'],
  ['Field Crew Leads', 'Trained, insured, background-checked'],
];

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="About Us"
        title="Local Arborists Who Take Your Property Seriously"
        copy="Tree Services Clarence has been caring for residential and commercial properties for over 15 years. Certified, insured, and committed to doing the job right the first time."
      />

      {/* Stats bar */}
      <section className="border-y border-border/70 bg-foreground py-8 text-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map(([value, label]) => (
            <div key={label} className="text-center">
              <p className="font-heading text-2xl font-black text-accent sm:text-3xl">{value}</p>
              <p className="mt-1 text-xs font-medium text-background/60">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[.18em] text-primary">Our Story</span>
            <h2 className="mt-3 font-heading text-3xl font-black tracking-tight sm:text-4xl">
              Built on trust, one property at a time.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              What started as a two-man crew with a single truck has grown into a full-service arborist company with certified professionals, modern equipment, and a reputation built entirely on word of mouth.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              We've handled everything from routine pruning and stump removal to storm emergency response for commercial properties. Every job gets the same level of care — detailed assessment, clear communication, and a clean finish.
            </p>
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <BadgeCheck className="h-6 w-6 text-primary" />
              </span>
              <div>
                <p className="text-sm font-bold">ISA Certified & Fully Insured</p>
                <p className="text-xs text-muted-foreground">$2M liability coverage on all operations</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/8 blur-3xl" />
            <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
              <img
                src="/home-images/hero-tree-crew.jpg"
                alt="Tree Services Clarence crew at work"
                className="h-80 w-full object-cover lg:h-96"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 hidden rounded-2xl border border-border bg-background p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                </span>
                <div>
                  <p className="text-lg font-black">4.9 / 5</p>
                  <p className="text-xs text-muted-foreground">Customer rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/40 border-y border-border/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[.18em] text-primary">What drives us</span>
            <h2 className="mt-3 font-heading text-3xl font-black tracking-tight sm:text-4xl">Our values</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(([Icon, title, copy]) => (
              <article key={title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[.18em] text-primary">The team</span>
          <h2 className="mt-3 font-heading text-3xl font-black tracking-tight sm:text-4xl">People behind the work</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">Every person on our team is trained, insured, and committed to leaving your property better than we found it.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map(([role, detail]) => (
            <div key={role} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </span>
              <div>
                <p className="font-bold text-sm">{role}</p>
                <p className="mt-1 text-xs text-muted-foreground">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-center text-primary-foreground shadow-2xl shadow-primary/20 sm:px-12">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[45px] border-white/5" />
          <Trees className="mx-auto h-8 w-8 text-accent" />
          <h2 className="mx-auto mt-5 max-w-2xl font-heading text-3xl font-black sm:text-4xl">Ready to work with our team?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-primary-foreground/75">Get a free inspection and written recommendation from a certified arborist — no pressure, no obligation.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-background px-7 py-3.5 text-sm font-bold text-foreground shadow-lg">
              Book Free Inspection
            </Link>
            <a href="tel:+17165892600" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-sm font-bold text-white">
              <PhoneCall className="h-4 w-4" /> +1 716-589-2600
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
