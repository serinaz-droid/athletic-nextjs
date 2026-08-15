/**
 * Rounded, shadowed image frame with the slow zoom-out reveal.
 * `size="sm"` uses the 20px radius variant from the sticky columns.
 */
export default function MediaFrame({ src, alt, size, className = '', style, imgStyle }) {
  const classes = ['reveal', 'reveal-img', 'media-frame', size === 'sm' && 'is-sm', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} style={style}>
      <img src={src} alt={alt} style={imgStyle} />
    </div>
  );
}
