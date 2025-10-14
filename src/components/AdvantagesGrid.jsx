export default function AdvantagesGrid() {
  const advantages = [
    {
      title: "Precision Mixing",
      description:
        "Enhanced Quality: RMC undergoes precision mixing in controlled environments, ensuring a superior blend with top-tier materials for enduring structural strength.",
      icon: "🛡️",
    },
    {
      title: "Time-Efficient Construction",
      description:
        "Prompt Commencement: With RMC, construction begins immediately upon delivery, eliminating delays and accelerating project timelines for diverse applications.",
      icon: "⏱️",
    },
    {
      title: "Zero-Waste Sustainability",
      description:
        "Customized Solutions: Crafted to exact specifications, RMC minimizes wastage, adhering to a zero-waste philosophy. Recycle demolished structures into small aggregates for sustainable construction.",
      icon: "♻️",
    },
    {
      title: "Tailored Mixes for Versatility",
      description:
        "Flexible Customization: Adjust RMC mixes to meet specific project requirements, providing tailored solutions with expert advice for optimal performance.",
      icon: "🚚",
    },
    {
      title: "Environmental Responsibility",
      description:
        "Dust Pollution Control: The premixed nature of RMC, combined with responsible dust management during batching, minimizes on-site pollution, promoting a cleaner and safer working environment.",
      icon: "🌱",
    },
    {
      title: "Cost-Effective Solution",
      description:
        "Bulk Buying Advantage: By purchasing the finished product instead of individual components, RMC offers a cost-effective solution. Concrete suppliers buying in bulk extend competitive prices for economical construction.",
      icon: "💰",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {advantages.map((advantage, index) => (
        <div
          key={index}
          className="gradient-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-[#fed7aa]/50"
        >
          <div className="text-5xl mb-4">{advantage.icon}</div>
          <h3 className="text-2xl font-bold text-[#ff6b35] mb-4">{advantage.title}</h3>
          <p className="text-neutral-gray leading-relaxed">{advantage.description}</p>
        </div>
      ))}
    </div>
  )
}
