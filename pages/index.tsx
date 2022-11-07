import { Button } from '@components/Button';
import { Carousel } from '@components/Carousel';
import { Item, ItemsGrid } from '@components/ItemsGrid';
import { Logo } from '@components/Logo';
import { PresentationCard } from '@components/PresentationCard';
import { Text } from '@components/Text';
import { Title1 } from '@components/Title1';
import Head from 'next/head';

export default function Home() {
  const productsGridItems: [Item, Item, Item, Item, Item, Item] = [
    {
      title: 'Graphic Design',
      image: "/pattern-graphic-design.svg",
    },
    {
      title: 'UI/UX',
      image: "/pattern-ui-ux.svg",
    },
    {
      title: 'Apps',
      image: "/pattern-apps.svg",
    },
    {
      title: 'Illustrations',
      image: "/pattern-illustrations.svg",
    },
    {
      title: 'Photography',
      image: "/pattern-photography.svg",
    },
    {
      title: 'Motion Graphics',
      image: "/pattern-motion-graphics.svg",
    },
  ]

  return (
    <div className='bg-lightCream'>
      <Head>
        <title>Single Page Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='flex items-center justify-between p-4'>
        <Logo />
        <Button />
      </header>
      <main className='px-4 mt-8'>
        <div className='px-7'>
          <Title1>Design solutions made easy</Title1>
          <Text className='mt-4'>With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</Text>
        </div>
        <ItemsGrid items={productsGridItems} className='mt-8' />
        <PresentationCard
          image='/image-amy.webp'
          title='I’m Amy, and I’d love to work on your next project'
          body='I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!'
          className='mt-24'
        />
      </main>
      <Carousel
        images={[
          "/image-slide-1.jpg",
          "/image-slide-2.jpg",
          "/image-slide-3.jpg",
          "/image-slide-4.jpg",
          "/image-slide-5.jpg",
        ]}
        className='mt-24'
      />
    </div>
  )
}