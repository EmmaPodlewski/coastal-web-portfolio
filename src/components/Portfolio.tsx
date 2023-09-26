import SecondaryNavbar from "./UI/SecondaryNavbar";
import PortfolioCard from "./PortfolioCard";
import Section from "./UI/Section";
import { useState } from "react";

export default function Portfolio() {
  const [isWeb, setIsWeb] = useState(false);
  const [isBackEnd, setIsBackEnd] = useState(false);
  const [isAPI, setIsAPI] = useState(false);
  const [showAll, setShowAll] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const sectionSelectedHandler = (selector: string) => {
    if (selector === "web") {
      setIsWeb(true);
    }
    if ((selector = "back-end")) {
      setIsBackEnd(true);
    }
    if ((selector = "api")) {
      setIsAPI(true);
    }
    setShowAll(true);
  };

  return (
    <Section id="portfolio" title="Portfolio">
      <div className="flex w-full justify-between">
        <SecondaryNavbar onSectionSelected={sectionSelectedHandler} />
        <div className="flex flex-col gap-2">
          {(showAll || isWeb || isBackEnd || isAPI) && (
            <PortfolioCard
              title="HighJump AI"
              subtitle="AI companion for outbound sales"
              image="./highjump-illustration.png"
              alt="HighJump AI - AI companion for outbound sales"
              skillsFrontend={[
                "Web Development",
                "ReactJS",
                "NextJS",
                "JavaScript",
                "Chrome Extension",
              ]}
              skillsBackend={["NodeJS"]}
              skillsAPI={["API Integration", "OpenAI"]}
              skillsDb={["Prisma", "Vercel"]}
            />
          )}
          <PortfolioCard
            title="FreshCurrencies"
            subtitle="FreshBooks Add-on with FreshBooks and Stripe API Integrations"
            image="./freshcurrencies-portfolio.png"
            alt="FreshCurrencies - FreshBooks add-on with Stripe API Integration"
            skillsFrontend={["Web Development", "JavaScript", "CSS"]}
            skillsBackend={["Python", "postgreSQL"]}
            skillsAPI={[
              "API Integration",
              "Django",
              "Stripe API",
              "FreshBooks API",
              "REST",
            ]}
            skillsDb={["Digital Ocean"]}
          />
          <PortfolioCard
            title="FreshBooks"
            subtitle="FreshBooks - Various Front-End and Back-End projects"
            image="./freshbooks-reports.png"
            alt="FreshBooks - Accounting Reports"
            skillsFrontend={["Web Development", "EmberJS", "JavaScript", "CSS"]}
            skillsBackend={["Python", "mySQL", "PHP"]}
            skillsAPI={["API Integration", "OCR"]}
          />
          <div className="w-full text-center mt-2">
            <button
              className="text-white w-[200px]"
              onClick={() => setShowMore(!showMore)}
            >
              Load More
            </button>
          </div>
          {showMore && (
            <>
              <PortfolioCard
                title="Babysitting Whistler"
                subtitle="Booking Form and API Integration"
                image="./babysittingwhistler-portfolio.png"
                alt="Babysitting Whistler - Booking Form and API Integration"
                skillsFrontend={[
                  "Web Development",
                  "ReactJS",
                  "JavaScript",
                  "CSS",
                ]}
                skillsBackend={["Python", "mySQL"]}
                skillsAPI={["API Integration", "WhenIWork", "Stripe", "REST"]}
                skillsDb={["Digital Ocean"]}
              />
              <PortfolioCard
                title="Caddie"
                subtitle="Prototype (MVP)"
                image="./caddie-portfolio.png"
                alt="Caddie MVP"
                skillsFrontend={[
                  "Web Development",
                  "ReactJS",
                  "JavaScript",
                  "CSS",
                ]}
                skillsBackend={["Python", "mySQL", "Django REST"]}
              />
              <PortfolioCard
                title="FreshBooks Support"
                subtitle="Custom API implementation with ZenDesk"
                image="./zendesk-api.png"
                alt="Custom ZenDesk API"
                skillsBackend={["Python", "mySQL"]}
                skillsAPI={["API Integration", "REST", "ZenDesk"]}
              />
              <PortfolioCard
                title="Teazit"
                subtitle="Live-streaming platform for clubs, bars and events"
                image="./teazit.jpeg"
                alt="Teazit web app"
                skillsFrontend={["Web Development", "EmberJS", "Bulma"]}
                skillsBackend={["Python", "mySQL"]}
                skillsAPI={["API Integration", "REST", "ZenDesk"]}
              />
            </>
          )}
        </div>
      </div>
    </Section>
  );
}
