import '../styles/globals.css';
import 'leaflet/dist/leaflet.css';
import 'lightbox.js-react/dist/index.css';

import type { AppProps } from 'next/app';
import Script from 'next/script';
import Layout from './layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5M1PZ4C2S6"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5M1PZ4C2S6');`}
        </Script>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}
