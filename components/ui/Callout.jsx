/** Bordered, centred "Why This Matters?" panel. */
export default function Callout({ title, titleStyle, children }) {
  return (
    <div className="reveal callout">
      <h3 className="callout-title" style={titleStyle}>
        {title}
      </h3>
      <p className="callout-body">{children}</p>
    </div>
  );
}
