import React from 'react';
import { ArrowLeft, ArrowRight, CircleCheck, PhoneCall } from 'lucide-react';
import Link from '../components/Link';
import services from '../data/services';

export default function ServiceDetailPage({ slug }) {
  const service = services.find((s) => s.slug === slug);

  // Fallback — should never happen if routes are set up correctly
  if (!service) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="font-heading text-3xl font-black">Service not found</h1>
        <Link to="/services" className="text-sm font-semibold text-primary underline">Back to all services</Link>
      </main>
    );
  }

  const Icon = service.icon;

  // Sibling services for the "other services" strip
  const others = services.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <section className="relative isolate border-b border-border/60 bg-foreground text-background">
        <div className="absolute inset-0 -z-10">
          <img src={service.image} srcSet={`${service.image.replace('-800.webp', '-480.webp')} 480w, ${service.image} 800w, ${service.image.replace('-800.webp', '-1280.webp')} 1280w`} sizes="100vw" alt={service.imageAlt} width="1280" height="854" fetchPriority="high" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/70 to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-background/60 transition hover:text-background"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to all services
          </Link>
          <div className="mt-6 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 backdrop-blur">
              <Icon className="h-6 w-6 text-accent" />
            </span>
            <span className="rounded-full border border-accent/40 bg-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-[.14em] text-accent backdrop-blur">
              {service.tag}
            </span>
          </div>
          <h1 className="mt-5 max-w-3xl font-heading text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-7 text-background/70">{service.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-accent px-7 text-sm font-bold text-foreground shadow-lg transition hover:-translate-y-0.5"
            >
              Book This Service <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+17165892600"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/30 px-7 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <PhoneCall className="h-4 w-4" /> +1 716-589-2600
            </a>
          </div>
        </div>
      </section>

      {/* Features + Why */}
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Service highlights */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[.18em] text-primary">What's included</span>
          <h2 className="mt-3 font-heading text-2xl font-black tracking-tight sm:text-3xl">Service highlights</h2>
          <ul className="mt-6 space-y-3">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why it matters */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[.18em] text-primary">Why it matters</span>
          <h2 className="mt-3 font-heading text-2xl font-black tracking-tight sm:text-3xl">The right call for your property</h2>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">{service.why}</p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-md">
            <img src={service.image} srcSet={`${service.image.replace('-800.webp', '-480.webp')} 480w, ${service.image} 800w`} sizes="(min-width: 1024px) 48vw, 94vw" alt={service.imageAlt} width="800" height="534" loading="lazy" decoding="async" className="h-56 w-full object-cover" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border/60 bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[.18em] text-primary">How it works</span>
            <h2 className="mt-3 font-heading text-3xl font-black tracking-tight sm:text-4xl">Our process</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map(([step, detail], index) => (
              <div key={step} className="relative rounded-xl border border-border bg-card p-6 shadow-sm">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-heading text-lg font-black text-primary">
                  {index + 1}
                </span>
                <h3 className="font-heading text-base font-bold">{step}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[.18em] text-primary">Explore more</span>
            <h2 className="mt-2 font-heading text-2xl font-black tracking-tight sm:text-3xl">Other services</h2>
          </div>
          <Link to="/services" className="hidden items-center gap-1 text-sm font-bold text-primary sm:inline-flex">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((s) => {
            const OtherIcon = s.icon;
            return (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <OtherIcon className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <p className="font-heading text-sm font-bold leading-snug">{s.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{s.lead}</p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  Learn more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-center text-primary-foreground shadow-2xl shadow-primary/20 sm:px-12">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[45px] border-white/5" />
          <Icon className="mx-auto h-8 w-8 text-accent" />
          <h2 className="mx-auto mt-5 max-w-2xl font-heading text-3xl font-black sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-primary-foreground/75">
            Book a free inspection and get a clear written recommendation from our certified arborist team.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-background px-7 py-3.5 text-sm font-bold text-foreground shadow-lg"
            >
              Book Free Inspection <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+17165892600"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-sm font-bold text-white"
            >
              <PhoneCall className="h-4 w-4" /> +1 716-589-2600
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
