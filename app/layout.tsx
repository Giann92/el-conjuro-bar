
import Footer from '../components/shared/footer'
import Header from '../components/shared/header'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'El conjuro bar',
  description: 'El conjuro bar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
      
        <Footer/>
      </body>
    </html>
  )
}

