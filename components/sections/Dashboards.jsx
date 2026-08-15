import RuleList from '@/components/ui/RuleList';
import SectionHeading from '@/components/ui/SectionHeading';

const strong = (label) => <span style={{ fontWeight: 600, color: 'var(--fg)' }}>{label}</span>;

const athleteView = [
  <>{strong('Daily Check-In')} → Mood tracking → Synced with FloBrain data</>,
  <>
    {strong('Athletic Schedule')} → Integrated with personal calendars → Google Calendar, Apple Calendar, etc.
  </>,
  <>{strong('Training Tracker')} → Strength and conditioning, training sessions, workout completion status</>,
  <>{strong('Health Report')} → Stress levels, sleep quality, recovery status, injury tracking</>,
  <>
    {strong('Overall Performance Report')} · Daily, weekly, monthly, custom periods · Downloadable and
    shareable
  </>,
];

const coachView = [
  <>{strong('Readiness Report')} → Who is ready to perform?</>,
  <>{strong('Load Management')} → What training intensity should be applied?</>,
  <>{strong('Recovery Analysis')} → Who is adapting well?</>,
  <>{strong('Risk Monitoring')} → Who is at risk of injury or underperformance?</>,
  <>{strong('Performance Tracking')} → Are athletes improving over time?</>,
];

function DashboardColumn({ title, items }) {
  return (
    <div className="reveal">
      <h3 style={{ margin: '0 0 8px', fontSize: 22, fontWeight: 700, color: 'var(--brand-ink)' }}>{title}</h3>
      <RuleList items={items} capped itemClassName="is-wide" itemStyle={{ padding: '14px 0' }} />
    </div>
  );
}

export default function Dashboards() {
  return (
    <section id="dashboards" data-screen-label="Tier 2 Dashboards" style={{ background: 'var(--bg2)' }}>
      <div className="section-inner">
        <SectionHeading title="Personalized Reporting System" gap={64}>
          <p className="reveal lead" style={{ maxWidth: 900, marginBottom: 12, textWrap: 'pretty' }}>
            Delivers fully customized reports. Tailored to organization needs, athlete roles, coaching
            objectives.
          </p>
          <p
            className="reveal"
            style={{
              textWrap: 'balance',
              margin: '0 auto',
              maxWidth: 900,
              fontSize: 15.5,
              lineHeight: 1.7,
              color: 'var(--muted)',
            }}
          >
            <span style={{ fontWeight: 600, color: 'var(--fg)' }}>
              Accessible via MoodChanger Athletic Performance Intelligence Dashboard:
            </span>{' '}
            All insights are integrated through FloBrain App under MoodChanger Athletic Performance
            Intelligence user dashboard. Real-time access for: Athlete, coaches, staff.
          </p>
        </SectionHeading>

        <div className="auto-grid" style={{ '--min': '320px', '--gap': 'clamp(28px,4vw,72px)' }}>
          <DashboardColumn title="Athlete View" items={athleteView} />
          <DashboardColumn title="Coach View" items={coachView} />
        </div>
      </div>
    </section>
  );
}
