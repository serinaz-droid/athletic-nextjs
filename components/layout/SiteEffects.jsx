'use client';

import { useEffect, useRef } from 'react';

/**
 * Site-wide scroll behaviour, mounted once:
 *
 * 1. the reading-progress bar across the top of the page,
 * 2. the parallax drift applied to every `[data-plx]` backdrop image,
 * 3. the staggered reveal-on-scroll transition for every `.reveal` element.
 *
 * Elements added later (an opened accordion panel, a swapped carousel slide)
 * are picked up by a MutationObserver so they reveal like the rest.
 */
export default function SiteEffects() {
  const progressRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const bar = progressRef.current;
      const html = document.documentElement;
      if (bar) {
        const p = html.scrollTop / Math.max(1, html.scrollHeight - html.clientHeight);
        bar.style.width = `${p * 100}%`;
      }
      const vh = window.innerHeight;
      document.querySelectorAll('[data-plx]').forEach((img) => {
        const r = img.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const mid = r.top + r.height / 2 - vh / 2;
        img.style.transform = `translateY(${(mid * -0.07).toFixed(1)}px)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    let io = null;
    let mo = null;

    // Scoped to this effect run so a remount (React Strict Mode) re-observes
    // everything rather than skipping elements the previous observer claimed.
    const observed = new WeakSet();
    const staggers = new WeakMap();

    const observeReveals = () => {
      if (!io) return;
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
        if (observed.has(el)) return;
        observed.add(el);
        const siblings = el.parentElement
          ? Array.from(el.parentElement.children).filter((c) => c.classList?.contains('reveal'))
          : [el];
        staggers.set(el, Math.max(0, siblings.indexOf(el)));
        io.observe(el);
      });
    };

    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            el.style.transitionDelay = `${(staggers.get(el) || 0) * 90}ms`;
            el.classList.add('in');
            io.unobserve(el);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
      );
      observeReveals();

      mo = new MutationObserver(observeReveals);
      mo.observe(document.body, { childList: true, subtree: true });
    } else {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      io?.disconnect();
      mo?.disconnect();
    };
  }, []);

  return (
    <div className="scroll-progress">
      <div ref={progressRef} />
    </div>
  );
}
