import Nosotros from '@/components/nosotros'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
    <main>
      <h1 className="text-4xl font-bold text-center mt-8">El Conjuro bar </h1>
      <p className="text-lg text-center mt-4">¡Disfruta de nuestras deliciosas comidas y bebidas!</p>
    </main>
    <Nosotros/>
  </div>
  )
}
