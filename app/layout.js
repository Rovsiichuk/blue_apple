import './globals.scss'
import { Inter } from 'next/font/google'
import Header from '@/app/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blue Apple',
  description: 'UX/UI design and branding agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
