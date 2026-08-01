import React from 'react';
import PageIntro from '../components/PageIntro';
import { features } from '../data/features';

export default function FeaturesPage() {
  return <main><PageIntro eyebrow="Capabilities" title="Everything Needed for Safer Tree Care" copy="A complete field-service workflow built around safety, responsiveness, and clear communication." /><section className="mx-auto grid max-w-7xl gap-6 px-4 pb-20 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">{features.map(([Icon, title, copy]) => <article key={title} className="rounded-xl border bg-card/70 p-7 shadow-sm"><Icon className="h-7 w-7 text-primary" /><h2 className="mt-4 font-heading text-xl font-bold">{title}</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p></article>)}</section></main>;
}
