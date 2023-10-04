import { Analytics } from '@vercel/analytics/react';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pl-PL">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/assets/logo.svg" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://use.typekit.net/mck5esx.css" />
        <link rel="shortcut icon" href="/assets/logo.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal-root"></div>
        <Analytics />
      </body>
    </Html>
  );
}
