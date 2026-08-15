'use client';

import {
  CONTACT_EMAIL,
  SITE_DESCRIPTION,
  SITE_NAME,
  footerCompany,
  footerNav,
  footerProjects,
} from '@/lib/content';
import { SendIcon } from '@/components/ui/Icons';

const socials = [
  {
    label: 'FloLabs on YouTube',
    href: 'https://www.youtube.com/@flolabsinnovation',
    size: 22,
    path: 'M23 7.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.4 3.6 12 3.6 12 3.6s-4.4 0-7.7.3c-.5.1-1.5.1-2.4 1-.7.7-.9 2.3-.9 2.3S.8 9.1.8 11v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.8.2 7.6.3 7.6.3s4.4 0 7.7-.3c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8zM9.7 15.1V8.4l6.2 3.4-6.2 3.3z',
  },
  {
    label: 'FloLabs on LinkedIn',
    href: 'https://www.linkedin.com/company/flolabs-innovation/',
    size: 20,
    path: 'M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5zM.2 8h4.6v14.7H.2V8zm7.6 0h4.4v2h.1c.6-1.2 2.1-2.4 4.4-2.4 4.7 0 5.6 3.1 5.6 7.1v8H17.7v-7.1c0-1.7 0-3.9-2.4-3.9s-2.7 1.8-2.7 3.7v7.3H7.8V8z',
  },
  {
    label: 'FloLabs on Facebook',
    href: 'https://www.facebook.com/people/Flo-Labs-RD/61572285432918/',
    size: 22,
    path: 'M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z',
  },
  {
    label: 'FloLabs on Instagram',
    href: 'https://www.instagram.com/flolabsinnovations/',
    size: 21,
    path: 'M12 2.16c3.2 0 3.58 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.34 4.14.63c-.79.31-1.46.72-2.12 1.38C1.35 2.67.94 3.34.63 4.14.34 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.27 2.15.56 2.91.31.8.72 1.47 1.38 2.13.66.66 1.33 1.07 2.12 1.38.76.29 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.27 2.91-.56.8-.31 1.47-.72 2.13-1.38.66-.66 1.07-1.33 1.38-2.13.29-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.27-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.12A5.9 5.9 0 0 0 19.86.63c-.76-.29-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z',
  },
  {
    label: 'FloLabs on TikTok',
    href: 'https://www.tiktok.com/@flomadlabs',
    size: 19,
    path: 'M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
  },
  {
    label: 'FloLabs on Reddit',
    href: 'https://www.reddit.com/user/FloLabs_Innovations/',
    size: 22,
    path: 'M24 11.78a2.34 2.34 0 0 0-4-1.62 11.5 11.5 0 0 0-6.28-1.98l1.07-5.03 3.5.74a1.67 1.67 0 1 0 .17-.82l-3.9-.83a.42.42 0 0 0-.5.32l-1.19 5.6a11.55 11.55 0 0 0-6.37 1.98 2.34 2.34 0 1 0-2.58 3.83c-.02.19-.03.39-.03.58 0 2.96 3.45 5.37 7.7 5.37s7.7-2.4 7.7-5.37c0-.19-.01-.38-.03-.57A2.34 2.34 0 0 0 24 11.78zM6 13.44a1.67 1.67 0 1 1 3.34 0 1.67 1.67 0 0 1-3.34 0zm9.36 4.42c-1.14 1.15-3.32 1.23-3.96 1.23-.64 0-2.82-.08-3.96-1.23a.42.42 0 0 1 .6-.6c.72.72 2.26.98 3.36.98 1.1 0 2.64-.26 3.36-.98a.42.42 0 1 1 .6.6zm-.29-2.75a1.67 1.67 0 1 1 0-3.34 1.67 1.67 0 0 1 0 3.34z',
  },
];

export default function Footer() {
  const onNewsletterSubmit = (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    if (input && input.value) {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=Newsletter%20signup&body=${encodeURIComponent(
        input.value
      )}`;
    }
  };

  return (
    <footer data-screen-label="Footer" style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
      <div className="ftr-grid">
        <div className="ftr-brand">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, flexWrap: 'nowrap' }}>
            <img
              src="/images/flolabs-logo.svg"
              alt="FloLabs logo"
              style={{ width: 40, height: 40, display: 'block', flex: 'none' }}
            />
            <div style={{ minWidth: 0, paddingTop: 2, lineHeight: 1.3 }}>
              <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-.01em', color: 'var(--fg)' }}>
                {SITE_NAME}
              </span>{' '}
              <span style={{ fontSize: 13, color: 'var(--dim)', whiteSpace: 'nowrap' }}>
                | by FloLabs Innovations Group
              </span>
            </div>
          </div>

          <p
            style={{
              textWrap: 'balance',
              margin: 0,
              maxWidth: 440,
              fontSize: 14,
              lineHeight: 1.65,
              color: 'var(--muted)',
            }}
          >
            {SITE_DESCRIPTION}
          </p>

          <div>
            <p className="ftr-label" style={{ marginBottom: 8 }}>
              Newsletter
            </p>
            <p style={{ margin: '0 0 12px', fontSize: 14, color: 'var(--muted)' }}>
              Receive the newest FloLabs updates at:
            </p>
            <form onSubmit={onNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email..."
                aria-label="Email address"
                className="newsletter-input"
              />
              <button type="submit" aria-label="Send newsletter signup" className="newsletter-submit">
                <SendIcon />
              </button>
            </form>
          </div>

          <div>
            <p className="ftr-label" style={{ marginBottom: 10 }}>
              Social Media
            </p>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="ftr-social"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: social.size, height: social.size }}>
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <nav aria-label="Footer navigation" className="ftr-col">
          <p className="ftr-label">Navigation</p>
          <ul className="ftr-list">
            {footerNav.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="ftr-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="FloLabs projects" className="ftr-col">
          <p className="ftr-label">Projects</p>
          <ul className="ftr-list">
            {footerProjects.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="ftr-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="ftr-col">
          <p className="ftr-label">Company</p>
          <ul className="ftr-list">
            {footerCompany.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="ftr-link"
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div style={{ borderTop: '1px solid var(--line2)' }}>
        <p
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '20px clamp(20px,4vw,32px)',
            textAlign: 'center',
            fontSize: 14,
            color: 'var(--dim)',
          }}
        >
          Live Long and Prosper
        </p>
      </div>
    </footer>
  );
}
