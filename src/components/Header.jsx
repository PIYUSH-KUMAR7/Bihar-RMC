import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { FaWhatsapp, FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About RMC", href: "#about-rmc" },
    { name: "About Us", href: "#about" },
    { name: "Our Lab", href: "#lab" },
    { name: "Happy Clients", href: "#clients" },
    { name: "Contact Us", href: "#contact" },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#ff6b35] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="font-medium">For Expert Advice</span>
            <span className="hidden sm:inline">9255555455 | 9294654565</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#fed7aa] transition-colors" aria-label="WhatsApp">
              <FaWhatsapp size={18} />
            </a>
            <a href="#" className="hover:text-[#fed7aa] transition-colors" aria-label="Facebook">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-[#fed7aa] transition-colors" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-[#fed7aa] transition-colors" aria-label="Google Maps">
              <FaMapMarkerAlt size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
              
              <img
                src="/logoo.png"
                alt="RMC Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
            <h1 className="text-2xl font-bold text-[#ff6b35]">Kapcon RMC Pvt Ltd</h1>
              <p className="text-sm text-neutral-gray font-medium">Ready Mix Concrete</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-neutral-dark hover:text-[#ff6b35] font-medium transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff6b35] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Enquire Now Button */}
          <button className="hidden lg:block bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
            Enquire Now →
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-neutral-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-neutral-gray/20">
            <ul className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-dark hover:text-[#ff6b35] font-medium transition-colors block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <button className="w-full bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all">
                  Enquire Now →
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
