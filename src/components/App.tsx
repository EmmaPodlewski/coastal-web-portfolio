import classes from "./App.module.css";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Expertise from "./Expertise";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <>
      <main className="w-screen h-screen" id="home">
        <div
          className={`${classes.overlay} relative w-full min-h-full bg-center bg-cover bg-no-repeat bg-[url('/background-portfolio.jpeg')]`}
        >
          <div className="flex flex-col items-center h-screen w-screen justify-center text-white z-10">
            <h1 className="z-10 pb-4">Coastal Web Development</h1>
            {/* <motion.h2
              animate={{ x: [-500, -150, 0], opacity: [0, 0.5, 1] }}
              transition={{ duration: 0.8, bounce: 0.5 }}
              className="text-xl mb-4 z-10"
            >
              Full-Stack Web Development Consulting
            </motion.h2> */}
            <div
              className={`${classes["anim-typewriter"]} ${classes["line-1"]} z-10`}
            >
              Full-Stack Web Development Consulting
            </div>
            <NavLink to="#expertise" className="text-white z-10 ">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center border border-white rounded-md px-5 py-2"
              >
                <span>Take a look at our work here</span>
                <motion.span
                  whileHover={{ rotate: 90, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="[&>svg]:w-6 text-white pl-2"
                >
                  <ArrowRightIcon />
                </motion.span>
              </motion.div>
            </NavLink>
          </div>
        </div>
        <Expertise />
        <Portfolio />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
