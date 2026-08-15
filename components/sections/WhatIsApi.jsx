'use client';

import { useState } from 'react';
import MediaFrame from '@/components/ui/MediaFrame';
import SectionHeading from '@/components/ui/SectionHeading';
import { ChevronDownIcon } from '@/components/ui/Icons';
import { apiGroups } from '@/lib/content';

export default function WhatIsApi() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="api"
      data-screen-label="What Is Athletic Performance Intelligence"
      style={{ background: 'var(--bg)' }}
    >
      <div className="section-inner">
        <SectionHeading title="What Is Athletic Performance Intelligence?" size="lg-tall">
          <p className="reveal lead" style={{ maxWidth: 900, marginBottom: 12, textWrap: 'pretty' }}>
            MoodChanger&apos;s core system architecture for sports performance optimization.
            <br />
            Designed to integrate multi-source athlete data and structure it into actionable performance
            intelligence.
          </p>
          <p className="reveal" style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: 'var(--dim)' }}>
            Sports science frameworks / Behavioral intelligence models / AI-driven data processing (FloBrain)
          </p>
        </SectionHeading>

        <div
          className="auto-grid"
          style={{ '--min': '340px', '--gap': 'clamp(32px,5vw,72px)', alignItems: 'start' }}
        >
          <MediaFrame
            src="/images/api-system.png"
            alt="Athletic Performance Intelligence system"
            className="sticky-media"
            imgStyle={{ maxHeight: '60vh' }}
          />

          <div>
            {apiGroups.map((group, i) => {
              const isOpen = open === i;
              return (
                <div key={group.title} className="reveal acc-item">
                  <button
                    type="button"
                    className="acc-toggle"
                    aria-expanded={isOpen}
                    onClick={() => setOpen((current) => (current === i ? -1 : i))}
                  >
                    <span className="acc-title">{group.title}</span>
                    <span
                      className="acc-chevron"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <ChevronDownIcon size={14} width={2.2} />
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="acc-panel">
                      {group.lead ? <p className="acc-lead">{group.lead}</p> : null}
                      {group.points.map((point, index) => (
                        <p
                          key={point}
                          className="acc-point"
                          style={{ animationDelay: `calc(${index} * .07s + .08s)` }}
                        >
                          {point}
                        </p>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
            <div style={{ borderTop: '1px solid var(--line2)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
