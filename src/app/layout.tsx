import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Zurriya | Growing Minds. Shaping Generations.',
    template: '%s | Zurriya',
  },
  description:
    'Zurriya is a child and adolescent development center in Cairo, Egypt — offering comprehensive assessments, individualized intervention, and parent partnership programs.',
  icons: {
    icon: '/logo/logo-mark.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
