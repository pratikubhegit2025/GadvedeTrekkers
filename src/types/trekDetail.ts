export interface TrekDetail {
  id: string;
  name: string;
  slug: string;
  location: string;
  duration: string;
  difficulty: "Easy" | "Medium" | "Hard";
  altitude: string;
  trekLength: string;
  endurance: string;
  images: string[];
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;

  overview: string;
  highlights: string[];

  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
  }[];

  batches: {
    month: string;
    dates: {
      date: string;
      status: "available" | "limited" | "soldout";
    }[];
  }[];

  inclusions: string[];
  exclusions: string[];

  thingsToCarry: {
    mandatory: string[];
    optional: string[];
  };

  faqs: {
    question: string;
    answer: string;
  }[];

  relatedTreks: {
    id: string;
    name: string;
    image: string;
    price: number;
  }[];
}
