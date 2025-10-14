
import Header from "./components/Header"
import Hero from "./components/Hero"
import FeatureCard from "./components/FeatureCard"
import RMCSection from "./components/RMCSection"
import LabCarousel from "./components/LabCarousel"
import RMCInfo from "./components/RMCInfo"
import AdvantagesGrid from "./components/AdvantagesGrid"
import Testimonials from "./components/Testimonials"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      {/* Feature Card Section */}
      <section className="container mx-auto px-4 py-16">
        <FeatureCard />
      </section>

      {/* Lab Carousel Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-[#ff6b35] mb-12">Our Lab</h2>
        <LabCarousel />
      </section>

      {/* RMC Features Section */}
      <section className="py-16">
        <RMCSection />
      </section>

      {/* What is RMC Section */}
      <section className="container mx-auto px-4 py-16">
        <RMCInfo />
      </section>

      {/* Advantages Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-[#ff6b35] mb-4">Advantages of Ready Mix Concrete (RMC)</h2>
        <p className="text-center text-neutral-gray max-w-4xl mx-auto mb-12 leading-relaxed">
          Experience the efficiency, cost-effectiveness, and environmental advantages of Bihar RMC's Ready Mix Concrete.
          The Ultimate solution for high-performance and high-quality construction.
        </p>
        <AdvantagesGrid />
      </section>

      {/* Testimonials Section */}
      <section className="bg-neutral-light py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#ff6b35] mb-12">OUR HAPPY CUSTOMERS</h2>
          <Testimonials />
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}
