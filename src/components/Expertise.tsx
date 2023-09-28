import Card from "./UI/Card";
import Section from "./UI/Section";

const SKILLS = [
  {
    title: "Web Development",
    image: "./logo-js.png",
    alt: "Front-end Development expertise",
    body: "Fast, responsive and user-friendly, we use our expertise to build custom websites that will stand out.",
  },
  {
    title: "Custom API Development",
    image: "./logo-python.png",
    alt: "Custom API Development expertise",
    body: "We integrate third-party APIs such as Stripe, ExactOnline, Exchange Rate API, FreshBooks API, Optical Character Recognition (OCR) API, custom APIs to help your create a custom website that will accomodate the functionalities you need.",
  },
  {
    title: "Cloud services",
    image: "./logo-aws.png",
    alt: "AWS services expertise",
    body: "Looking at serverless solutions, we can help you find out which offers will best suit your needs and implement the transfer of your data for you.",
  },
  {
    title: " Consulting, MVP",
    image: "./logo-consulting.jpg",
    alt: "Consulting Services",
    body: " Need some front-end, back-end, database, MVP, prototype, architecture and monitoring expertise that you don't have in house? Let us know what your needs are and we'll help you build a customized solution.",
  },
];

export default function Expertise() {
  return (
    <Section id="expertise" title="Our Expertise">
      <div className="flex max-lg:flex-col gap-8">
        {SKILLS.map((skill) => (
          <Card
            key={skill.title}
            title={skill.title}
            image={skill.image}
            alt={skill.alt}
            body={skill.body}
          />
        ))}
      </div>
    </Section>
  );
}
