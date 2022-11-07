import Head from 'next/head';
import Arrow from '@components/Arrow'

export default function Home() {
  return (
    <>
      <Head>
        <title>Single Page Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Arrow direction='right'/>
    </>
  )
}