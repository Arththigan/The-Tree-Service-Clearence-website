import React from 'react';
import { ArrowUpRight, Mail, MapPin, PhoneCall, ShieldCheck } from 'lucide-react';
import Link from './Link';

const navigation = [['Home', '/'], ['Services', '/services'], ['Features', '/features'], ['About Us', '/about'], ['Contact Us', '/contact']];
const serviceLinks = ['Emergency Tree Removal', 'Tree Trimming & Pruning', 'Arborist Assessment', 'Stump Grinding', 'Land Clearing'];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex rounded-xl bg-white p-3 shadow-lg" aria-label="Tree Services Clarence home"><img src="/brand/tree-services-clarence-logo.webp" alt="Tree Services Clarence" className="h-auto w-60 object-contain" /></Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-background/60">Certified arborist care, emergency tree removal, precision pruning, and complete property clearance for residential and commercial clients.</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs font-semibold text-background/70"><ShieldCheck className="h-4 w-4 text-accent" /> ISA Certified & Fully Insured</div>
          </div>
          <div className="lg:col-span-2"><h2 className="text-sm font-bold text-white">Navigation</h2><ul className="mt-5 space-y-3">{navigation.map(([label, href]) => <li key={href}><Link to={href} className="text-sm text-background/60 transition hover:text-accent">{label}</Link></li>)}</ul></div>
          <div className="lg:col-span-3"><h2 className="text-sm font-bold text-white">Tree Services</h2><ul className="mt-5 space-y-3">{serviceLinks.map((label) => <li key={label}><Link to="/services" className="inline-flex items-center gap-1 text-sm text-background/60 transition hover:text-accent">{label}<ArrowUpRight className="h-3 w-3" /></Link></li>)}</ul></div>
          <div className="lg:col-span-3"><h2 className="text-sm font-bold text-white">Contact</h2><ul className="mt-5 space-y-4 text-sm text-background/60"><li><a href="tel:8005558733" className="flex gap-3 hover:text-accent"><PhoneCall className="h-4 w-4 shrink-0 text-accent" />(800) 555-TREE</a></li><li><a href="mailto:service@pulsecx.com" className="flex gap-3 hover:text-accent"><Mail className="h-4 w-4 shrink-0 text-accent" />service@pulsecx.com</a></li><li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-accent" />Residential & Commercial Service Area</li></ul></div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-background/45 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Tree Services Clarence. All rights reserved.</p><div className="flex flex-wrap gap-5"><Link to="/privacy-policy" className="hover:text-background">Privacy Policy</Link><Link to="/terms-conditions" className="hover:text-background">Terms & Conditions</Link><a href="tel:8005558733" className="hover:text-background">Emergency Service</a></div></div>
      </div>
    </footer>
  );
}
