import Section from "./UI/Section";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Section id="contact" title="Get in Touch">
      <div className="flex text-white text-center items-center place-content-center">
        <ContactForm
          name="Alexandre Baizeau"
          linkedInUrl="https://www.linkedin.com/in/alexandre-baizeau-b595151a/"
          email="alexandre.baizeau@gmail.com"
        />
        <ContactForm
          name="Emmanuelle Podlewski"
          linkedInUrl="https://www.linkedin.com/in/emma-podlewski"
          email="emma.coastalweb@gmail.com"
        />
      </div>
      <p className="text-purple text-center mt-6">
        Designed and coded by Emma Podlewski
      </p>
    </Section>
  );
}
