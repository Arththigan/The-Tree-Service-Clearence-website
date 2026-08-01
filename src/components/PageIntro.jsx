import React from 'react';

export default function PageIntro({ eyebrow, title, copy, children }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <span className="inline-flex rounded-full border border-accent bg-accent/30 px-3 py-1 text-xs font-semibold uppercase tracking-[.16em] text-primary">{eyebrow}</span>
      <h1 className="mx-auto mt-6 max-w-4xl font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{copy}</p>
      {children}
    </section>
  );
}
