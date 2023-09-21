import classes from "./App.module.css";

function App() {
  return (
    <>
      <main className="w-screen h-screen">
        <div
          className={`${classes.overlay} relative w-full min-h-full bg-center bg-cover bg-no-repeat bg-[url('/background-portfolio.jpeg')]`}
        />
      </main>
    </>
  );
}

export default App;
