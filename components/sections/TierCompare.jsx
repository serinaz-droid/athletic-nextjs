import RuleList from '@/components/ui/RuleList';
import SectionHeading from '@/components/ui/SectionHeading';
import { tiers } from '@/lib/content';

export default function TierCompare() {
  return (
    <section id="tiers" data-screen-label="Tiers 1-3 Comparison" style={{ background: 'var(--bg)' }}>
      <div className="section-inner">
        <SectionHeading title="Designed As A Progressive System">
          <p className="reveal lead">
            Each tier represents a different level of data maturity and performance intelligence.
          </p>
        </SectionHeading>

        <div className="tier-grid" style={{ marginBottom: 48 }}>
          {tiers.map((tier) => (
            <div key={tier.kicker} className="reveal tier-card">
              <div>
                <p className="tier-kicker">{tier.kicker}</p>
                <h3 className="tier-title">{tier.title}</h3>
              </div>

              <RuleList items={tier.start} itemStyle={{ padding: '10px 0', lineHeight: 1.55 }} style={{ paddingTop: 14 }} />

              <p className="tier-op">+</p>

              <RuleList
                items={tier.plus}
                itemClassName="rule-strong"
                itemStyle={{ padding: '10px 0', lineHeight: 1.55 }}
              />

              <p className="tier-op">=</p>
              <p className="tier-arrow">{tier.arrow}</p>

              <div style={{ alignSelf: 'end' }}>
                <span className="pill-outline">{tier.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
