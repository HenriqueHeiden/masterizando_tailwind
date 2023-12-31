import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { Sidebar } from '@/components/Sidebar'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={lato.className}>
        <div className="min-h-screen dark:bg-zinc-900 lg:grid lg:grid-cols-app">
          <Sidebar />
          <main className="max-w-[100vw] px-4 pb-12 pt-24 lg:col-start-2  lg:px-8 lg:pt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
