import SecondaryNavbar from "./UI/SecondaryNavbar";
import PortfolioCard from "./PortfolioCard";
import Section from "./UI/Section";
import { useState } from "react";
import { portfolioSkills } from "./utils/constants";

export default function Portfolio() {
  const [selector, setSelector] = useState("all");
  const [showMore, setShowMore] = useState(false);
  let skillsToShow = portfolioSkills.slice(0, 3);
  let moreSkillsToShow = portfolioSkills.slice(3);

  const sectionSelectedHandler = (selectedItem: string) => {
    setSelector(selectedItem);
  };

  if (selector !== "all") {
    const filteredExperiences = portfolioSkills.filter(
      (skill) => skill[selector] && skill[selector]?.length !== 0
    );
    skillsToShow = filteredExperiences.slice(0, 3);
    moreSkillsToShow = filteredExperiences.slice(3);
  }

  return (
    <Section id="portfolio" title="Portfolio">
      <div className="flex w-full justify-between">
        <SecondaryNavbar
          onSectionSelected={sectionSelectedHandler}
          selectedItem={selector}
        />
        <div className="flex flex-col gap-2">
          {skillsToShow.map((skill) => {
            return (
              <PortfolioCard
                key={skill.title}
                title={skill.title}
                subtitle={skill.subtitle}
                image={skill.image}
                alt={skill.alt}
                web={skill?.web}
                backEnd={skill?.backEnd}
                api={skill?.api}
                skillsDb={skill?.skillsDb}
              />
            );
          })}
          <div className="w-full text-center mt-2">
            <button
              className="text-white w-[200px]"
              onClick={() => setShowMore(!showMore)}
            >
              Load More
            </button>
          </div>
          {showMore &&
            moreSkillsToShow.map((skill) => {
              return (
                <PortfolioCard
                  key={skill.title}
                  title={skill.title}
                  subtitle={skill.subtitle}
                  image={skill.image}
                  alt={skill.alt}
                  web={skill?.web}
                  backEnd={skill?.backEnd}
                  api={skill?.api}
                  skillsDb={skill?.skillsDb}
                />
              );
            })}
        </div>
      </div>
    </Section>
  );
}
