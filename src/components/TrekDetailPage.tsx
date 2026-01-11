import { useState } from "react";
import {
  MapPin,
  Clock,
  Download,
  ChevronRight,
  Star,
} from "lucide-react";

import type { TrekDetail } from "../types/trek";
import { FAQAccordion } from "./FAQAccordation";

interface TrekDetailPageProps {
  trek: TrekDetail;
  onBookNow: () => void;
  onClose?: () => void;
}

export function TrekDetailPage({ trek, onBookNow }: TrekDetailPageProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "itinerary", label: "Itinerary" },
    { id: "batches", label: "Batches" },
    { id: "inclusion", label: "Inclusion/Exclusion" },
    { id: "carry", label: "Things to Carry" },
    { id: "faq", label: "FAQ" },
  ];

  const scrollToTab = (id: string) => {
    setActiveTab(id);
    document
      .getElementById(`section-${id}`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#fdfaf7]">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-600 flex items-center gap-2">
          <a href="/" className="hover:text-green-700">
            Home
          </a>
          <ChevronRight size={14} />
          <span>{trek.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-semibold mb-3">{trek.name}</h1>

          <div className="flex gap-4 text-sm text-gray-600 mb-4">
            <span className="flex items-center gap-1">
              <MapPin size={16} /> {trek.location}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} /> {trek.duration}
            </span>
            <span className="flex items-center gap-1">
              <Star size={16} className="text-yellow-400" />
              {trek.rating} ({trek.reviews}+)
            </span>
          </div>

          <img
            src={trek.images[0]}
            alt={trek.name}
            className="rounded-xl h-96 w-full object-cover"
          />
        </div>

        {/* Price Card */}
        <div className="bg-white rounded-xl shadow p-6 sticky top-4">
          <p className="text-3xl font-semibold mb-2">₹{trek.price}</p>
          <button
            onClick={onBookNow}
            className="w-full bg-[#2d5f3f] text-white py-3 rounded-lg mb-3"
          >
            Book Now
          </button>
          <button className="w-full border py-3 rounded-lg flex items-center justify-center gap-2">
            <Download size={16} /> Download Itinerary
          </button>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-0 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 flex gap-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToTab(tab.id)}
              className={`py-3 border-b-2 ${
                activeTab === tab.id
                  ? "border-green-700 text-green-700"
                  : "border-transparent text-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <section id="section-faq" className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold mb-4">FAQs</h2>
        <FAQAccordion faqs={trek.faqs} />
      </section>
    </div>
  );
}
