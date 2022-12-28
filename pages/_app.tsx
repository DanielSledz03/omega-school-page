import '../styles/globals.css'
import type { AppProps } from 'next/app'

import localFont from '@next/font/local'
import Layout from './layout'
const NeuzeitGrotesk = localFont({ src: '../public/fonts/NeuzeitGroteskRegular.otf' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className={NeuzeitGrotesk.className}>
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}
