import MediaFrame from '@/components/ui/MediaFrame';

/**
 * "How It Works" walkthrough: a sticky title + image column beside a stack of
 * numbered steps. Shared by the without-wearables and with-wearables sections.
 *
 * `titleLead` renders before the wiped highlight in `titleHighlight`.
 */
export default function StickySteps({ id, screenLabel, titleLead, titleHighlight, image, imageAlt, steps }) {
  return (
    <section id={id} data-screen-label={screenLabel} style={{ background: 'var(--bg)' }}>
      <div className="section-inner">
        <div
          className="auto-grid"
          style={{ '--min': '320px', '--gap': 'clamp(32px,5vw,80px)', alignItems: 'start' }}
        >
          <div className="sticky-col">
            <h2 className="reveal h2 size-sm" style={{ marginBottom: 26 }}>
              {titleLead} <span className="hl-wipe">{titleHighlight}</span>
            </h2>
            <MediaFrame src={image} alt={imageAlt} size="sm" imgStyle={{ maxHeight: '44vh' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {steps.map((step) => (
              <div
                key={step.n}
                className="reveal"
                style={{ padding: '26px 0', borderTop: '1px solid var(--line2)' }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px', fontSize: 21, fontWeight: 700, color: 'var(--fg)' }}>
                    {step.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: 'var(--muted)' }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
