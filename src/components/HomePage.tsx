import { HeroSlider } from "./HeroSlider";
import { GroupToursSection } from "./GroupToursSection";
import { HeritageWalkSection } from "./HeritageWalkSection";
import { FAQSection } from "./FAQSection";
import { FloatingActions } from "./FloatingAction";
import { PopularTreksSection } from "./PopularTreksSection";

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#fdfaf7]">
      {/* HERO */}
      <HeroSlider />

      {/* POPULAR TREKS */}
      <PopularTreksSection />

      {/* GROUP TOURS */}
      <GroupToursSection />

      {/* HERITAGE WALKS */}
      <HeritageWalkSection />

      {/* FAQ */}
      <FAQSection />

      {/* FLOATING WHATSAPP */}
      <FloatingActions />
    </div>
  );
}
