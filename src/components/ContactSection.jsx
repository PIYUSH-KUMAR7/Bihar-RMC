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
                 KAPCON RMC PVT LTD Near, Shiwala Chowk, Khagaul, Shivala Par, Tikaitpur, Bihar 801113
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">📧 Email</h3>
                <p className="text-neutral-gray">contact@KapconRMC.com | sales@KapconRMC.com</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">📞 Phone</h3>
                <p className="text-neutral-gray">9264499252 | 9264499252</p>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.6330189636565!2d85.00195767517688!3d25.583873377464066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed55408eddd635%3A0x89283372e7263981!2sKAPCON%20RMC%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1760541204414!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kapcon RMC Pvt Ltd location on Google Maps"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
