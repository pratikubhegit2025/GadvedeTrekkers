import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { FAQAccordion } from "./FAQAccordation";
import type { FAQ } from "./FAQAccordation";

export function FAQSection() {
  const faqs: FAQ[] = [
    {
      question: "How do I book a trek?",
      answer:
        "You can book directly from our website or contact us on WhatsApp.",
    },
    {
      question: "Is it suitable for beginners?",
      answer:
        "Yes, we have beginner-friendly treks with trained leaders.",
    },
    {
      question: "What should I carry?",
      answer:
        "Comfortable shoes, water bottle, snacks, and rainwear during monsoon.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <Container>
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before booking"
        />

        <div className="mt-10 max-w-3xl mx-auto">
          <FAQAccordion faqs={faqs} />
        </div>
      </Container>
    </section>
  );
}
