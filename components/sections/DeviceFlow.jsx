import Card, { CardBody } from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import { deviceFlow, wearables } from '@/lib/content';

export default function DeviceFlow() {
  return (
    <section id="device-flow" data-screen-label="Tier 2 Device Flow" style={{ background: 'var(--bg)' }}>
      <div className="section-inner">
        <SectionHeading title="From Device To Decision" gap={48} />

        <div className="reveal devices-row" style={{ marginBottom: 72 }}>
          {wearables.map((wearable) => (
            <img key={wearable.name} className="device-img" src={wearable.img} alt={wearable.name} />
          ))}
        </div>

        <div className="auto-grid" style={{ '--min': '250px', '--gap': 'clamp(24px,3vw,44px)' }}>
          {deviceFlow.map((step) => (
            <Card key={step.title} title={step.title} titleStyle={{ marginBottom: 10 }}>
              <CardBody style={{ fontSize: 15.5, lineHeight: 1.65 }}>{step.body}</CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
