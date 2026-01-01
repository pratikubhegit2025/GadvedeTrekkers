import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Explore the Best Treks & Budget Tours from Pune, Mumbai & Delhi",
    subtitle:
      "Weekend treks, backpacking trips, heritage walks, rentals & group tours organized by experts.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    title: "Pune Heritage Walks",
    subtitle: "History in every step",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1600&q=80",
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-7xl px-6">
              <div className="max-w-3xl text-white">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  {slide.title}
                </h1>

                <p className="mt-4 text-base sm:text-lg text-white/90">
                  {slide.subtitle}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button className="rounded-lg bg-[#2d5f3f] px-6 py-3 text-white text-sm sm:text-base hover:bg-[#244d33] transition">
                    View Upcoming Treks
                  </button>

                  <button className="rounded-lg border border-white/70 px-6 py-3 text-white text-sm sm:text-base hover:bg-white hover:text-black transition">
                    Contact on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={() =>
          setIndex((i) => (i - 1 + slides.length) % slides.length)
        }
        className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white hover:bg-black/60 transition"
      >
        <ChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => setIndex((i) => (i + 1) % slides.length)}
        className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white hover:bg-black/60 transition"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-2.5 w-2.5 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
