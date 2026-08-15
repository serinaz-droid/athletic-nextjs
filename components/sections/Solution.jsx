import Card from '@/components/ui/Card';
import KeyBenefits from '@/components/ui/KeyBenefits';
import RuleList from '@/components/ui/RuleList';
import SectionHeading from '@/components/ui/SectionHeading';
import { solutionBenefits, solutions } from '@/lib/content';

export default function Solution() {
  return (
    <section id="solution" data-screen-label="The Solution" style={{ background: 'var(--bg2)' }}>
      <div className="section-inner">
        <SectionHeading title="The Solution" size="xl">
          <p className="reveal lead">
            MoodChanger Athletic Performance Intelligence provides a centralized athletic performance
            intelligence system designed to integrate all human performance data, transform it into actionable
            insights, and support real-time decision-making.
          </p>
        </SectionHeading>

        <div className="auto-grid" style={{ '--min': '280px', marginBottom: 48 }}>
          {solutions.map((solution) => (
            <Card key={solution.title} title={solution.title}>
              <RuleList items={solution.points} />
            </Card>
          ))}
        </div>

        <KeyBenefits items={solutionBenefits} />
      </div>
    </section>
  );
}
