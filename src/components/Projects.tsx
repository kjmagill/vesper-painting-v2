"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1600607687920-4e03fa4e736?auto=format&fit=crop&w=800&q=80",
    title: "Stone Harbor Residence",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    title: "Avalon Beach House",
  },
  {
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
    title: "Cape May Victorian",
  },
  {
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    title: "Sea Isle City Home",
  },
  {
    image: "https://images.unsplash.com/photo-1600573472591-ee6981cf81f0?auto=format&fit=crop&w=800&q=80",
    title: "Ocean City Project",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 2;
  const maxIndex = Math.max(0, projects.length - visibleCount);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="projects" className="py-16 bg-vesper-cream">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="font-oswald font-bold text-2xl md:text-3xl text-vesper-charcoal uppercase text-center mb-10">
          Selected Works
        </h2>

        {/* Projects Carousel */}
        <div className="relative">
          <button
            type="button"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white hover:bg-vesper-tan rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
            aria-label="Previous project"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="overflow-hidden mx-8">
            <div
              className="flex transition-transform duration-300 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount + 3)}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] relative group overflow-hidden rounded-lg"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-vesper-charcoal/30 group-hover:bg-vesper-charcoal/50 transition-colors" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-oswald uppercase text-lg">{project.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white hover:bg-vesper-tan rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
            aria-label="Next project"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            href="https://www.instagram.com/vesperpainting/"
            target="_blank"
            className="inline-block bg-vesper-charcoal hover:bg-vesper-slate text-white font-oswald font-semibold uppercase px-8 py-3 transition-colors"
          >
            View More on Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
