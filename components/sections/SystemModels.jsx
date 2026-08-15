'use client';

import { useState } from 'react';
import Backdrop from '@/components/ui/Backdrop';
import SectionHeading from '@/components/ui/SectionHeading';
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/ui/Icons';
import { models } from '@/lib/content';

const SLIDE_COUNT = 3;

const keyPoints = [
  'Integration of mental, physical, and contextual data',
  'Work with or without wearable → Hardware Agnostic',
  'Automations of data collection, analysis, reporting',
  'Lower manual tracking workload and fragmented system',
  'Enables real-time decision-making, personalized athlete management, scalable team insights',
];

export default function SystemModels() {
  const [slide, setSlide] = useState(0);

  return (
    <section
      id="models"
      data-screen-label="Athletic Performance Intelligence System Models"
      className="backdrop on-dark"
      style={{ background: '#0f2532' }}
    >
      <Backdrop
        src="/images/system-models-background.jpg"
        filter="saturate(.85) brightness(.72)"
        veil="rgba(15,35,46,.55)"
      />
      <div className="section-inner is-tall">
        <SectionHeading
          title="System Models Driving Athletic Performance Intelligence Architecture"
          size="lg-tall"
          gap="clamp(56px,7vw,88px)"
          titleGap={26}
        >
          <p className="reveal lead">
            Athletic Performance Intelligence is our proprietary system architecture designed to integrate
            sports science frameworks with wearable and FloBrain data.
          </p>
        </SectionHeading>

        <div
          style={{
            maxWidth: 960,
            margin: '0 auto',
            minHeight: 540,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {slide === 0 ? (
            <div style={{ animation: 'fadeSlide .5s ease both', flex: 1 }}>
              <div className="models-head">
                <div style={{ padding: '0 0 14px' }}>Model</div>
                <div style={{ padding: '0 0 14px' }}>Purpose</div>
              </div>
              {models.map((model) => (
                <div key={model.name} className="models-row">
                  <div style={{ padding: '17px 0', fontSize: 16, fontWeight: 700, color: '#31D2C1' }}>
                    {model.name}
                  </div>
                  <div
                    style={{
                      padding: '17px 0',
                      fontSize: 15.5,
                      lineHeight: 1.55,
                      color: 'rgba(255,255,255,.78)',
                    }}
                  >
                    {model.purpose}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {slide === 1 ? (
            <div
              style={{
                animation: 'fadeSlide .5s ease both',
                flex: 1,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
                gap: 'clamp(28px,4vw,56px)',
                alignItems: 'center',
              }}
            >
              <div>
                <h3
                  style={{
                    margin: '0 0 16px',
                    fontSize: 'clamp(1.5rem,2.4vw,2rem)',
                    fontWeight: 700,
                    color: '#ffffff',
                  }}
                >
                  Frameworks Connection → Athletic Performance Intelligence
                </h3>
                <p
                  style={{
                    margin: '0 0 12px',
                    fontSize: 17,
                    lineHeight: 1.75,
                    color: 'rgba(255,255,255,.78)',
                  }}
                >
                  These frameworks form the foundation of our Athletic Performance Intelligence, enabling
                  structured decision-making based on integrated athlete data.
                </p>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,.78)' }}>
                  These frameworks directly shape Athletic Performance Intelligence logic, data pipelines, and
                  reporting systems to provide insights that mirror real-time context.
                </p>
              </div>
              <div style={{ aspectRatio: '4/3', borderRadius: 20, overflow: 'hidden' }}>
                <img
                  src="/images/frameworks-connection.jpg"
                  alt="Clinician reviewing brain scan data on a tablet"
                  style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
                />
              </div>
            </div>
          ) : null}

          {slide === 2 ? (
            <div
              style={{
                animation: 'fadeSlide .5s ease both',
                flex: 1,
                maxWidth: 760,
                margin: '0 auto',
                width: '100%',
              }}
            >
              <h3
                style={{
                  margin: '0 0 16px',
                  fontSize: 'clamp(1.5rem,2.4vw,2rem)',
                  fontWeight: 700,
                  color: '#31D2C1',
                }}
              >
                Why MoodChanger&apos;s Athletic Performance Intelligence Is Different?
              </h3>
              <p style={{ margin: '0 0 22px', fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,.78)' }}>
                Specialization in both: Athletic Performance Optimization, Sports Workflow Intelligence.
              </p>
              <p className="eyebrow-sm" style={{ marginBottom: 4 }}>
                Key Points
              </p>
              {keyPoints.map((point, i) => (
                <p
                  key={point}
                  style={{
                    margin: 0,
                    padding: i === keyPoints.length - 1 ? '15px 0 0' : '15px 0',
                    borderTop: '1px solid rgba(255,255,255,.16)',
                    fontSize: 16,
                    lineHeight: 1.55,
                    color: 'rgba(255,255,255,.85)',
                  }}
                >
                  {point}
                </p>
              ))}
            </div>
          ) : null}

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 22,
              marginTop: 52,
            }}
          >
            <button
              type="button"
              onClick={() => setSlide((s) => (s + SLIDE_COUNT - 1) % SLIDE_COUNT)}
              aria-label="Previous"
              className="slide-nav-btn is-prev"
            >
              <ArrowLeftIcon />
            </button>
            <div style={{ display: 'flex', gap: 9 }}>
              {Array.from({ length: SLIDE_COUNT }, (_, i) => (
                <span
                  key={i}
                  className="slide-dot"
                  style={{ background: slide === i ? '#31D2C1' : 'rgba(255,255,255,.3)' }}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setSlide((s) => (s + 1) % SLIDE_COUNT)}
              aria-label="Next"
              className="slide-nav-btn is-next"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
