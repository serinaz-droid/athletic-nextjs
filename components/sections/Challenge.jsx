import Callout from '@/components/ui/Callout';
import Card, { CardBody } from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import { challenges } from '@/lib/content';

export default function Challenge() {
  return (
    <section id="challenge" data-screen-label="The Challenge" style={{ background: 'var(--bg)' }}>
      <div className="section-inner">
        <SectionHeading title="The Challenge" size="xl">
          <p className="reveal lead">
            Modern sports organizations collect large volumes of data, but lack a unified system to translate
            it into clear, actionable insights. Performance insights remain fragmented across multiple tools
            and workflows.
          </p>
        </SectionHeading>

        <div className="auto-grid" style={{ '--min': '280px', marginBottom: 48 }}>
          {challenges.map((challenge) => (
            <Card key={challenge.title} title={challenge.title}>
              <CardBody style={{ fontSize: 15.5, lineHeight: 1.65 }}>{challenge.body}</CardBody>
            </Card>
          ))}
        </div>

        <Callout title="Why This Matters?">
          These challenges impact: Athlete performance consistency, Injury prevention, Coaching efficiency
        </Callout>
      </div>
    </section>
  );
}
