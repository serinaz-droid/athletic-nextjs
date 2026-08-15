import Backdrop from '@/components/ui/Backdrop';
import Callout from '@/components/ui/Callout';
import Card, { CardBody } from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';

const pathways = [
  {
    title: 'Without Wearables',
    sources:
      'Self-reported inputs → mood, stress, readiness · Training schedules · Coaching inputs · Behavioral tracking',
    values: 'Immediate implementation · No hardware dependency · Accessible for all organizations',
  },
  {
    title: 'With ANY Wearables',
    sources: 'Heart rate / HRV · Sleep quality · Recovery metrics · Movement tracking',
    values: 'Higher data accuracy · Deeper physiological insights · Enhanced predictive capabilities',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      data-screen-label="How Athletic Performance Intelligence Works"
      className="backdrop on-dark"
      style={{ background: '#0f2532' }}
    >
      <Backdrop
        src="/images/how-it-works-background.jpg"
        filter="saturate(.85) brightness(.7)"
        veil="rgba(15,35,46,.55)"
      />
      <div className="section-inner">
        <SectionHeading title="How Our Athletic Performance Intelligence Works">
          <p className="reveal lead" style={{ maxWidth: 900 }}>
            Athletic Performance Intelligence is designed to integrate with any wearables or function
            independently without a wearable technology, enabling scalable use across sports organizations
            regardless of their current technology adoption.
          </p>
        </SectionHeading>

        <p className="reveal eyebrow" style={{ marginBottom: 26, letterSpacing: '.12em', textAlign: 'center' }}>
          Two Data Pathways
        </p>

        <div className="auto-grid" style={{ '--gap': 'clamp(24px,3vw,48px)', marginBottom: 56 }}>
          {pathways.map((pathway) => (
            <Card key={pathway.title} title={pathway.title} titleStyle={{ fontSize: 22, marginBottom: 16 }}>
              <p className="eyebrow-sm">Data sources</p>
              <CardBody style={{ marginBottom: 18 }}>{pathway.sources}</CardBody>
              <p className="eyebrow-sm">Values</p>
              <CardBody>{pathway.values}</CardBody>
            </Card>
          ))}
        </div>

        <div className="auto-grid" style={{ '--gap': 'clamp(24px,3vw,48px)', marginBottom: 56 }}>
          <Card
            variant="hairline"
            title="Unified Data Processing"
            titleTone="brand"
            titleStyle={{ marginBottom: 10 }}
          >
            <CardBody>
              Regardless of source, all data flows into FloBrain, which standardizes inputs, processes them
              across multiple dimensions, and applies Athletic Performance Intelligence models: readiness,
              load, recovery, risk, performance, and context.
            </CardBody>
          </Card>
          <Card variant="hairline" title="Output Layer" titleTone="brand" titleStyle={{ marginBottom: 10 }}>
            <CardBody>
              FloBrain processes results into athlete and coach dashboards and automated reports, delivered as
              real-time insights, actionable recommendations, and continuous performance tracking.
            </CardBody>
          </Card>
        </div>

        <Callout title="Why This Matters?" titleStyle={{ marginBottom: 10 }}>
          Organizations can start without hardware and scale with wearable integrations as they see fit,
          ensuring flexibility, scalability, and cost-efficiency.
        </Callout>
      </div>
    </section>
  );
}
