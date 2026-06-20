import { Inter } from 'next/font/google'
import { ThemeProvider } from "next-themes"
import "./globals.css"
import 'boxicons/css/boxicons.min.css';

const inter = Inter({
  subsets: ['latin'], 
  weight: ['300', '400', '600', '700'],
  variable: '--font-inter', // সিএসএস-এ ব্যবহারের জন্য এই নামটা জরুরি
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* inter.variable এবং font-sans দুটোই একসাথে দিন */}
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}