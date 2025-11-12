'use client';

import { MonoFont } from '../styles/font';
import '@/styles/globals.css';
import 'remixicon/fonts/remixicon.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        {/* <meta charset='UTF-8' /> */}
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <title>Neeraj Gupta — Designer & Developer</title>
        <meta
          name='description'
          content='Portfolio of Neeraj Gupta — a multidisciplinary designer and developer crafting thoughtful digital experiences.'
        />
        <meta
          property='og:title'
          content='Neeraj Gupta — Designer & Developer'
        />
        <meta
          property='og:description'
          content='Explore the work, tools, and experiments of Neeraj Gupta — where design meets code.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://theneerajgupta.github.io/' />
        <meta
          property='og:image'
          content='https://theneerajgupta.github.io/preview.png'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Neeraj Gupta — Designer & Developer'
        />
        <meta
          name='twitter:description'
          content='Designing and developing thoughtful digital experiences.'
        />
        <meta
          name='twitter:image'
          content='https://theneerajgupta.github.io/preview.png'
        />

        <link rel='icon' href='/favicon.ico' />
      </head>

      <body className={`${MonoFont.className} antialiased`}>{children}</body>
    </html>
  );
}
