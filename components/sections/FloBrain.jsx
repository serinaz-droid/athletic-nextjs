import Backdrop from '@/components/ui/Backdrop';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';

const dataStreams = [
  'Cognitive signals → focus, mood, mental state',
  'Behavioral signals → habits, routines, consistency',
  'Physiological signals → sleep, recovery, stress',
];

const howItWorks = [
  { title: 'Data collection', body: 'Raw data captured from athletes' },
  { title: 'Data structuring', body: 'Raw data → meaningful patterns' },
  { title: 'Intelligence generation', body: 'Patterns → decisions' },
  { title: 'Insight delivery', body: 'Decisions → performance outcomes' },
];

export default function FloBrain() {
  return (
    <section
      id="flobrain"
      data-screen-label="FloBrain"
      className="backdrop on-dark"
      style={{ background: '#0f2532' }}
    >
      <Backdrop
        src="/images/flobrain-background.jpg"
        filter="saturate(.8) brightness(.6)"
        veil="linear-gradient(rgba(10,26,37,.72),rgba(10,26,37,.72))"
      />
      <div className="section-inner">
        <SectionHeading title="What Is FloBrain?">
          <p className="reveal lead" style={{ color: 'rgba(255,255,255,.82)' }}>
            A human intelligence engine designed to:
          </p>
        </SectionHeading>

        <div className="reveal" style={{ maxWidth: 760, margin: '0 auto 64px' }}>
          <p className="statement">Process multi-dimensional human data</p>
          <p className="statement">Generate real-time, actionable insights</p>
          <p className="statement is-last">Acts as the core intelligence layer behind MoodChanger</p>
        </div>

        <div className="auto-grid" style={{ '--gap': 'clamp(24px,3vw,40px)', marginBottom: 64 }}>
          <Card title="What Kind of Data?" titleStyle={{ fontSize: 19, marginBottom: 14 }}>
            <p style={{ margin: '0 0 12px', fontSize: 15, color: 'rgba(255,255,255,.7)' }}>
              Integrates multiple data streams:
            </p>
            {dataStreams.map((text, i) => (
              <div
                key={text}
                style={{ display: 'flex', gap: 12, margin: i < dataStreams.length - 1 ? '0 0 10px' : 0 }}
              >
                <span
                  style={{
                    flex: 'none',
                    width: 16,
                    fontSize: 16,
                    fontWeight: 700,
                    color: '#31D2C1',
                    lineHeight: 1.6,
                  }}
                >
                  {i + 1}
                </span>
                <span style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,.85)' }}>{text}</span>
              </div>
            ))}
          </Card>

          <Card title="How It Works?" titleStyle={{ fontSize: 19, marginBottom: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {howItWorks.map((step, i) => (
                <div key={step.title} style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}>
                  <span style={{ flex: 'none', fontWeight: 800, fontSize: 18, color: '#31D2C1', width: 20 }}>
                    {i + 1}
                  </span>
                  <div>
                    <p style={{ margin: 0, fontSize: 16, fontWeight: 600, color: '#ffffff' }}>{step.title}</p>
                    <p
                      style={{
                        margin: '2px 0 0',
                        fontSize: 14.5,
                        lineHeight: 1.5,
                        color: 'rgba(255,255,255,.7)',
                      }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Why for Sports?" titleStyle={{ fontSize: 19, marginBottom: 14 }}>
            <p style={{ margin: '0 0 10px', fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,.85)' }}>
              Traditional systems focus on isolated metrics, such as physical load. FloBrain connects:
            </p>
            <p style={{ margin: '0 0 14px', fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,.85)' }}>
              Physiological + Mental + Environmental signaling combined into a unified data model.
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 'clamp(1.1rem,1.7vw,1.35rem)',
                fontWeight: 700,
                lineHeight: 1.3,
                color: '#31D2C1',
              }}
            >
              = Integrated Performance Readiness Insights
            </p>
          </Card>
        </div>

        <div className="reveal data-stream-grid">
          <p>Unified Athlete Profile Building</p>
          <p>Smarter and clearer coaching decisions</p>
          <p>Supplementary Approach for Optimizing Sports Performance</p>
        </div>
      </div>
    </section>
  );
}
