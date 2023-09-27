import Section from "./UI/Section";
import Profile from "./Profile";

export default function About() {
  return (
    <Section id="about" title="About Us">
      <Profile
        image="./alex-portfolio-picture.jpg"
        name="Alex Baizeau"
        job="Full-Stack Software Engineer"
        description="Passionate, curious and hands-on, I like to understand how things work. Architecture, software and web development are like puzzles,the more challenging they are, the more I have fun with it. Share your vision and your ideas and I would turn it into the websites that you always had in mind."
        linkedInUrl="https://www.linkedin.com/in/alexandre-baizeau-b595151a/"
        githubUrl="https://github.com/alexBaizeau"
        email="alexandre.baizeau@gmail.com"
        skillsFrontEnd={[
          "Web Development",
          "ReactJS",
          "NextJS",
          "EmberJS",
          "JavaScript",
          "HTML",
          "CSS",
          "TailWind",
          "Bootstrap",
          "Material Design",
        ]}
        backEnd={[
          "Python",
          "Django REST",
          "PHP",
          "mySQL",
          "postgreSQL",
          "graphQL",
          "JSON",
          "Ajax",
          "Ruby on Rails",
        ]}
        api={[
          "Custom API Development",
          "REST",
          "ZenDesk",
          "Stripe",
          "FreshBooks",
          "When I Work",
          "Exact Online",
        ]}
        skillsDb={[
          "Cloud Services",
          "AWS",
          "Google Cloud Platform",
          "Digital Ocean",
        ]}
      />
      <Profile
        image="./emma-portfolio.png"
        name="Emma Podlewski"
        job="Front-End Software Developer"
        description="Former chemical engineer, I turned my passion for science from a lab to a computer. I take pride in creating websites that will fulfill the vision of small businesses and entrepreneurs. I apply my HTML, CSS, JavaScript and Python skills to build vibrant, customized websites that will stand out."
        linkedInUrl="https://www.linkedin.com/in/emma-podlewski"
        githubUrl="https://github.com/EmmaPodlewski"
        email="emma.coastalweb@gmail.com"
        skillsFrontEnd={[
          "Web Development",
          "ReactJS",
          "NextJS",
          "EmberJS",
          "JavaScript",
          "HTML",
          "CSS",
          "TailWind",
          "Bootstrap",
          "Material Design",
        ]}
        backEnd={["Python", "Django", "JSON"]}
        api={["Custom API Development", "REST", "Stripe", "FreshBooks"]}
      />
    </Section>
  );
}
