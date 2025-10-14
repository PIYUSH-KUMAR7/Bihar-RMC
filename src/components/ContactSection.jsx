export default function ContactSection() {
  return (
    <section className="bg-gradient-to-br from-[#fef9f3] to-[#fed7aa] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#ff6b35] mb-12 text-center">Corporate Office Address</h2>

        <div className="grid lg:grid-cols-2 items-stretch gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-3xl p-8 shadow-xl h-full">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">📍 Address</h3>
                <p className="text-neutral-gray">
                  New A G Colony, Balaji Nagar, New Tarachak, Mathiapur, Mobarakpur-Raghurampur, Patna, Bihar 801503
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">📧 Email</h3>
                <p className="text-neutral-gray">contact@biharrmc.com | sales@biharrmc.com</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">📞 Phone</h3>
                <p className="text-neutral-gray">9264296210 | 9264296211</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">🕐 Timings</h3>
                <p className="text-neutral-gray">Monday – Friday : 09:00 – 20:00 | Saturday & Sunday : 09:00 – 14:00</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl h-full">
            {/* Responsive 16:9 container for the iframe */}
            <div className="relative w-full h-full min-h-[280px] lg:min-h-[520px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7195.434333744701!2d85.032187!3d25.614313!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed572fae56c383%3A0xdd4af9fc1dd2374c!2sBihar%20RMC!5e0!3m2!1sen!2sin!4v1760371956438!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bihar RMC location on Google Maps"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
