/**
 * The site's primary repeated content block: a brand top rule, a title and
 * body content. Colours flip automatically inside an `.on-dark` section.
 *
 * `variant="hairline"` renders the thinner neutral rule used by the secondary
 * cards (Unified Data Processing, Wearable Integration Opportunity).
 */
export default function Card({
  title,
  titleTone,
  titleStyle,
  variant,
  className = '',
  style,
  children,
}) {
  const classes = ['reveal', 'card', variant === 'hairline' && 'is-hairline', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} style={style}>
      {title ? (
        <h3 className={`card-title${titleTone === 'brand' ? ' is-brand' : ''}`} style={titleStyle}>
          {title}
        </h3>
      ) : null}
      {children}
    </div>
  );
}

/** Body copy inside a Card. */
export function CardBody({ style, children }) {
  return (
    <p className="card-body" style={style}>
      {children}
    </p>
  );
}
