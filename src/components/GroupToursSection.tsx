import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function GroupToursSection() {
  return (
    <section className="py-24 bg-[#fdfaf7]">
      <Container>
        <SectionHeading
          title="Budget Tours for Groups"
          subtitle="Schools, colleges & corporate outings"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 bg-white rounded-xl shadow text-center">
            Safety First
          </div>
          <div className="p-6 bg-white rounded-xl shadow text-center">
            Educational Tours
          </div>
          <div className="p-6 bg-white rounded-xl shadow text-center">
            Custom Planning
          </div>
          <div className="p-6 bg-white rounded-xl shadow text-center">
            PAN-India Destinations
          </div>
        </div>
      </Container>
    </section>
  );
}
