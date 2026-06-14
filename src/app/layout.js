import {Inter} from 'next/font/google'
import { ThemeProvider } from "next-themes"
import "./globals.css"

const inter = Inter({
  subsets: ['latin'], 
  weight: ['300', '400', '600', '700'],
  variable: '--font-inter'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}