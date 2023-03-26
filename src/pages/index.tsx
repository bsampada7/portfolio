import Background from '@/components/Background'
import Contact from '@/components/Contact'
import Tweet from '@/components/Contact/Tweet'
import MenuContainer from '@/components/MenuContainer'
import Overlay from '@/components/Overlay'
import ThreeCanvas from '@/components/ThreeCanvas'
import { MyStoreContext } from '@/store/mystore'
import Head from 'next/head'
import { useContext, useEffect } from 'react'

export default function Home() {
  const { state } = useContext(MyStoreContext);
  const { menuOpen } = state

  return (
    <>
      <Head>
        <title>Sampada Bhujel</title>
        <meta name="description" content="Portfolio website of full stack developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`absolute w-full min-h-full top-0 left-0 ${menuOpen && 'overflow-hidden'} bg-background text-text-muted`}>
        <div className='relative w-full min-h-full mx-auto'>
          <ThreeCanvas />
          <MenuContainer />
          <Overlay />
          <Tweet/>
        </div>

      </main>
    </>
  )
}
