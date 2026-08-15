import './globals.css';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import SiteEffects from '@/components/layout/SiteEffects';
import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/content';

export const metadata = {
  title: {
    default: `${SITE_NAME} | by FloLabs Innovations Group`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'FloLabs Innovations Group', url: 'https://www.flolabsinnovations.com/' }],
  creator: 'FloLabs Innovations Group',
  publisher: 'FloLabs Innovations Group',
  keywords: [
    'Athletic Performance Intelligence',
    'MoodChanger',
    'FloBrain',
    'CAIPO',
    'sports performance',
    'athlete readiness',
    'wearable data',
    'performance intelligence',
    'FloLabs Innovations Group',
  ],
  metadataBase: new URL('https://www.athleticperformanceintelligence.com/'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Hardware Agnostic`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Hardware Agnostic`,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: '/images/flolabs-logo.svg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1a25' },
  ],
};

// Applies the stored theme before first paint so a returning dark-mode
// visitor never sees the light palette flash.
const themeScript = `(function(){try{var t=localStorage.getItem('api-site-theme');document.documentElement.setAttribute('data-theme',t==='dark'?'dark':'light')}catch(e){document.documentElement.setAttribute('data-theme','light')}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <SiteEffects />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
