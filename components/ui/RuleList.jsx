/**
 * A stack of hairline-separated statements — the site's standard way of
 * listing points inside a card. Colours flip inside an `.on-dark` section.
 *
 * - `border="bottom"` draws the rule under each row instead of above it.
 * - `omitLastBorder` drops the rule on the final row (bottom-ruled stacks
 *   that close the card rather than separate it from what follows).
 * - `capped` closes a top-ruled stack with a rule under the final row.
 */
export default function RuleList({
  items,
  border = 'top',
  capped = false,
  omitLastBorder = false,
  itemClassName = '',
  itemStyle,
  lastItemStyle,
  style,
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...style }}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        const classes = [
          'rule',
          border === 'bottom' && !(isLast && omitLastBorder) && 'rule-bottom',
          border === 'bottom' && isLast && omitLastBorder && 'rule-none',
          capped && isLast && 'is-capped',
          itemClassName,
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <p key={i} className={classes} style={isLast && lastItemStyle ? lastItemStyle : itemStyle}>
            {item}
          </p>
        );
      })}
    </div>
  );
}
