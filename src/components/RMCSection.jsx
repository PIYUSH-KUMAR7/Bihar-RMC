export default function RMCSection() {
  const features = [
    {
      title: "Fully Automated Plant",
      icon: "⚙️",
    },
    {
      title: "Leading Producer of RMC",
      icon: "🏆",
    },
    {
      title: "Well-Equipped Lab",
      icon: "🔬",
    },
    {
      title: "Modern Machinery",
      icon: "🚚",
    },
    {
      title: "An Efficient Team of Experts",
      icon: "👥",
    },
  ]

  return (
    <div className="gradient-orange-section py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Kapcon RMC Pvt Ltd</h2>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-8">Leader In Ready Mix Concrete</h3>
            <p className="text-lg leading-relaxed">
              Kapcon RMC Ready Mix Concrete ensures superior quality with a precise mix of ingredients, guaranteeing durable
              and high-strength concrete for construction projects. With state-of-the-art batching plants and a skilled
              workforce, Kapcon RMC Ready Mix Concrete delivers timely and efficient services, reducing construction time and
              costs.
            </p>
          </div>

          {/* Right Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h4 className="text-lg font-bold text-neutral-dark text-center">{feature.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
