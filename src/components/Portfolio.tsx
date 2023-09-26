import SecondaryNavbar from "./UI/SecondaryNavbar";
import PortfolioCard from "./PortfolioCard";
import Section from "./UI/Section";

export default function Portfolio() {
  return (
    <Section id="portfolio" title="Portfolio">
      <SecondaryNavbar />
      <PortfolioCard />
      {/*
        <div className="column center-image is-5 is-one-third-desktop tabcontent all web-development backend api">
          <div className="card-portfolio">
            <div className="card-image has-text-centered flex flipper">
              <div className="front">
                <img
                  className="image-portfolio"
                  src="images/freshbooks-reports.png"
                  alt="FreshBooks - Accounting Reports"
                />
              </div>
              
              <div className="back vertical-align u--center-content">
                <div className="columns">
                  <div className="column">
                    <p className="text-is-purple u-paddingBottom--half">
                      FreshBooks - Custom reports
                    </p>
                    <div className="tags u-paddingX--half">
                      <div className="tag is-info">Web Development</div>
                      <div className="tag is-info">EmberJS</div>
                      <div className="tag is-info">JavaScript</div>
                      <div className="tag is-info">CSS</div>
                    </div>
                    <div className="tags u-paddingX--half">
                      <div className="tag is-primary">Python</div>
                      <div className="tag is-primary">mySQL</div>
                      <div className="tag is-primary">PHP</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="columns is-centered">
        <div className="column center-image is-5 is-one-third-desktop tabcontent all web-development backend api">
          <div className="card-portfolio">
            <div className="card-image has-text-centered flex flipper">
              <div className="front">
                <img
                  className="image-portfolio"
                  src="images/babysittingwhistler-portfolio.png"
                  alt="Babysitting Whistler - Booking Form and API Integration"
                />
              </div>
              <div className="back vertical-align u--center-content">
                <div className="columns">
                  <div className="column">
                    <p className="text-is-purple u-paddingBottom--half">
                      Babysitting Whistler - Booking Form and API Integration
                    </p>
                    <div className="tags u-paddingX--half">
                      <div className="tag is-info">Web Development</div>
                      <div className="tag is-info">JavaScript</div>
                      <div className="tag is-info">CSS</div>
                    </div>
                    <div className="tags u-paddingX--half">
                      <div className="tag is-primary">Python</div>
                      <div className="tag is-primary">mySQL</div>
                    </div>
                    <div className="tags u-paddingX--half">
                      <div className="tag is-danger">
                        Custom API Integration
                      </div>
                      <div className="tag is-danger">WhenIWork API</div>
                    </div>
                    <div className="tags u-paddingX--half">
                      <span className="tag is-warning">Digital Ocean</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column center-image is-5 is-one-third-desktop tabcontent all web-development backend">
          <div className="card-portfolio">
            <div className="card-image has-text-centered flex flipper">
              <div className="front">
                <img
                  className="image-portfolio"
                  src="images/caddie-portfolio.png"
                  alt="Caddie - MVP"
                />
              </div>
              <div className="back vertical-align u--center-content">
                <div className="columns">
                  <div className="column">
                    <p className="text-is-purple u-paddingBottom--half">
                      SalesCaddie - Prototype (MVP)
                    </p>
                    <div className="tags u-paddingX--half">
                      <div className="tag is-info">Web Development</div>
                      <div className="tag is-info">React</div>
                      <div className="tag is-info">JavaScript</div>
                      <div className="tag is-info">CSS</div>
                    </div>
                    <div className="tags u-paddingX--half">
                      <div className="tag is-primary">Python</div>
                      <div className="tag is-primary">mySQL</div>
                      <div className="tag is-primary">Django REST</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column center-image is-5 is-one-third-desktop tabcontent all web-development">
          <div className="card-portfolio">
            <div className="card-image has-text-centered flex flipper">
              <div className="front">
                <img
                  className="image-portfolio"
                  src="images/onboarding-tiles-fb.png"
                  alt="FreshBooks - Onboarding tiles"
                />
              </div>
              <div className="back vertical-align u--center-content">
                <div className="columns">
                  <div className="column">
                    <p className="text-is-purple u-paddingBottom--half">
                      FreshBooks - Onboarding tiles
                    </p>
                    <div className="tags u-paddingX--half">
                      <div className="tag is-info">Web Development</div>
                      <div className="tag is-info">EmberJS</div>
                      <div className="tag is-info">JavaScript</div>
                      <div className="tag is-info">CSS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column center-image is-5 is-one-third-desktop tabcontent all web-development">
          <div className="card-portfolio">
            <div className="card-image has-text-centered flex flipper">
              <div className="front">
                <img
                  className="image-portfolio"
                  src="images/bank-rec-fb.png"
                  alt="FreshBooks - Bank reconciliation"
                />
              </div>
              <div className="back vertical-align u--center-content">
                <div className="columns">
                  <div className="column">
                    <p className="text-is-purple u-paddingBottom--half">
                      FreshBooks - Bank Reconciliation
                    </p>
                    <div className="tags u-paddingX--half">
                      <div className="tag is-info">Web Development</div>
                      <div className="tag is-info">EmberJS</div>
                      <div className="tag is-info">JavaScript</div>
                      <div className="tag is-info">CSS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column center-image is-5 is-one-third-desktop tabcontent all back-end api">
          <div className="card-portfolio">
            <div className="card-image has-text-centered flex flipper">
              <div className="front">
                <img
                  className="image-portfolio"
                  src="images/zendesk-api.png"
                  alt="Custom ZenDesk API"
                />
              </div>
              <div className="back vertical-align u--center-content">
                <div className="columns">
                  <div className="column">
                    <p className="text-is-purple u-paddingBottom--half">
                      ZenDesk - Custom API implementation
                    </p>
                    <div className="tags u-paddingX--half">
                      <div className="tag is-primary">Python</div>
                      <div className="tag is-primary">mySQL</div>
                    </div>
                    <div className="tags u-paddingX--half">
                      <div className="tag is-danger">
                        Custom API Integration
                      </div>
                      <div className="tag is-danger">JSON</div>
                      <div className="tag is-danger">REST</div>
                      <div className="tag is-danger">ZenDesk</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column center-image is-5 is-one-third-desktop tabcontent all backend api">
          <div className="card-portfolio">
            <div className="card-image has-text-centered flex flipper">
              <div className="front">
                <img
                  className="image-portfolio"
                  src="images/exactonline-api.png"
                  alt="Custom ExactOnline API"
                />
              </div>
              <div className="back vertical-align u--center-content">
                <div className="columns">
                  <div className="column">
                    <p className="text-is-purple u-paddingBottom--half">
                      ExactOnline - Custom API implementation
                    </p>
                    <div className="tags u-paddingX--half">
                      <div className="tag is-primary">Python</div>
                      <div className="tag is-primary">mySQL</div>
                    </div>
                    <div className="tags u-paddingX--half">
                      <div className="tag is-danger">
                        Custom API Integration
                      </div>
                      <div className="tag is-danger">JSON</div>
                      <div className="tag is-danger">REST</div>
                      <div className="tag is-danger">graphQL</div>
                      <div className="tag is-danger">ExactOnline</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column center-image is-5 is-one-third-desktop tabcontent all web-development api">
          <div className="card-portfolio">
            <div className="card-image has-text-centered flex flipper">
              <div className="front">
                <img
                  className="image-portfolio"
                  src="images/teazit.jpeg"
                  alt="Teazit web app"
                />
              </div>
              <div className="back vertical-align u--center-content">
                <div className="columns">
                  <div className="column">
                    <p className="text-is-purple u-paddingBottom--half">
                      Teazit - live-streaming platform for clubs, bars and
                      events
                    </p>
                    <div className="tags u-paddingX--half">
                      <div className="tag is-info">Web Development</div>
                      <div className="tag is-info">EmberJS</div>
                      <div className="tag is-info">JavaScript</div>
                      <div className="tag is-info">CSS</div>
                      <div className="tag is-info">Bulma</div>
                    </div>
                    <div className="tags u-paddingX--half">
                      <div className="tag is-danger">
                        Custom API Integration
                      </div>
                      <div className="tag is-danger">JSON</div>
                      <div className="tag is-danger">REST</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column center-image is-5 is-one-third-desktop tabcontent all web-development">
          <div className="card-portfolio">
            <div className="card-image has-text-centered flex flipper">
              <div className="front">
                <img
                  className="image-portfolio"
                  src="images/custom-css-fb.png"
                  alt="Sticky header FreshBooks"
                />
              </div>
              <div className="back vertical-align u--center-content">
                <div className="columns">
                  <div className="column">
                    <p className="text-is-purple u-paddingBottom--half">
                      FreshBooks - Advanced CSS work on sticky headers
                    </p>
                    <div className="tags u-paddingX--half">
                      <div className="tag is-info">Web Development</div>
                      <div className="tag is-info">EmberJS</div>
                      <div className="tag is-info">JavaScript</div>
                      <div className="tag is-info">CSS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div> */}
    </Section>
  );
}
