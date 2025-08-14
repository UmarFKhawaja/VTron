import { ReactNode } from 'react';
import { type Metadata } from 'next';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';

export const metadata: Metadata = {
  title: 'V-Tron',
  description: 'A full-stack Transmission client'
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <meta charSet="UTF-8"/>
        <link rel="icon" type="image/png" href="/icon.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <ColorSchemeScript/>
      </head>
      <body>
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
