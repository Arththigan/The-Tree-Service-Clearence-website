import React from 'react';
import { ArrowRight, CircleCheck } from 'lucide-react';
import Link from './Link';

export default function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card/60 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden bg-muted">
        <img src={service.image} alt={service.imageAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute right-3 top-3 rounded-full border border-border bg-background/90 px-3 py-1 text-[11px] font-semibold backdrop-blur">{service.tag}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span><h3 className="font-heading text-lg font-bold leading-snug">{service.title}</h3></div>
        <p className="mt-3 text-xs font-semibold text-primary">{service.lead}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
        <div className="mt-5 border-t border-border pt-4"><p className="mb-2 text-xs font-bold uppercase tracking-wider">Service highlights:</p><ul className="space-y-2">{service.features.map((feature) => <li key={feature} className="flex gap-2 text-xs text-muted-foreground"><CircleCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />{feature}</li>)}</ul></div>
        <Link to={`/services/${service.slug}`} className="mt-6 flex h-10 items-center justify-center gap-1.5 rounded-md border border-border bg-background text-xs font-medium transition-colors hover:bg-primary hover:text-primary-foreground">Learn More <ArrowRight className="h-3.5 w-3.5" /></Link>
      </div>
    </article>
  );
}
