import '../styles/globals.css'
import type { AppProps } from 'next/app'

import localFont from '@next/font/local'
import Layout from './layout'
const myFont = localFont({ src: '../public/fonts/NeuzeitGroteskRegular.otf' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={myFont.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}
