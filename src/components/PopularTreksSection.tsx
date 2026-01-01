import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { PremiumTrekCard } from "./PremiumTrekCard";
import { premiumTreks } from "../data/treks";
import type { PremiumTrek } from "../types/trek";

export function PopularTreksSection() {
  return (
    <section className="py-24 bg-[#fdfaf7]">
      <Container>
        <SectionHeading
          title="Popular Treks Near Pune & Mumbai"
          subtitle="Beginner-friendly, moderate and challenging Sahyadri treks every weekend."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {premiumTreks.map((trek: PremiumTrek) => (
            <PremiumTrekCard key={trek.id} trek={trek} />
          ))}
        </div>
      </Container>
    </section>
  );
}
