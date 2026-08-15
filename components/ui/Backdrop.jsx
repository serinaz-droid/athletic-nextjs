/**
 * Full-bleed photographic backdrop with a colour veil, used by every dark
 * section. The image carries `data-plx` so the site-wide parallax effect
 * picks it up.
 */
export default function Backdrop({ src, filter, veil }) {
  return (
    <>
      <img data-plx="" src={src} alt="" className="backdrop-img" style={filter ? { filter } : undefined} />
      <div className="backdrop-veil" style={{ background: veil }} />
    </>
  );
}
