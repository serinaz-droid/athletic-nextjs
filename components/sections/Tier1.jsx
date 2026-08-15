import Card, { CardBody } from '@/components/ui/Card';
import KeyBenefits from '@/components/ui/KeyBenefits';
import RuleList from '@/components/ui/RuleList';
import SectionHeading from '@/components/ui/SectionHeading';
import { tier1Benefits } from '@/lib/content';

const analysed = [
  'Athlete schedules',
  'Training programs',
  'Coaching methods',
  'Performance tracking methods',
  'Organizational workflow',
];

export default function Tier1() {
  return (
    <section id="tier-1" data-screen-label="Tier 1" style={{ background: 'var(--bg2)' }}>
      <div className="section-inner is-tight">
        <SectionHeading
          title={
            <>
              We Collect And Analyze Your Workflow And Training Regimen For&nbsp;You
            </>
          }
          size="md"
        >
          <p className="reveal lead" style={{ maxWidth: 900 }}>
            For organizations without wearables, seeking to structured performance analysis based on
            MoodChanger&apos;s Athletic Performance Intelligence system. Focus on understanding your current
            workflow and structuring your existing data.
          </p>
        </SectionHeading>

        <div
          className="auto-grid"
          style={{ '--min': '320px', '--gap': 'clamp(28px,4vw,64px)', marginBottom: 56 }}
        >
          <Card title="Core Value">
            <CardBody>
              We collect, structure, and analyze: Training processes, Coaching workflows, Athlete management
              systems. Without any hardware and any technical setup.
            </CardBody>
          </Card>
          <Card title="What We Analyze">
            <RuleList items={analysed} capped />
          </Card>
        </div>

        <div
          className="auto-grid"
          style={{ '--min': '320px', '--gap': 'clamp(28px,4vw,64px)', alignItems: 'stretch' }}
        >
          <KeyBenefits items={tier1Benefits} style={{ gridColumn: '1/-1' }} />
          <Card
            variant="hairline"
            title="Wearable Integration Opportunity"
            titleTone="brand"
            style={{ gridColumn: '1/-1' }}
          >
            <CardBody>
              Also introduce a list of compatible third-party wearables. Organizations can explore future
              integration options.
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
