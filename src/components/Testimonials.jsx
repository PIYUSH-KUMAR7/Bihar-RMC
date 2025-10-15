export default function Testimonials() {
  const testimonials = [
    {
      company: "JD Textiles",
      logo: "🏢",
      text: "Bihar RMC has been a game-changer for JD Textiles, exceeding expectations with their ready mix concrete. Their consistent quality, on-time deliveries, and excellent customer service have greatly contributed to our success. Highly recommended for strong and resilient constructions.",
    },
    {
      company: "Rahul Traders",
      logo: "🏗️",
      text: "Bihar RMC has been a crucial ally for Rahul Traders. Their top-quality ready mix concrete, coupled with unmatched reliability, has greatly contributed to the success of our projects. We trust Bihar RMC as our go-to supplier for all our concrete needs.",
    },
    {
      company: "Surya Buildcon",
      logo: "🏛️",
      text: "Bihar RMC is the backbone of Surya Buildcon, consistently exceeding expectations with their reliable ready-mix concrete services. Their unwavering quality make them an indispensable partner in our real estate ventures.",
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-dashed border-[#ff6b35]/30"
        >
          <div className="text-5xl mb-4 text-center">{testimonial.logo}</div>
          <p className="text-neutral-gray leading-relaxed mb-6 text-sm">{testimonial.text}</p>
          <div className="border-t-2 border-dashed border-[#ff6b35]/30 pt-4">
            <h4 className="text-xl font-bold text-neutral-dark text-center">{testimonial.company}</h4>
          </div>
        </div>
      ))}
    </div>
  )
}
