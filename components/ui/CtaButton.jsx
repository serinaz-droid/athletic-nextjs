/** Brand pill call-to-action link. `size="lg"` is the wider pricing variant. */
export default function CtaButton({ href, size, children }) {
  return (
    <a href={href} className={`btn-cta${size === 'lg' ? ' is-lg' : ''}`}>
      {children}
    </a>
  );
}
