import React, { useRef, useState } from 'react';
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
  const closeTimer = useRef(null);
  const currentPath = window.location.pathname;

  const handleMouseEnter = () => {
    clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 120);
  };

  return (
    <header className="sticky top-0 z-50 px-3 py-3 sm:px-5 sm:py-4">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-2xl border border-white/15 bg-[#606A2F]/95 px-3 shadow-[0_12px_40px_rgba(32,52,35,0.22)] backdrop-blur-xl sm:px-5">

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
                    currentPath === href ? 'bg-white text-[#46501f] shadow-sm' : 'text-white/85 hover:bg-white/10 hover:text-white'
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
                  currentPath === href ? 'bg-white text-[#46501f] shadow-sm' : 'text-white/85 hover:bg-white/10 hover:text-white'
                }`}
              >
                {label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA buttons */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link to="/contact" className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-white px-4 text-xs font-bold text-[#46501f] shadow-md transition hover:-translate-y-0.5">
            <Sparkles className="h-3.5 w-3.5 text-[#606A2F]" /> Free Estimate
          </Link>
          <a href="tel:8005558733" className="inline-flex h-9 items-center rounded-lg border border-white/40 bg-transparent px-3.5 text-xs font-bold text-white transition hover:bg-white/10">
            Call Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="rounded-lg border border-white/25 bg-white/10 p-2 text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="mx-auto mt-2 max-w-5xl space-y-1 rounded-2xl border border-white/15 bg-[#606A2F]/95 p-3 shadow-[0_16px_40px_rgba(32,52,35,0.22)] backdrop-blur-xl lg:hidden">
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
            <a href="tel:8005558733" className="flex h-10 items-center justify-center rounded-lg border border-white/40 text-xs font-bold text-white">
              Call Us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
