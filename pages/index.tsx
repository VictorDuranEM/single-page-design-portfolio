import { Button } from '@components/Button';
import { Carousel } from '@components/Carousel';
import { Item, ItemsGrid } from '@components/ItemsGrid';
import { Logo } from '@components/Logo';
import { CTACard } from '@components/CTACard';
import { Text } from '@components/Text';
import { Title1 } from '@components/Title1';
import Head from 'next/head';
import { PresentationCard } from '@components/PresentationCard';

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
      <header className='flex items-center justify-between pt-4 px-4 md:pt-10 md:px-10 xl:max-w-[1111px] xl:mx-auto xl:px-0'>
        <Logo />
        <Button />
      </header>
      <main className='px-4 mt-8 md:mt-16 md:px-10 xl:max-w-[1111px] xl:mx-auto xl:px-0'>
        <div className='px-7'>
          <Title1>Design solutions made easy</Title1>
          <Text className='mt-4 md:mt-7 text-center'>With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</Text>
        </div>
        <ItemsGrid items={productsGridItems} className='mt-8 md:mt-16 xl:mt-20' />
        <PresentationCard
          image='/image-amy.webp'
          title='I’m Amy, and I’d love to work on your next project'
          body='I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!'
          className='mt-24 md:mt-32'
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
        className='mt-24 md:mt-32 xl:mt-24h'
      />
      <CTACard
        title='Book a call with me'
        body='I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.'
        className='mt-24 mx-4 md:mt-32 md:mx-10 xl:max-w-[1111px] xl:mx-auto'
      />
      <footer className='flex items-center justify-between p-4 mt-10 pb-8 md:mx-10 md:mt-14 md:pb-14 xl:max-w-[1111px] xl:mx-auto xl:pb-16 xl:px-0'>
        <Logo />
        <Button />
      </footer>
    </div>
  )
}