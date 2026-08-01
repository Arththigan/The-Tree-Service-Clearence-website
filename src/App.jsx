import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import FeaturesPage from './pages/FeaturesPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';

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
      {serviceSlug && SERVICE_SLUGS.includes(serviceSlug)
        ? <ServiceDetailPage slug={serviceSlug} />
        : <Page />
      }
      <Footer />
    </div>
  );
}
