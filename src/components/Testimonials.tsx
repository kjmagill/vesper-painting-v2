"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah L.",
    date: "2024",
    rating: 5,
    text: "Vesper made everything so easy. They were professional, kept the place clean, and the finish is perfect. Our Avalon home looks brand new again.",
    location: "Avalon, NJ",
  },
  {
    name: "Michael R.",
    date: "2024",
    rating: 5,
    text: "Outstanding attention to detail. The crew was punctual and respectful of our property throughout the entire project.",
    location: "Stone Harbor, NJ",
  },
  {
    name: "Jennifer K.",
    date: "2024",
    rating: 5,
    text: "The best painting experience we've ever had. Their coastal expertise really shows in the quality of their work.",
    location: "Cape May, NJ",
  },
  {
    name: "David M.",
    date: "2023",
    rating: 5,
    text: "Professional from start to finish. The digital updates kept us informed every step of the way.",
    location: "Sea Isle City, NJ",
  },
  {
    name: "Patricia H.",
    date: "2023",
    rating: 5,
    text: "Impeccable craftsmanship. They transformed our beach house interior beautifully.",
    location: "Ocean City, NJ",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 3;
  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-0.5 bg-vesper-tan" />
          <h2 className="font-oswald font-bold text-2xl md:text-3xl text-vesper-charcoal uppercase whitespace-nowrap">
            What Our Clients Say
          </h2>
          <div className="flex-1 h-0.5 bg-vesper-tan" />
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <button
            type="button"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-vesper-cream hover:bg-vesper-tan rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="overflow-hidden mx-8">
            <div
              className="flex transition-transform duration-300 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount + 2)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)] bg-white border border-gray-200 rounded-lg p-6"
                >
                  <div className="flex items-start gap-2 mb-3">
                    <span className="text-3xl text-vesper-tan font-serif">&ldquo;</span>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-vesper-tan text-vesper-tan"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 italic text-sm mb-4">
                    {testimonial.text}
                  </p>

                  <div className="border-t border-gray-200 mt-4 pt-4">
                    <p className="font-semibold text-vesper-charcoal text-sm uppercase">
                      {testimonial.name}
                    </p>
                    <p className="text-vesper-blue text-xs">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-vesper-cream hover:bg-vesper-tan rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(maxIndex + 1)].map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === currentIndex ? "bg-vesper-charcoal" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
