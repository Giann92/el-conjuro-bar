'use client'

import Footer from '../components/shared/footer'
import Header from '../components/shared/header'
import './globals.css'
import { Inter } from 'next/font/google'
import WhatsappLogo from '@/components/whatsappLogo'
import Hero from '@/components/hero'
import Loading from '@/components/ui/loading'
import { useEffect, useState } from 'react'
import Head from 'next/head'



const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  // Agrega un estado para controlar si se está cargando la página o no
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simula una carga de página
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Cambia esto al tiempo que necesites para simular la carga

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon/beer.ico" />
      </Head>
      <body className={inter.className}>
        {/* Renderiza el componente de carga solo cuando se está cargando la página */}
        {loading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <Hero />
            {children}
            <WhatsappLogo />
            <Footer />
          </>
        )}
      </body>
    </html>
  )
}


