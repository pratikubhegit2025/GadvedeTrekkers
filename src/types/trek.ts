export type Difficulty = "Easy" | "Medium" | "Hard";

export interface PremiumTrek {
  id: string;
  name: string;
  location: string;
  difficulty: Difficulty; // added
  duration: string;
  altitude: string;
  images: string[];
  price: number;
  rating: number;
  reviews: number;
}
