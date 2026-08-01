import React, { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

const ContactPage = lazy(() => import('./pages/ContactPage'));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsConditionsPage = lazy(() => import('./pages/TermsConditionsPage'));

const SERVICE_SLUGS = [
  'emergency-tree-services',
  'tree-trimming',
  'tree-removal',
  'stump-grinding',
  'land-clearing',
  'utility-line-clearance',
];

const pages = {
  '/': HomePage,
  '/services': ServicesPage,
  '/features': FeaturesPage,
  '/about': AboutPage,
  '/contact': ContactPage,
  '/privacy-policy': PrivacyPolicyPage,
  '/terms-conditions': TermsConditionsPage,
};

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const updatePath = () => setPath(window.location.pathname);
    window.addEventListener('popstate', updatePath);
    return () => window.removeEventListener('popstate', updatePath);
  }, []);

  useEffect(() => {
    let observer;
    let timeoutId;

    // rAF ensures we wait for React to flush the new page's DOM to the screen
    const frameId = requestAnimationFrame(() => {
      // Small extra delay for any async images / conditionally rendered content
      timeoutId = setTimeout(() => {
        const elements = document.querySelectorAll('main section, main article, main form, [data-reveal]');

        elements.forEach((element, index) => {
          // Reset so navigating to a new page re-animates every element
          element.classList.remove('scroll-reveal', 'is-visible');
          element.classList.add('scroll-reveal');
          if (!element.dataset.delay) {
            element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`);
          }
        });

        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            } else {
              // Remove so it re-animates when scrolled back into view
              entry.target.classList.remove('is-visible');
            }
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        elements.forEach((element) => observer.observe(element));
      }, 50);
    });

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timeoutId);
      observer?.disconnect();
    };
  }, [path]);

  const Page = pages[path] || HomePage;

  // Match /services/:slug dynamic routes
  const serviceSlugMatch = path.match(/^\/services\/(.+)$/);
  const serviceSlug = serviceSlugMatch ? serviceSlugMatch[1] : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Suspense fallback={<main className="min-h-[70vh] bg-background" aria-busy="true" aria-label="Loading page" />}>
        {serviceSlug && SERVICE_SLUGS.includes(serviceSlug)
          ? <ServiceDetailPage slug={serviceSlug} />
          : <Page />
        }
      </Suspense>
      <Footer />
    </div>
  );
}
