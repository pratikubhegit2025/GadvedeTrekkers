import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function HeritageWalkSection() {
  return (
    <section className="py-24 bg-[#fdfaf7]">
      <Container>
        <SectionHeading
          title="Pune Heritage Walk"
          subtitle="Explore historic streets, forts & culture"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="h-56 bg-gray-100 rounded-xl flex items-center justify-center">
            Old Pune City Walk
          </div>
          <div className="h-56 bg-gray-100 rounded-xl flex items-center justify-center">
            Forts & Landmarks
          </div>
          <div className="h-56 bg-gray-100 rounded-xl flex items-center justify-center">
            Temple Heritage Walk
          </div>
        </div>
      </Container>
    </section>
  );
}
