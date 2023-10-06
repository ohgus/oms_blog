import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { Providers } from "./providers";
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import CabinLogo from "@/components/icons/cabinLogo"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "OhGus Blog",
  description: "Generated by create next app",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body 
        className={`antialiased min-h-screen bg-white dark:bg-stone-900 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <Providers>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
              <CabinLogo />
              <ModeToggle />
              </div>
              <p className="mb-3">계속 미래를 그려나가는 개발자가 되자.</p>
              <div className="flex items-center justify-between">
                <nav className="ml-0 mr-4 text-m font-medium space-x-6">
                  <Link href="/algorithm">Algorithm</Link>
                  <Link href="/portfolio">Portfolio</Link>
                  <Link href="/about">About</Link>
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
