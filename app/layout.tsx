import './globals.css'
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})
export const metadata = {
  title: 'Central Criminal Search',
  description: 'a web application that connects to different law enforcement agency such as Interpol and FBI',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}
