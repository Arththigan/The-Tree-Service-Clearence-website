import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, BadgeCheck, CircleCheck, Clock, PhoneCall, ShieldCheck, Sparkles, Star, Trees } from 'lucide-react';
import Link from '../components/Link';
import services from '../data/services';

const trustPoints = ['ISA-certified arborist crews', '$2M fully insured operations', 'Residential & commercial care'];
const stats = [['5,000+', 'Trees serviced'], ['15+', 'Years experience'], ['4.9/5', 'Customer rating'], ['24/7', 'Emergency response']];
const homeServices = services.slice(0, 6);
const heroVideos = [
  { src: '/videos/crew-preparation.mp4', label: 'Professional crew preparation', detail: 'Every safe project starts with a clear plan.' },
  { src: '/videos/tree-trimming.mp4', label: 'Precision tree trimming', detail: 'Controlled cuts protect your trees and property.' },
  { src: '/videos/stump-grinding.mp4', label: 'Complete stump grinding', detail: 'Reclaim your landscape down to a clean finish.' },
  { src: '/videos/land-clearing.mp4', label: 'Commercial land clearing', detail: 'Heavy equipment for efficient site preparation.' },
];

export default function HomePage() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const videoRefs = useRef([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReduceMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeVideo) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeVideo, reduceMotion]);

  return (
    <main className="overflow-hidden">
      <section className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden border-b border-white/10 bg-foreground text-white">
        <div className="absolute inset-0 -z-20 bg-foreground">
          {reduceMotion ? (
            <img src="/home-images/tree-service-hero-v3-480.webp" srcSet="/home-images/tree-service-hero-v3-480.webp 480w, /home-images/tree-service-hero-v3-640.webp 640w" sizes="100vw" alt="Professional arborist crew caring for a mature tree with a bucket truck" width="480" height="1012" fetchPriority="high" className="h-full w-full object-cover" />
          ) : (
            heroVideos.map((video, index) => (
              <video
                key={video.src}
                ref={(node) => { videoRefs.current[index] = node; }}
                src={video.src}
                muted
                playsInline
                preload={index === 0 ? 'auto' : 'metadata'}
                poster="/home-images/tree-service-hero-v3-480.webp"
                aria-hidden={index !== activeVideo}
                onEnded={() => setActiveVideo((index + 1) % heroVideos.length)}
                className={`absolute inset-0 h-full w-full scale-[1.03] object-cover transition-all duration-1000 ease-out ${index === activeVideo ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.06]'}`}
              ><track kind="captions" src="/captions/ambient.vtt" srcLang="en" label="No dialogue" /></video>
            ))
          )}
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,18,12,.94)_0%,rgba(7,18,12,.78)_43%,rgba(7,18,12,.30)_72%,rgba(7,18,12,.48)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-foreground/85 to-transparent" />
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
          <div className="lg:col-span-7" data-reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[.16em] text-accent shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" /><span className="relative h-2 w-2 rounded-full bg-accent" /></span>
              Local crews available today
            </div>
            <h1 className="mt-7 max-w-4xl font-heading text-5xl font-black leading-[1.02] tracking-[-.045em] text-white sm:text-6xl lg:text-7xl">
              Expert tree care for a <span className="relative whitespace-nowrap text-accent">safer property<span className="absolute -bottom-1 left-0 -z-10 h-2 w-full rounded-full bg-primary/70" /></span>.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">From emergency removals to precision pruning, certified arborists protect your home, landscape, and peace of mind with dependable field expertise.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="group inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-xl shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-2xl">Book a Free Inspection <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
              <a href="tel:+17165892600" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-black/20 px-7 py-3.5 text-sm font-bold text-white shadow-sm backdrop-blur-md transition hover:bg-white/10"><PhoneCall className="h-4 w-4 text-accent" /> +1 716-589-2600</a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">{trustPoints.map((point) => <li key={point} className="flex items-center gap-2 text-xs font-semibold text-white/65"><CircleCheck className="h-4 w-4 text-accent" />{point}</li>)}</ul>
          </div>

          <div className="relative lg:col-span-5" data-reveal data-delay="140">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent/10 blur-3xl" />
            <div className="rounded-[2rem] border border-white/20 bg-black/25 p-5 shadow-2xl backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/15 pb-5">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.15em] text-accent"><BadgeCheck className="h-4 w-4" /> Live field operations</span>
                <span className="inline-flex items-center gap-2 text-xs font-bold text-white/70"><Clock className="h-4 w-4 text-accent" /> 24/7</span>
              </div>
              <div key={activeVideo} className="py-8 motion-safe:animate-[fadeIn_.6s_ease-out]">
                <p className="text-xs font-bold uppercase tracking-[.18em] text-white/50">Now showing · 0{activeVideo + 1}</p>
                <p className="mt-3 font-heading text-3xl font-black leading-tight text-white">{reduceMotion ? 'Professional tree care' : heroVideos[activeVideo].label}</p>
                <p className="mt-3 text-sm leading-6 text-white/65">{reduceMotion ? 'Fully equipped crews for complex tree work.' : heroVideos[activeVideo].detail}</p>
              </div>
              <div className="space-y-3">
                {heroVideos.map((video, index) => (
                  <button key={video.src} type="button" disabled={reduceMotion} onClick={() => setActiveVideo(index)} className="group flex w-full items-center gap-3 text-left" aria-label={`Show ${video.label}`} aria-current={index === activeVideo ? 'true' : undefined}>
                    <span className={`text-[10px] font-bold ${index === activeVideo ? 'text-accent' : 'text-white/60'}`}>0{index + 1}</span>
                    <span className="h-px flex-1 overflow-hidden bg-white/20"><span className={`block h-full bg-accent transition-all duration-700 ${index === activeVideo ? 'w-full' : 'w-0'}`} /></span>
                    <span className={`w-28 truncate text-xs font-semibold transition-colors ${index === activeVideo ? 'text-white' : 'text-white/65 group-hover:text-white/75'}`}>{video.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/20 bg-black/40 p-4 shadow-xl backdrop-blur-xl sm:block"><div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15"><ShieldCheck className="h-6 w-6 text-accent" /></span><div><p className="text-lg font-black text-white">100%</p><p className="text-xs text-white/55">Safety focused</p></div></div></div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8" data-reveal>
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-border/70 bg-background/95 shadow-2xl shadow-foreground/10 backdrop-blur-xl lg:grid-cols-4">
          {stats.map(([value, label], index) => <div key={label} className={`relative px-4 py-7 text-center sm:py-8 ${index % 2 ? 'border-l border-border/70' : ''} ${index > 1 ? 'border-t border-border/70 lg:border-t-0' : ''} ${index === 2 ? 'lg:border-l' : ''}`}><p className="font-heading text-3xl font-black tracking-tight text-primary sm:text-4xl">{value}</p><p className="mt-1 text-[11px] font-bold uppercase tracking-[.12em] text-foreground/80">{label}</p></div>)}
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
        <div className="absolute left-[-10rem] top-32 -z-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end" data-reveal>
            <div><span className="text-xs font-bold uppercase tracking-[.2em] text-primary">Built for every challenge</span><h2 className="mt-4 max-w-3xl font-heading text-4xl font-black leading-tight tracking-tight sm:text-5xl">One crew. Every stage of your property.</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">Specialized crews, modern equipment, and a clear plan—from the first inspection to the final clean-up.</p></div>
            <Link to="/services" className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-bold text-primary shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">Explore all services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
          </div>
          <div className="mt-14 grid auto-rows-[19rem] gap-5 md:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service, index) => {
              const ServiceIcon = service.icon;
              return <Link key={service.slug} to={`/services/${service.slug}`} data-reveal data-delay={`${(index % 3) * 80}`} className={`group relative isolate overflow-hidden rounded-[1.75rem] border border-white/10 bg-foreground shadow-xl ${index === 0 || index === 5 ? 'lg:col-span-2' : ''}`}>
                <img src={service.image} srcSet={`${service.image.replace('-800.webp', '-480.webp')} 480w, ${service.image} 800w, ${service.image.replace('-800.webp', '-1280.webp')} 1280w`} sizes={index === 0 || index === 5 ? '(min-width: 1024px) 62vw, (min-width: 768px) 46vw, 94vw' : '(min-width: 1024px) 30vw, (min-width: 768px) 46vw, 94vw'} alt={service.imageAlt} width="800" height="534" loading="lazy" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/30 to-black/5 transition group-hover:from-black/95" />
                <div className="flex h-full flex-col justify-between p-6 sm:p-7">
                  <div className="flex items-start justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-black/25 text-accent backdrop-blur"><ServiceIcon className="h-5 w-5" /></span><span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.14em] text-white/75 backdrop-blur">{service.tag}</span></div>
                  <div><h3 className="max-w-lg font-heading text-2xl font-black leading-tight text-white sm:text-3xl">{service.title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-white/65">{service.lead}</p><span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-accent">View service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
                </div>
              </Link>;
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-foreground py-28 text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_center,hsl(var(--primary))_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5" data-reveal><span className="text-xs font-bold uppercase tracking-[.2em] text-accent">Simple from start to finish</span><h2 className="mt-4 font-heading text-4xl font-black leading-tight sm:text-5xl">A safer property in three clear steps.</h2><p className="mt-5 max-w-lg text-sm leading-7 text-white/60">No guesswork or vague estimates. You get a professional assessment, a written plan, and a clean result.</p><Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-black text-foreground shadow-xl shadow-accent/10">Start with a free inspection <ArrowRight className="h-4 w-4" /></Link></div>
          <div className="space-y-4 lg:col-span-7">
            {[
              ['01', 'Inspect & recommend', 'We assess tree health, access, structures, and risk before recommending the right approach.'],
              ['02', 'Plan & protect', 'Your crew establishes safe work zones, protects the property, and coordinates equipment and timing.'],
              ['03', 'Complete & clean', 'Work is completed precisely, debris is removed, and your site is left ready to use.'],
            ].map(([number, title, detail], index) => <div key={number} data-reveal data-delay={`${index * 100}`} className="group grid gap-4 rounded-2xl border border-white/10 bg-white/[.045] p-6 backdrop-blur transition hover:border-accent/35 hover:bg-white/[.075] sm:grid-cols-[5rem_1fr] sm:items-center"><span className="font-heading text-3xl font-black text-accent/70">{number}</span><div><h3 className="font-heading text-xl font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{detail}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" data-reveal>
        <div className="relative isolate overflow-hidden rounded-[2rem] px-6 py-20 text-center text-white shadow-2xl sm:px-12">
          <img src="/service-images/emergency-tree-removal-v3-800.webp" srcSet="/service-images/emergency-tree-removal-v3-480.webp 480w, /service-images/emergency-tree-removal-v3-800.webp 800w, /service-images/emergency-tree-removal-v3-1280.webp 1280w" sizes="(min-width: 1280px) 1280px, 94vw" alt="Professional emergency tree service crew at work" width="1280" height="854" loading="lazy" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-foreground/85" />
          <Sparkles className="mx-auto h-8 w-8 text-accent" /><h2 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-black leading-tight sm:text-5xl">A small concern should not become an expensive emergency.</h2><p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/65">Get a professional assessment and a clear written plan for your property.</p><div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"><Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-black text-foreground shadow-lg">Schedule free inspection <ArrowRight className="h-4 w-4" /></Link><a href="tel:+17165892600" className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur"><PhoneCall className="h-4 w-4 text-accent" /> +1 716-589-2600</a></div>
        </div>
      </section>
    </main>
  );
}
