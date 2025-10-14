"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const features = [
    "Fully Automated Plant",
    "Leading Producer of RMC",
    "Well-Equipped Lab",
    "Modern Machinery",
    "An Efficient Team of Experts",
  ]

  const slides = [
    {
      title: "READY MIX CONCRETE",
      subtitle: "Professional Construction",
      tagline: "SOLUTION FOR BUILDING",
    },
    {
      title: "QUALITY ASSURANCE",
      subtitle: "Certified Excellence",
      tagline: "BUILDING THE FUTURE",
    },
    {
      title: "TIMELY DELIVERY",
      subtitle: "Your Project Partner",
      tagline: "CONSTRUCTION SIMPLIFIED",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url('/bg.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dim black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none z-0"></div>
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Slider */}
          <div className="relative">
            <div className="relative min-h-[300px] flex items-center">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                  }`}
                >
                  <h2 className="text-5xl lg:text-7xl font-bold text-[#ff6b35] mb-4 tracking-wide">{slide.title}</h2>
                  <p className="text-2xl lg:text-3xl text-neutral-300 mb-2">{slide.subtitle}</p>
                  <p className="text-xl lg:text-2xl font-bold text-[#ff8c42]">{slide.tagline}</p>
                </div>
              ))}
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "w-8 bg-[#ff6b35]" : "w-2 bg-neutral-gray/30 hover:bg-neutral-gray/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right Content - Feature Pills */}
          <div className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl px-8 py-5 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-[#fed7aa]/30 bg-slate-50/55 backdrop-blur-sm"
              >
                <h3 className="text-xl lg:text-2xl font-bold text-neutral-dark text-center">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Orange Dotted Border */}
      <div className="h-3 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMyIgZmlsbD0iI2ZmNmIzNSIvPjwvc3ZnPg==')] bg-repeat-x"></div>
    </section>
  )
}
