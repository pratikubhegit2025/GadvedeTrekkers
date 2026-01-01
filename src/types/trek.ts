export type Difficulty = "Easy" | "Medium" | "Hard";

export type PremiumTrek = {
  id: string;
  name: string;
  location: string;
  difficulty: string;
  duration: string;
  altitude: string;
  images: string[];
  price: number;
  originalPrice?: number; // added to fix the type error
  nextDate?: string;
  badge?: string;
  highlight?: string;
  rating?: number;
  reviews?: number;
};
