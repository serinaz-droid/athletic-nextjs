import Card, { CardBody } from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import { whyItems } from '@/lib/content';

export default function Why() {
  return (
    <section id="why" data-screen-label="Why MoodChanger" style={{ background: 'var(--bg)' }}>
      <div className="section-inner">
        <SectionHeading title="Why MoodChanger Athletic Performance Intelligence" size="why" gap={64} />

        <div
          className="auto-grid"
          style={{ '--min': '260px', '--gap': 'clamp(24px,3vw,44px)', marginBottom: 80 }}
        >
          {whyItems.map((item) => (
            <Card key={item.title} title={item.title} titleStyle={{ fontSize: 18, marginBottom: 10 }}>
              <CardBody style={{ fontSize: 15.5, lineHeight: 1.65 }}>{item.body}</CardBody>
            </Card>
          ))}
        </div>

        <p
          className="reveal"
          style={{
            margin: 0,
            textAlign: 'center',
            fontSize: 'clamp(1.6rem,3.4vw,2.8rem)',
            fontWeight: 700,
            letterSpacing: '-.025em',
            lineHeight: 1.2,
            color: 'var(--fg)',
          }}
        >
          From Data to <span style={{ color: 'var(--brand-ink)' }}>Decisions</span>, From Insights to{' '}
          <span style={{ color: 'var(--brand-ink)' }}>Performance</span>
        </p>
      </div>
    </section>
  );
}
