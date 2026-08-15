'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/Icons';
import { comingSoon } from '@/lib/content';

export default function ComingSoon() {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= maxScroll - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;
    el.addEventListener('scroll', updateEdges, { passive: true });
    window.addEventListener('resize', updateEdges);
    const frame = requestAnimationFrame(updateEdges);
    return () => {
      el.removeEventListener('scroll', updateEdges);
      window.removeEventListener('resize', updateEdges);
      cancelAnimationFrame(frame);
    };
  }, [updateEdges]);

  // Scrolls by one full page of four cards.
  const scrollBy = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.querySelector('.cs-card');
    const gap = parseFloat(getComputedStyle(el).columnGap || '24') || 24;
    const step = first ? first.getBoundingClientRect().width + gap : el.clientWidth / 4;
    el.scrollBy({ left: direction * step * 4, behavior: 'smooth' });
  };

  return (
    <section id="coming-soon" data-screen-label="Coming Soon" style={{ background: 'var(--bg2)' }}>
      <div className="section-inner">
        <SectionHeading title="MoodChanger Coming Soon" gap={48} />

        <div className="cs-wrap" style={{ position: 'relative', padding: '0 clamp(0px,5vw,68px)' }}>
          {!atStart ? (
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous products"
              className="cs-nav is-prev"
            >
              <ChevronLeftIcon />
            </button>
          ) : null}
          {!atEnd ? (
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next products"
              className="cs-nav is-next"
            >
              <ChevronRightIcon />
            </button>
          ) : null}

          <div ref={trackRef} className="cs-track">
            {comingSoon.map((product) => (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener"
                className="reveal cs-card"
              >
                <div className="cs-card-media">
                  <img src={product.img} alt={product.name} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                  <h3 className="cs-card-title">{product.name}</h3>
                  <span className="cs-badge">Soon</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
