import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  id: number;
  title: string;
  subtitle?: string;
  bg: string;
};

export function HeroSlider() {
  const slides: Slide[] = [
    { id: 1, title: "Weekend Sahyadri Treks", subtitle: "Fresh routes every week", bg: "bg-[linear-gradient(90deg,#e6ffef,_#f0fff4)]" },
    { id: 2, title: "Backpacking Adventures", subtitle: "Group tours & solo trips", bg: "bg-[linear-gradient(90deg,#fff7ed,_#fffaf0)]" },
    { id: 3, title: "Pune Heritage Walks", subtitle: "History in every step", bg: "bg-[linear-gradient(90deg,#f0f9ff,_#f8fafc)]" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="w-full h-80 md:h-[420px] relative overflow-hidden rounded-b-xl">
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <div className={`w-full h-full flex items-center justify-center ${s.bg}`}>
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-semibold text-[#2d5f3f]">{s.title}</h1>
              {s.subtitle && <p className="mt-2 text-gray-600">{s.subtitle}</p>}
              <button className="mt-6 inline-flex items-center gap-2 bg-[#2d5f3f] text-white px-4 py-2 rounded-lg">
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        aria-label="Previous"
        onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow"
      >
        <ChevronLeft />
      </button>

      <button
        aria-label="Next"
        onClick={() => setIndex((i) => (i + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow"
      >
        <ChevronRight />
      </button>
    </div>
  );
}