import type {Metadata} from 'next'
import {Cormorant_Garamond, Space_Mono} from 'next/font/google'

const cormorant = Cormorant_Garamond({
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Joris Saïdani — Producer · Audio Engineer · Drummer',
  description: 'Music producer, audio engineer and drummer based in Nantes, France.',
}

export default function JorisLayout({children}: {children: React.ReactNode}) {
  return <div className={`${cormorant.variable} ${spaceMono.variable}`}>{children}</div>
}
