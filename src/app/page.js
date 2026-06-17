import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import TechMarquee from "@/components/TechMarquee"

export default function Home() {
  return (
    <main className="bg-background min-h-screen pt-16 transition-colors duration-300">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <TechMarquee/>
      <Portfolio/>
      <Contact/>
      <Footer/>

    </main>
  )
}