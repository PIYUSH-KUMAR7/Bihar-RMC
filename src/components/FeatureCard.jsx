export default function FeatureCard() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="gradient-card rounded-3xl px-8 py-12 shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#fed7aa]/50">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-6 bg-[#ff6b35] rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-[#ff6b35] text-center mb-6">
          Effortless Project Management
        </h2>

        <p className="text-neutral-gray text-center leading-relaxed text-lg">
          <span className="font-semibold text-neutral-dark">Professional Support:</span> Entrust your project to
          professionals capable of mixing, supplying, and delivering RMC. Save valuable time by eliminating setup and
          dismantling processes, focusing on your project from order to delivery.
        </p>
      </div>
    </div>
  )
}
