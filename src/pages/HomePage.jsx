import React from 'react';
import { ArrowRight, BadgeCheck, CircleCheck, Clock, PhoneCall, ShieldCheck, Sparkles, Star, Trees } from 'lucide-react';
import Link from '../components/Link';
import ServiceCard from '../components/ServiceCard';
import services from '../data/services';

const trustPoints = ['ISA-certified arborist crews', '$2M fully insured operations', 'Residential & commercial care'];
const stats = [['5,000+', 'Trees serviced'], ['15+', 'Years experience'], ['4.9/5', 'Customer rating'], ['24/7', 'Emergency response']];
const homeServices = services.slice(0, 3);

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate border-b border-border/60">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,hsl(var(--accent)/.35),transparent_30%),radial-gradient(circle_at_90%_80%,hsl(var(--secondary)/.75),transparent_35%)]" />
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
          <div className="lg:col-span-7" data-reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background/80 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[.16em] text-primary shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" /><span className="relative h-2 w-2 rounded-full bg-primary" /></span>
              Local crews available today
            </div>
            <h1 className="mt-7 max-w-4xl font-heading text-5xl font-black leading-[1.02] tracking-[-.045em] text-foreground sm:text-6xl lg:text-7xl">
              Expert tree care for a <span className="relative whitespace-nowrap text-primary">safer property<span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-accent/60 -z-10" /></span>.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">From emergency removals to precision pruning, certified arborists protect your home, landscape, and peace of mind with dependable field expertise.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="group inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-xl shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-2xl">Book a Free Inspection <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
              <a href="tel:8005558733" className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background/80 px-7 py-3.5 text-sm font-bold shadow-sm backdrop-blur transition hover:border-primary/30 hover:bg-secondary"><PhoneCall className="h-4 w-4 text-primary" /> (800) 555-TREE</a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">{trustPoints.map((point) => <li key={point} className="flex items-center gap-2 text-xs font-semibold text-muted-foreground"><CircleCheck className="h-4 w-4 text-primary" />{point}</li>)}</ul>
          </div>

          <div className="relative lg:col-span-5" data-reveal data-delay="140">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-primary/10 blur-3xl" />
            <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-card shadow-2xl shadow-primary/15">
              <div className="relative h-[29rem]">
                <img src="/home-images/tree-service-hero-v2.png" alt="Professional arborist crew caring for a mature tree with a bucket truck" className="h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/5 to-transparent" />
                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-2 text-xs font-bold text-foreground shadow-lg backdrop-blur"><BadgeCheck className="h-4 w-4 text-primary" /> ISA Certified</span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-foreground/80 px-3 py-2 text-xs font-bold text-white backdrop-blur"><Clock className="h-4 w-4 text-accent" /> 24/7 Response</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white"><div className="mb-3 flex text-accent">{Array.from({ length: 5 }, (_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div><p className="font-heading text-2xl font-bold">Professional care. Clean finish.</p><p className="mt-1 text-sm text-white/75">Fully equipped crews for complex tree work.</p></div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-background p-4 shadow-xl sm:block"><div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10"><ShieldCheck className="h-6 w-6 text-primary" /></span><div><p className="text-lg font-black">100%</p><p className="text-xs text-muted-foreground">Safety focused</p></div></div></div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/70 bg-foreground py-7 text-background" data-reveal>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">{stats.map(([value, label]) => <div key={label} className="text-center"><p className="font-heading text-2xl font-black text-accent sm:text-3xl">{value}</p><p className="mt-1 text-xs font-medium text-background/60">{label}</p></div>)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end" data-reveal><div><span className="text-xs font-bold uppercase tracking-[.18em] text-primary">Built for every challenge</span><h2 className="mt-3 max-w-2xl font-heading text-3xl font-black tracking-tight sm:text-4xl">Tree services delivered with precision and care.</h2><p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">Specialized crews, modern equipment, and clear recommendations for every stage of your property.</p></div><Link to="/services" className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-primary">View all services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></div>
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">{homeServices.map((service) => <ServiceCard key={service.title} service={service} />)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8" data-reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-center text-primary-foreground shadow-2xl shadow-primary/20 sm:px-12"><div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[45px] border-white/5" /><Sparkles className="mx-auto h-8 w-8 text-accent" /><h2 className="mx-auto mt-5 max-w-2xl font-heading text-3xl font-black sm:text-4xl">Concerned about a tree on your property?</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-primary-foreground/75">Get a professional assessment and a clear plan before a small concern becomes an expensive emergency.</p><Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-background px-7 py-3.5 text-sm font-bold text-foreground shadow-lg">Schedule Free Inspection <ArrowRight className="h-4 w-4" /></Link></div>
      </section>
    </main>
  );
}
