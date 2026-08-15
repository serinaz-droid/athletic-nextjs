import Backdrop from '@/components/ui/Backdrop';
import Card, { CardBody } from '@/components/ui/Card';
import RuleList from '@/components/ui/RuleList';
import SectionHeading from '@/components/ui/SectionHeading';

const collected = [
  'Athlete-level data → Readiness, training participation',
  'Team-level data → Training load, coaching strategies',
  'Organizational data → Workflow processes, performance tracking methods, communication flow',
];

const cadences = ['Daily', 'Weekly', 'Monthly', 'Quarterly'];

const requirements = [
  'Download the FloBrain App',
  'Complete MoodChanger Athletic Performance Intelligence profiles depending on use: as coach, as athlete',
];

export default function Tier1Deliverables() {
  return (
    <section
      id="tier-1-deliverables"
      data-screen-label="Tier 1 Deliverables"
      className="backdrop on-dark"
      style={{ background: '#0f2532' }}
    >
      <Backdrop
        src="/images/tier-1-deliverables-background.jpg"
        filter="saturate(.85) brightness(.75)"
        veil="rgba(15,35,46,.48)"
      />
      <div className="section-inner">
        <SectionHeading eyebrow="Tier 1 - No Wearable" title="Tailored Data Collection Approach">
          <p className="reveal lead" style={{ color: 'rgba(255,255,255,.8)' }}>
            Process is fully customized to each organization. Designed based on Sport type, Team structure,
            Coaching methodology.
          </p>
        </SectionHeading>

        <div className="auto-grid" style={{ '--gap': 'clamp(28px,4vw,56px)' }}>
          <Card title="Data Collection Method">
            <p className="eyebrow-sm is-brand">What we collect?</p>
            <RuleList
              items={collected}
              border="bottom"
              itemStyle={{ padding: '12px 0' }}
              lastItemStyle={{ padding: '12px 0', marginBottom: 14 }}
            />
            <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: 'rgba(255,255,255,.75)' }}>
              Structured through custom-designed surveys and check-ins. Ensures consistent data input and
              high-quality data for analysis.
            </p>
          </Card>

          <Card title="Report analysis">
            <CardBody
              style={{ fontSize: 15.5, lineHeight: 1.65, marginBottom: 12, color: 'rgba(255,255,255,.85)' }}
            >
              Comprehensive reports are accessible through FloBrain App under MoodChanger Athletic Performance
              Intelligence athlete or coach dashboard.
            </CardBody>
            <CardBody
              style={{ fontSize: 15.5, lineHeight: 1.65, marginBottom: 16, color: 'rgba(255,255,255,.85)' }}
            >
              Reports are customizable based on the athlete/coach&apos;s preferences.
            </CardBody>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {cadences.map((cadence) => (
                <span key={cadence} className="pill">
                  {cadence}
                </span>
              ))}
            </div>
          </Card>

          <Card title="Tier Requirements" titleTone="brand">
            <RuleList items={requirements} border="bottom" omitLastBorder itemStyle={{ padding: '12px 0' }} />
          </Card>
        </div>
      </div>
    </section>
  );
}
