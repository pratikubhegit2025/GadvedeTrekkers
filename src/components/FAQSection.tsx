import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-white">
      <Container>
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before booking"
        />

        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="p-4 border rounded-lg">
            What are the best treks near Pune?
          </div>
          <div className="p-4 border rounded-lg">
            Do you organize corporate outings?
          </div>
          <div className="p-4 border rounded-lg">
            Can we rent tents & camping gear?
          </div>
        </div>
      </Container>
    </section>
  );
}
