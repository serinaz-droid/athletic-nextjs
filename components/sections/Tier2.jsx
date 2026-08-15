import Backdrop from '@/components/ui/Backdrop';
import Card, { CardBody } from '@/components/ui/Card';
import KeyBenefits from '@/components/ui/KeyBenefits';
import SectionHeading from '@/components/ui/SectionHeading';
import { tier2Benefits } from '@/lib/content';

export default function Tier2() {
  return (
    <section
      id="tier-2"
      data-screen-label="Tier 2"
      className="backdrop on-dark"
      style={{ background: '#0f2532' }}
    >
      <Backdrop
        src="/images/tier-2-background.jpg"
        filter="saturate(.85) brightness(.72)"
        veil="rgba(15,35,46,.5)"
      />
      <div className="section-inner">
        <SectionHeading
          eyebrow="Tier 2 - With Wearable"
          title={<>We Analyze And Interpret Your Wearable Data For&nbsp;You</>}
          size="md"
        >
          <p className="reveal lead" style={{ maxWidth: 900, color: 'rgba(255,255,255,.8)' }}>
            For organizations that want deeper performance insights and use or plan to utilize wearable
            technologies. Focus on advanced data analysis and interpretation of multi-dimensional athlete data
            through MoodChanger Athletic Performance Intelligence system.
          </p>
        </SectionHeading>

        <div className="auto-grid" style={{ '--gap': 'clamp(24px,3vw,48px)' }}>
          <Card title="Core Value">
            <CardBody>
              Analysis, interpretation, and insight generation. Transform raw + structured data → performance
              intelligence.
            </CardBody>
          </Card>
          <Card title="Wearable Data Integration">
            <CardBody>
              Integrates data such as heart rate/HRV, sleep patterns, recovery, physical load. Combined with
              behavioral and training data.
            </CardBody>
          </Card>
          <Card title="Advanced Insights Delivered">
            <CardBody style={{ lineHeight: 1.65, marginBottom: 8 }}>
              <span style={{ fontWeight: 600, color: '#ffffff' }}>Athlete-level insights:</span> Readiness
              status, Recovery trends, Risk indicators
            </CardBody>
            <CardBody style={{ lineHeight: 1.65 }}>
              <span style={{ fontWeight: 600, color: '#ffffff' }}>Team-level insights:</span> Training
              effectiveness, Load management optimization
            </CardBody>
          </Card>

          <KeyBenefits items={tier2Benefits} style={{ gridColumn: '1/-1' }} />
        </div>
      </div>
    </section>
  );
}
