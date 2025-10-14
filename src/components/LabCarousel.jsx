

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function LabCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-13%20at%2021.26.37_dbf01c3c-50B4tgJoqFw26yElT1WLBxQjohofIR.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-13%20at%2021.26.37_dbf01c3c-50B4tgJoqFw26yElT1WLBxQjohofIR.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-13%20at%2021.26.37_dbf01c3c-50B4tgJoqFw26yElT1WLBxQjohofIR.jpg",
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Carousel Container */}
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image || "/placeholder.svg"}
                alt={`Lab facility ${index + 1}`}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white transition-all duration-300 z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white transition-all duration-300 z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-[#ff6b35]" : "w-2 bg-neutral-gray/30 hover:bg-neutral-gray/50"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
