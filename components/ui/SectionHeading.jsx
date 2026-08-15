/**
 * Centred section heading: optional eyebrow, the h2, and any lead paragraphs
 * passed as children.
 *
 * `size` selects one of the approved h2 scales defined in globals.css.
 * A heading with no lead copy sits flush against the content below it.
 */
export default function SectionHeading({ eyebrow, title, size = 'lg', gap = 56, titleGap, children }) {
  const marginBottom = titleGap ?? (children ? undefined : 0);

  return (
    <div className="section-head" style={{ marginBottom: gap }}>
      {eyebrow ? <p className="reveal eyebrow">{eyebrow}</p> : null}
      <h2 className={`reveal h2 size-${size}`} style={marginBottom !== undefined ? { marginBottom } : undefined}>
        {title}
      </h2>
      {children}
    </div>
  );
}
