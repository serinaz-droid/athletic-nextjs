/** Inline SVG icons used across the site. */

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function CheckIcon({ size = 17, width = 2.4 }) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={width} style={{ width: size, height: size }}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function ChevronDownIcon({ size = 12, width = 2 }) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={width} style={{ width: size, height: size }}>
      <path d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export function ArrowLeftIcon({ size = 18, width = 2.2 }) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={width} style={{ width: size, height: size }}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 18, width = 2.2 }) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={width} style={{ width: size, height: size }}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronLeftIcon({ size = 22, width = 2 }) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={width} style={{ width: size, height: size }}>
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

export function ChevronRightIcon({ size = 22, width = 2 }) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={width} style={{ width: size, height: size }}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function SunIcon({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: size, height: size }}>
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MoonIcon({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth="2" style={{ width: size, height: size }}>
      <path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" />
    </svg>
  );
}

export function CloseIcon({ size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: size, height: size }}>
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon({ size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: size, height: size }}>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function SendIcon({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth="2" style={{ width: size, height: size }}>
      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  );
}
