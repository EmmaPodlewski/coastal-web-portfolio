import classes from "./App.module.css";
import Intro from "./Intro";
import Expertise from "./Expertise";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <>
      <div
        id="home"
        className={`${classes.overlay} relative bg-center bg-cover bg-no-repeat bg-[url('/background-portfolio.jpeg')]`}
      >
        <Intro />
      </div>
      <Expertise />
      <Portfolio />
      <About />
      <Contact />
    </>
  );
}

export default App;
