import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function TourCategoriesSection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading
          title="Backpacking Trips & Group Tours"
          subtitle="Curated budget-friendly tours from Pune, Mumbai & Delhi"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="h-56 rounded-xl bg-gray-100 flex items-center justify-center">
            Himachal Backpacking
          </div>
          <div className="h-56 rounded-xl bg-gray-100 flex items-center justify-center">
            Rajasthan Tours
          </div>
          <div className="h-56 rounded-xl bg-gray-100 flex items-center justify-center">
            South India & Coastal Trips
          </div>
        </div>
      </Container>
    </section>
  );
}
