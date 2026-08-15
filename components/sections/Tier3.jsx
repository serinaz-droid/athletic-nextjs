import Backdrop from '@/components/ui/Backdrop';
import Card, { CardBody } from '@/components/ui/Card';
import KeyBenefits from '@/components/ui/KeyBenefits';
import RuleList from '@/components/ui/RuleList';
import SectionHeading from '@/components/ui/SectionHeading';
import { tier3Benefits } from '@/lib/content';

const customized = [
  'Data architecture',
  'Athletic Performance Intelligence structure',
  'Dashboard and reporting systems',
  'Workflow automation',
  'Integration with existing tools',
];

export default function Tier3() {
  return (
    <section
      id="tier-3"
      data-screen-label="Tier 3"
      className="backdrop on-dark"
      style={{ background: '#0f2532' }}
    >
      <Backdrop
        src="/images/tier-3-background.jpg"
        filter="saturate(.85) brightness(.72)"
        veil="rgba(15,35,46,.5)"
      />
      <div className="section-inner">
        <SectionHeading
          eyebrow="Tier 3 - System Design"
          title={<>We Build The System With You That Fits Your&nbsp;Needs</>}
          size="md"
        >
          <p className="reveal lead" style={{ maxWidth: 900, color: 'rgba(255,255,255,.8)' }}>
            For organizations that require fully customized solutions and want to integrate performance
            intelligence into their entire ecosystem. Focus on system design, full integration, long-term
            optimization.
          </p>
        </SectionHeading>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(24px,4vw,48px)',
            alignItems: 'stretch',
          }}
        >
          <Card title="Core Value">
            <CardBody>
              Co-develop a tailored performance intelligence system. Fully aligned with workflows,
              infrastructure, and performance philosophy.
            </CardBody>
          </Card>

          <Card title="What We Customize" titleStyle={{ marginBottom: 8 }}>
            <RuleList
              items={customized}
              border="bottom"
              omitLastBorder
              itemStyle={{ lineHeight: 1.55 }}
              lastItemStyle={{ padding: '11px 0 0', lineHeight: 1.55 }}
            />
          </Card>

          <KeyBenefits items={tier3Benefits} style={{ gridColumn: '1/-1' }} />
        </div>
      </div>
    </section>
  );
}
