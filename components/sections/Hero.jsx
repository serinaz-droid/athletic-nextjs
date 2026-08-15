import Backdrop from '@/components/ui/Backdrop';
import CtaButton from '@/components/ui/CtaButton';
import { CONSULT_HREF } from '@/lib/content';

export default function Hero() {
  return (
    <section
      id="hero"
      data-screen-label="Hero"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 63px)',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        background: '#112836',
      }}
    >
      <Backdrop
        src="/images/hero-background.png"
        veil="linear-gradient(to top, rgba(13,30,42,.82) 4%, rgba(13,30,42,.12) 55%, rgba(13,30,42,.18))"
      />
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(72px,10vw,120px) clamp(20px,4vw,32px) clamp(56px,7vw,88px)',
        }}
      >
        <h1
          style={{
            margin: '0 0 10px',
            maxWidth: '14ch',
            fontSize: 'clamp(3.2rem,7.2vw,6.4rem)',
            fontWeight: 700,
            lineHeight: 0.98,
            letterSpacing: '-.035em',
            color: '#ffffff',
          }}
        >
          Athletic Performance Intelligence
        </h1>
        <p
          style={{
            margin: '0 0 22px',
            fontSize: 'clamp(1.5rem,2.8vw,2.4rem)',
            fontWeight: 600,
            letterSpacing: '-.01em',
            color: '#31D2C1',
          }}
        >
          Hardware Agnostic
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 26,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 18,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,.78)',
              maxWidth: 460,
            }}
          >
            Delivered to you by <span style={{ fontWeight: 600, color: '#ffffff' }}>MoodChanger</span>.
            <br />
            Powered by <span style={{ fontWeight: 600, color: '#ffffff' }}>FloBrain</span>.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <CtaButton href={CONSULT_HREF}>Initial consultation</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
