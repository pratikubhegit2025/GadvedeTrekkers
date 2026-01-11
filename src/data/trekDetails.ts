// src/data/trekDetails.ts
import type { TrekDetail } from "../types/trek";

export const trekDetails: TrekDetail[] = [
  {
    id: "7",
    slug: "harishchandragad-sunrise-trek",
    name: "Harishchandragad Sunrise Trek",
    location: "Maharashtra",
    duration: "1 Night 1 Day",
    difficulty: "Hard",
    altitude: "1424 m",
    trekLength: "6 km",
    endurance: "Medium to High",

    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    ],

    price: 699,
    originalPrice: 999,

    rating: 4.9,
    reviews: 1200,

    overview:
      "Harishchandragad is one of the most iconic treks in the Sahyadris, famous for its Konkan Kada cliff and sunrise views.",

    highlights: [
      "Sunrise from Konkan Kada",
      "Ancient Kedareshwar cave temple",
      "Star gazing & night trek experience"
    ],

    itinerary: [
      {
        day: 1,
        title: "Base Village to Konkan Kada",
        description: "Night trek via Nalichi Vaat route",
        activities: ["Night trekking", "Star gazing", "Camping"]
      },
      {
        day: 2,
        title: "Sunrise & Return",
        description: "Sunrise at Konkan Kada and descend",
        activities: ["Sunrise view", "Temple visit", "Descent"]
      }
    ],

    batches: [
      {
        month: "October 2025",
        dates: [
          { date: "12 Oct", status: "available" },
          { date: "19 Oct", status: "limited" },
          { date: "26 Oct", status: "soldout" }
        ]
      }
    ],

    inclusions: [
      "Trek leader",
      "Breakfast & tea",
      "First aid support"
    ],

    exclusions: [
      "Personal expenses",
      "Any meals not mentioned"
    ],

    thingsToCarry: {
      mandatory: ["Trekking shoes", "Water bottle", "Torch"],
      optional: ["Camera", "Power bank"]
    },

    faqs: [
      {
        question: "Is this trek suitable for beginners?",
        answer: "No, this trek is recommended for experienced trekkers."
      }
    ],

    relatedTreks: [
      {
        id: "1",
        name: "Rajgad Fort Trek",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        price: 599
      }
    ]
  }
];
