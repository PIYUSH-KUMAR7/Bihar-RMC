import { FaWhatsapp, FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa"
export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
                <img
                  src="https://biharrmc.com/wp-content/uploads/2024/01/logo-1-150x150.png"
                  alt="Bihar RMC Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Bihar RMC</h3>
                <p className="text-sm text-neutral-gray">Ready Mix Concrete</p>
              </div>
            </div>
            <p className="text-neutral-gray leading-relaxed">
              Leading provider of high-quality ready mix concrete solutions in
              Bihar. Building the future with precision and reliability.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#25d366] flex items-center justify-center hover:scale-110 transition-transform"
              >
                <span className="sr-only">WhatsApp</span>
                <FaWhatsapp size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center hover:scale-110 transition-transform"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebookF size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#e4405f] flex items-center justify-center hover:scale-110 transition-transform"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#ea4335] flex items-center justify-center hover:scale-110 transition-transform"
              >
                <span className="sr-only">Google Maps</span>
                <FaMapMarkerAlt size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-neutral-gray hover:text-[#ff6b35] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-gray hover:text-[#ff6b35] transition-colors"
                >
                  About RMC
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-gray hover:text-[#ff6b35] transition-colors"
                >
                  Our Lab
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-gray hover:text-[#ff6b35] transition-colors"
                >
                  Happy Clients
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xl font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-neutral-gray hover:text-[#ff6b35] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-gray hover:text-[#ff6b35] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-gray/30 mt-8 pt-8 text-center">
          <p className="text-neutral-gray">
            Copyright © 2023{" "}
            <span className="text-[#ff6b35] font-semibold">Bihar RMC</span> |
            Designed by <span className="text-[#ff6b35]">DigiMaveric</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
