import Card from '@/components/ui/Card';
import MediaFrame from '@/components/ui/MediaFrame';
import SectionHeading from '@/components/ui/SectionHeading';
import { caipoCaps } from '@/lib/content';

export default function Caipo() {
  return (
    <section id="caipo" data-screen-label="CAIPO" style={{ background: 'var(--bg)' }}>
      <div className="section-inner">
        <SectionHeading title="CAIPO, Your AI Companion">
          <p className="reveal lead">
            Our AI-powered wearable companion. Designed to continuously monitor athlete performance and act as
            a real-time intelligence extension of FloBrain.
          </p>
        </SectionHeading>

        <div className="caipo-grid" style={{ marginBottom: 72 }}>
          <MediaFrame
            src="/images/caipo-wearable.jpg"
            alt="CAIPO wearable companion"
            imgStyle={{ maxHeight: '56vh' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            <Card title="Role In The Ecosystem" titleStyle={{ fontSize: 20 }}>
              <ul className="card-list">
                <li>A data collection layer</li>
                <li>A real-time feedback system</li>
                <li>Directly connect to MoodChanger platform and FloBrain intelligence engine</li>
              </ul>
            </Card>
            <Card title="Hardware Flexibility" titleStyle={{ fontSize: 20 }}>
              <p style={{ margin: '0 0 8px', fontSize: 16, lineHeight: 1.7, color: 'var(--muted)' }}>
                CAIPO is designed for flexible integration across multiple wearable formats:
              </p>
              <ul className="card-list">
                <li>Sports vests</li>
                <li>Wristbands</li>
                <li>Chest straps</li>
                <li>Other wearable formats</li>
              </ul>
            </Card>
          </div>
        </div>

        <h3
          className="reveal"
          style={{
            margin: '0 0 36px',
            fontSize: 'clamp(1.6rem,2.8vw,2.4rem)',
            fontWeight: 700,
            letterSpacing: '-.02em',
            color: 'var(--fg)',
            textAlign: 'center',
          }}
        >
          Key Capabilities
        </h3>

        <div className="caipo-caps">
          {caipoCaps.map((cap) => (
            <div key={cap.title} className="reveal cap-card">
              <h4 className="cap-title">{cap.title}</h4>
              <p className="cap-body">{cap.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
