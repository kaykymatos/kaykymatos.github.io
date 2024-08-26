
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/navbar'
import './css/site.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kayky',
  description: 'Portifolio'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} d-flex flex-column h-100` }style={{backgroundColor:'#F4F4F9'}}>
        <main className='flex-shrink-0'>
          <NavBar />

          {children}
        </main>
      </body>
    </html>
  )
}
