import { CheckIcon } from './Icons';

/**
 * The "Key Benefits" block shared by the Solution section and all three
 * service tiers: a ruled heading above a centred row of check-marked items.
 */
export default function KeyBenefits({ heading = 'Key Benefits', items, className = '', style }) {
  return (
    <div className={`reveal ${className}`.trim()} style={style}>
      <h3 className="kb-heading">{heading}</h3>
      <div className="kb-grid">
        {items.map((item) => (
          <div key={item} className="reveal kb-item">
            <span className="kb-icon">
              <CheckIcon />
            </span>
            <h4 className="kb-title">{item}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
