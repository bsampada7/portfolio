import { MyStoreProvider } from '@/store/mystore'
import '@/styles/globals.css'
import '@/styles/brand.css'
import '@/styles/all.css'

import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://www.google.com/recaptcha/api.js?render=6LdGjc8kAAAAACy3ewbRsVGj4xY8-eVan5Atw037" />
      <MyStoreProvider>
        <Component {...pageProps} />
      </MyStoreProvider>
    </>
  )
}
