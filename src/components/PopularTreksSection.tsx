import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { PremiumTrekCard } from "./PremiumTrekCard";
import { premiumTreks } from "../data/treks";

export function PopularTreksSection() {
  return (
    <section className="bg-[#fdfaf7] py-20">
      <Container>
        <SectionHeading
          title="Popular Treks Near Pune & Mumbai"
          subtitle="We organize beginner-friendly, moderate, and challenging Sahyadri treks near Pune and Mumbai every weekend with trained trek leaders and safety support."
        />

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-8">
          {premiumTreks.map((trek) => (
            <PremiumTrekCard key={trek.id} trek={trek} />
          ))}
        </div>

        {/* Mobile / Tablet Horizontal Scroll */}
        <div className="lg:hidden -mx-4 px-4 flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {premiumTreks.map((trek) => (
            <div key={trek.id} className="min-w-[85%] sm:min-w-[45%] snap-start">
              <PremiumTrekCard trek={trek} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
