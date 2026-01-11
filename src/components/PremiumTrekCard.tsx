import { useState, useEffect, useRef } from "react";
import {
  Calendar,
  Mountain,
  Timer,
  TrendingUp,
  MapPin,
  Star,
  Download,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= TYPES ================= */

export interface PremiumTrek {
  id: string;
  name: string;
  slug: string;
  location: string;
  difficulty: "Easy" | "Medium" | "Hard";
  duration: string;
  altitude?: string;
  images: string[];
  price: number;
  originalPrice?: number;
  nextDate: string;
  upcomingDates?: string[];
  badge?: "Best Seller" | "Monsoon Special" | "Limited Seats";
  highlight?: string;
  rating?: number;
  reviews?: number;
}

interface PremiumTrekCardProps {
  trek: PremiumTrek;
  onViewDetails?: () => void;
  onBookNow?: () => void;
  onDownloadItinerary?: () => void;
}

/* ================= COMPONENT ================= */

export function PremiumTrekCard({
  trek,
  onViewDetails,
  onBookNow,
  onDownloadItinerary,
}: PremiumTrekCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const intervalRef = useRef<number | null>(null);

  /* ================= IMAGE HOVER LOGIC (FINAL FIX) ================= */

  useEffect(() => {
    if (!isHovering || trek.images.length <= 1) {
      return;
    }

    intervalRef.current = window.setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === trek.images.length - 1 ? 0 : prev + 1
      );
    }, 800);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isHovering, trek.images]);

  /* ================= HELPERS ================= */

  const getDifficultyColor = (difficulty: PremiumTrek["difficulty"]) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Hard":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getBadgeColor = (badge?: PremiumTrek["badge"]) => {
    switch (badge) {
      case "Best Seller":
        return "bg-gradient-to-r from-amber-500 to-orange-500 text-white";
      case "Monsoon Special":
        return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white";
      case "Limited Seats":
        return "bg-gradient-to-r from-red-500 to-pink-500 text-white";
      default:
        return "bg-gray-900 text-white";
    }
  };

  /* ================= UI ================= */

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
    >
      {/* IMAGE SECTION */}
      <div
        className="relative h-64 overflow-hidden"
        onMouseEnter={() => {
          setCurrentImageIndex(0); // ✅ reset on hover start
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
          setCurrentImageIndex(0); // ✅ reset on hover end
        }}
      >
        {trek.images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700"
              style={{
                backgroundImage: `url(${img})`,
                transform: isHovering ? "scale(1.05)" : "scale(1)",
              }}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {trek.badge && (
          <span
            className={`absolute top-4 left-4 px-3 py-1.5 text-xs rounded-full ${getBadgeColor(
              trek.badge
            )}`}
          >
            {trek.badge}
          </span>
        )}

        {trek.rating && (
          <div className="absolute top-4 right-4 bg-white/90 px-3 py-1.5 rounded-full flex items-center gap-1">
            <Star className="size-4 fill-amber-400 text-amber-400" />
            <span className="text-sm">{trek.rating}</span>
            {trek.reviews && (
              <span className="text-xs text-gray-500">
                ({trek.reviews}+)
              </span>
            )}
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-lg text-gray-900 mb-1">{trek.name}</h3>

        <div className="flex items-center gap-1 text-gray-600 mb-4">
          <MapPin className="size-4" />
          <span className="text-sm">{trek.location}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span
            className={`px-3 py-1.5 text-xs rounded-lg ${getDifficultyColor(
              trek.difficulty
            )}`}
          >
            <TrendingUp className="inline size-3 mr-1" />
            {trek.difficulty}
          </span>

          <span className="px-3 py-1.5 text-xs rounded-lg bg-gray-100 text-gray-700">
            <Timer className="inline size-3 mr-1" />
            {trek.duration}
          </span>

          {trek.altitude && (
            <span className="px-3 py-1.5 text-xs rounded-lg bg-gray-100 text-gray-700">
              <Mountain className="inline size-3 mr-1" />
              {trek.altitude}
            </span>
          )}
        </div>

        {/* PRICE */}
        <div className="mb-4">
          {trek.originalPrice && (
            <span className="text-sm text-gray-400 line-through mr-2">
              ₹{trek.originalPrice}
            </span>
          )}
          <span className="text-2xl text-gray-900">₹{trek.price}</span>
          <p className="text-xs text-gray-500">Starting from</p>
        </div>

        {/* DATE */}
        <button
          onClick={() => setShowCalendar((v) => !v)}
          className="flex items-center gap-2 text-sm text-gray-700 mb-3"
        >
          <Calendar className="size-4 text-[#2d5f3f]" />
          Next Date: {trek.nextDate}
        </button>

        <AnimatePresence>
          {showCalendar && trek.upcomingDates && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mb-4 border rounded-lg p-3 bg-white shadow"
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Upcoming Dates</span>
                <X
                  className="size-4 cursor-pointer"
                  onClick={() => setShowCalendar(false)}
                />
              </div>

              {trek.upcomingDates.map((d, i) => (
                <div key={i} className="text-sm py-1">
                  {d}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <div className="space-y-2">
          <button
            onClick={onBookNow}
            className="w-full py-3 rounded-xl bg-[#2d5f3f] text-white"
          >
            Book Now
          </button>

          <button
            onClick={onViewDetails}
            className="w-full py-3 rounded-xl border border-[#2d5f3f] text-[#2d5f3f]"
          >
            View Details
          </button>

          {onDownloadItinerary && (
            <button
              onClick={onDownloadItinerary}
              className="w-full py-2 rounded-xl border flex items-center justify-center gap-2 text-sm"
            >
              <Download className="size-4" />
              Download Itinerary
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
