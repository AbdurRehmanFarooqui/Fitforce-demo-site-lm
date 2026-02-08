import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Classes from "@/components/classes"
import Trainers from "@/components/trainers"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import CTA from "@/components/cta"
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">


      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Features />

        {/* Classes Section */}
        <Classes />

        {/* Trainers Section */}
        <Trainers />

        {/* Pricing Section */}
        <Pricing />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <Contact />

        {/* CTA Section */}
        <CTA />

      </main>


    </div>
  )
}
