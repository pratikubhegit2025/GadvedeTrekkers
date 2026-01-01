import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function RentalsSection() {
  return (
    <section id="rentals" className="py-24 bg-white">
      <Container>
        <SectionHeading
          title="Adventure Rentals & Outdoor Essentials"
          subtitle="Camping gear, trekking equipment & villas on rent"
        />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 rounded-xl bg-[#fdfaf7] shadow">
            Tents on Rent
          </div>
          <div className="p-6 rounded-xl bg-[#fdfaf7] shadow">
            Trekking Gear
          </div>
          <div className="p-6 rounded-xl bg-[#fdfaf7] shadow">
            Villas on Rent
          </div>
        </div>
      </Container>
    </section>
  );
}
