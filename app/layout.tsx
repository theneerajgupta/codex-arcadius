'use client';

import { MonoFont } from '../styles/font';
import '@/styles/globals.css';
import 'remixicon/fonts/remixicon.css';

import ResponsiveLayout from '@/components/ResponsiveLayout';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Neeraj Gupta — Designer & Developer</title>
        <meta
          name='description'
          content='Portfolio of Neeraj Gupta — a multidisciplinary designer and developer crafting thoughtful digital experiences.'
        />
      </head>

      <body className={`${MonoFont.className} antialiased`}>
        <ResponsiveLayout>{children}</ResponsiveLayout>
      </body>
    </html>
  );
}
