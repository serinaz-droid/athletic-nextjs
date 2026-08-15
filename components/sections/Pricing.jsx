import Backdrop from '@/components/ui/Backdrop';
import Card, { CardBody } from '@/components/ui/Card';
import CtaButton from '@/components/ui/CtaButton';
import SectionHeading from '@/components/ui/SectionHeading';
import { CheckIcon } from '@/components/ui/Icons';
import { CONSULT_HREF } from '@/lib/content';

const pricingPoints = [
  {
    title: 'Pricing Flexibility',
    body: "Every sports organization has different workflows, performance tracking systems, performance goals. → Flexible pricing tailored to your organization's needs.",
  },
  {
    title: 'Value-Based Investment',
    body: 'Clients are investing in Performance optimization, Injury risk reduction workflow efficiency, Long-term performance growth.',
  },
  {
    title: 'Scalable Engagement',
    body: 'Organizations can start with Tier 1 and scale to Tier 2 or Tier 3. Pricing grows with needs, complexity, value delivered.',
  },
  {
    title: "What's Included",
    body: 'MoodChanger platform and FloBrain intelligence engine · Consultancy services · Data structuring · Analysis and reporting · System design.',
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      data-screen-label="Consultancy Pricing"
      className="backdrop on-dark"
      style={{ background: '#112836' }}
    >
      <Backdrop
        src="/images/pricing-background.jpg"
        filter="saturate(.85) brightness(.72)"
        veil="rgba(17,40,54,.55)"
      />
      <div className="section-inner">
        <SectionHeading title="Custom Pricing Model">
          <p className="reveal lead" style={{ color: 'rgba(255,255,255,.74)' }}>
            Fully customized based on: Organization size, Level of service tier, Data complexity, Integration
            requirements.
          </p>
        </SectionHeading>

        <div
          className="auto-grid"
          style={{ '--min': '260px', '--gap': 'clamp(24px,3vw,44px)', marginBottom: 56 }}
        >
          {pricingPoints.map((point) => (
            <Card key={point.title} title={point.title} titleTone="brand" titleStyle={{ fontSize: 17, marginBottom: 10 }}>
              <CardBody style={{ fontSize: 15.5, lineHeight: 1.65, color: 'rgba(255,255,255,.74)' }}>
                {point.body}
              </CardBody>
            </Card>
          ))}
        </div>

        <div
          className="reveal"
          style={{
            textAlign: 'center',
            borderTop: '1px solid rgba(255,255,255,.16)',
            paddingTop: 48,
          }}
        >
          <h3
            style={{
              margin: '0 0 12px',
              fontSize: 'clamp(1.5rem,2.6vw,2.1rem)',
              fontWeight: 700,
              letterSpacing: '-.02em',
              color: '#ffffff',
            }}
          >
            Call to Action
          </h3>
          <p
            style={{
              margin: '0 auto 28px',
              fontSize: 16,
              lineHeight: 1.65,
              textWrap: 'balance',
              color: 'rgba(255,255,255,.74)',
              maxWidth: 640,
            }}
          >
            Initial consultation · Needs assessment (e.g., Athlete and Team Profile building) · Customized
            implementation plan
          </p>
          <CtaButton href={CONSULT_HREF} size="lg">
            Start with an initial consultation
            <CheckIcon size={16} />
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
