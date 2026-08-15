'use client';

import { useState } from 'react';
import { navLinks, servicesLinks, SITE_NAME } from '@/lib/content';
import { ChevronDownIcon, CloseIcon, MenuIcon, MoonIcon, SunIcon } from '@/components/ui/Icons';

const THEME_KEY = 'api-site-theme';

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // The theme lives on <html data-theme>, set before first paint by the
  // inline script in the root layout. Both icons are rendered and CSS shows
  // the right one, so the toggle never needs to mirror the theme in state.
  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* storage unavailable */
    }
  };

  const goTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Tapping an in-page link closes the mobile sheet; the Services parent
  // toggles the submenu instead of navigating.
  const onNavClick = (e) => {
    const anchor = e.target?.closest?.('a[href^="#"]');
    if (anchor && !anchor.hasAttribute('data-svc-toggle')) setMobileOpen(false);
  };

  const toggleServices = (e) => {
    if (window.matchMedia('(max-width:940px)').matches) {
      e.preventDefault();
      e.stopPropagation();
      setServicesOpen((open) => !open);
    }
  };

  return (
    <header data-screen-label="Header" className="site-header">
      <div className="site-header-inner">
        <a href="#hero" onClick={goTop} className="brand">
          <img src="/images/flolabs-logo.svg" alt="FloLabs logo" className="brand-logo" />
          <span className="brand-name">{SITE_NAME}</span>
        </a>

        <nav
          aria-label="Main navigation"
          className={`site-nav${mobileOpen ? ' open' : ''}`}
          onClick={onNavClick}
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}

          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a href="#tier-1" data-svc-toggle="" onClick={toggleServices} className="nav-link has-chevron">
              Services
              <ChevronDownIcon />
            </a>
            {servicesOpen ? (
              <div className="svc-menu">
                <div>
                  {servicesLinks.map((link) => (
                    <a key={link.href} href={link.href} className="svc-link">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <a href="#caipo" className="nav-link">
            CAIPO
          </a>
          <a href="#pricing" className="nav-link is-cta">
            Contact
          </a>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button type="button" onClick={toggleTheme} aria-label="Toggle theme" className="icon-btn">
            <span className="theme-icon when-dark">
              <SunIcon />
            </span>
            <span className="theme-icon when-light">
              <MoonIcon />
            </span>
          </button>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
