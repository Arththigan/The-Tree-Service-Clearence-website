import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, Sparkles, X } from 'lucide-react';
import Link from './Link';

const serviceDropdown = [
  ['Land Clearing', '/services/land-clearing'],
  ['Stump Grinding', '/services/stump-grinding'],
  ['Tree Removal', '/services/tree-removal'],
  ['Tree Trimming', '/services/tree-trimming'],
  ['Emergency Tree Services', '/services/emergency-tree-services'],
  ['Utility Line Clearance', '/services/utility-line-clearance'],
];

const links = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Features', '/features'],
  ['About Us', '/about'],
  ['Contact Us', '/contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const closeTimer = useRef(null);
  const currentPath = window.location.pathname;
  const isHome = currentPath === '/';
  const compact = !isHome || pastHero;

  useEffect(() => {
    const updateNavbar = () => setPastHero(window.scrollY > Math.max(120, window.innerHeight - 160));
    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });
    window.addEventListener('resize', updateNavbar);
    return () => {
      window.removeEventListener('scroll', updateNavbar);
      window.removeEventListener('resize', updateNavbar);
    };
  }, [currentPath]);

  const handleMouseEnter = () => {
    clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 120);
  };

  return (
    <header className={`${isHome ? 'fixed' : 'sticky'} left-0 right-0 top-0 z-50 transition-all duration-500 ${compact ? 'border-b border-border/70 bg-background/90 px-0 py-0 shadow-sm backdrop-blur-xl' : 'bg-transparent px-3 py-3 sm:px-5 sm:py-4'}`}>
      <div className={`mx-auto flex items-center justify-between px-3 transition-all duration-500 sm:px-5 ${compact ? 'h-16 max-w-7xl rounded-none border-transparent bg-transparent shadow-none' : 'h-14 max-w-5xl rounded-2xl border border-white/15 bg-[#606A2F]/80 shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl'}`}>

        {/* Logo */}
        <Link to="/" className="flex shrink-0 rounded-lg bg-white px-2 py-0.5" aria-label="Tree Services Clarence home">
          <img
            src="/brand/tree-services-clarence-logo.webp"
            alt="Tree Services Clarence"
            className="h-10 w-auto max-w-[132px] object-contain sm:max-w-[150px]"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map(([label, href]) =>
            label === 'Services' ? (
              <div
                key={href}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Services trigger */}
                <Link
                  to={href}
                  className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[13px] font-semibold transition-all ${
                    currentPath === href ? 'bg-[#606A2F] text-white shadow-sm' : compact ? 'text-foreground/70 hover:bg-secondary hover:text-primary' : 'text-white/85 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </Link>

                {/* Dropdown panel */}
                {dropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-56 overflow-hidden rounded-xl border border-white/15 bg-white shadow-2xl">
                    {serviceDropdown.map(([name, to]) => (
                      <Link
                        key={name}
                        to={to}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-3 text-sm font-medium text-[#2d3318] transition-colors hover:bg-[#f0f2e8] hover:text-[#46501f]"
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={href}
                to={href}
                className={`rounded-lg px-3 py-2 text-[13px] font-semibold transition-all ${
                  currentPath === href ? 'bg-[#606A2F] text-white shadow-sm' : compact ? 'text-foreground/70 hover:bg-secondary hover:text-primary' : 'text-white/85 hover:bg-white/10 hover:text-white'
                }`}
              >
                {label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA buttons */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link to="/contact" className={`inline-flex h-9 items-center gap-1.5 rounded-lg px-4 text-xs font-bold shadow-md transition hover:-translate-y-0.5 ${compact ? 'bg-[#606A2F] text-white' : 'bg-white text-[#46501f]'}`}>
            <Sparkles className="h-3.5 w-3.5 text-[#606A2F]" /> Free Estimate
          </Link>
          <a href="tel:+17165892600" className={`inline-flex h-9 items-center rounded-lg border bg-transparent px-3.5 text-xs font-bold transition ${compact ? 'border-border text-foreground hover:bg-secondary' : 'border-white/40 text-white hover:bg-white/10'}`}>
            Call Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`rounded-lg border p-2 lg:hidden ${compact ? 'border-border bg-secondary text-primary' : 'border-white/25 bg-white/10 text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className={`mx-auto max-w-5xl space-y-1 border border-white/15 bg-[#606A2F]/95 p-3 shadow-[0_16px_40px_rgba(32,52,35,0.22)] backdrop-blur-xl lg:hidden ${compact ? 'rounded-b-2xl border-x-0 border-t-0' : 'mt-2 rounded-2xl'}`}>
          {links.map(([label, href]) =>
            label === 'Services' ? (
              <div key={href}>
                <Link
                  to={href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-semibold ${
                    currentPath === href ? 'bg-white text-[#46501f]' : 'text-white/85 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
                {/* Service sub-items indented */}
                <div className="ml-3 mt-1 space-y-0.5 border-l border-white/20 pl-3">
                  {serviceDropdown.map(([name, to]) => (
                    <Link
                      key={name}
                      to={to}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-2 py-2 text-xs font-medium text-white/70 hover:bg-white/10 hover:text-white"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={href}
                to={href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-sm font-semibold ${
                  currentPath === href ? 'bg-white text-[#46501f]' : 'text-white/85 hover:bg-white/10 hover:text-white'
                }`}
              >
                {label}
              </Link>
            )
          )}
          <div className="grid grid-cols-2 gap-2 pt-2">
            <Link to="/contact" onClick={() => setOpen(false)} className="flex h-10 items-center justify-center rounded-lg bg-white text-xs font-bold text-[#46501f]">
              Free Estimate
            </Link>
            <a href="tel:+17165892600" className="flex h-10 items-center justify-center rounded-lg border border-white/40 text-xs font-bold text-white">
              Call Us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
