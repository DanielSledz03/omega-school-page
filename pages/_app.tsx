import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './layout'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5M1PZ4C2S6"></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5M1PZ4C2S6');`}
        </Script>
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}
