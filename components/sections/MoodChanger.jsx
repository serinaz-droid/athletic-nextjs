import Card, { CardBody } from '@/components/ui/Card';
import MediaFrame from '@/components/ui/MediaFrame';
import SectionHeading from '@/components/ui/SectionHeading';

export default function MoodChanger() {
  return (
    <section id="moodchanger" data-screen-label="MoodChanger" style={{ background: 'var(--bg)' }}>
      <div className="section-inner">
        <SectionHeading title="MoodChanger" size="xl">
          <p className="reveal lead" style={{ fontSize: 'clamp(1.1rem,1.6vw,1.35rem)', lineHeight: 1.6 }}>
            A human performance optimization platform. Focused on mental, physical, and behavioral
            intelligence integration. Designed for high-performance environments, especially sports.
          </p>
        </SectionHeading>

        <MediaFrame
          src="/images/moodchanger-platform.png"
          alt="MoodChanger platform"
          style={{ maxWidth: 860, margin: '0 auto 56px' }}
          imgStyle={{ maxHeight: '64vh' }}
        />

        <div className="auto-grid" style={{ '--min': '320px', '--gap': 'clamp(28px,4vw,56px)' }}>
          <Card title="Powered by FloBrain" titleStyle={{ fontSize: 20 }}>
            <CardBody>
              FloBrain, our core AI intelligence engine. Acts as a decision-support system that processes
              human data into meaningful insights.
            </CardBody>
          </Card>
          <Card title="What We Do" titleStyle={{ fontSize: 20 }}>
            <CardBody style={{ marginBottom: 10 }}>
              Transform Raw Data → Structured Intelligence → Performance Outcomes.
            </CardBody>
            <CardBody>
              <span style={{ fontWeight: 600, color: 'var(--fg)' }}>Goal:</span> To improve decision-making,
              enhance performance consistency, and reduce inefficiencies in workflow.
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
