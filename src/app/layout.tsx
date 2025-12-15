import type {Metadata} from 'next';
import '@/app/globals.css';
import {cn} from '@/lib/utils';
import {Toaster} from '@/components/ui/toaster';
import StarryBackground from '@/components/layout/starry-background';

export const metadata: Metadata = {
  title: 'AstroSage',
  description: 'Your mystical guide to the stars.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased relative'
        )}>
        <StarryBackground />
        <div className="relative z-10">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
