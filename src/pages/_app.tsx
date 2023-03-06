import { MyStoreProvider } from '@/store/mystore'
import '@/styles/globals.css'
import '@/styles/nav.css'
import '@/styles/all.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyStoreProvider>
      <Component {...pageProps} />
    </MyStoreProvider>
  )
}
