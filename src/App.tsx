import { Outlet } from "react-router-dom";
import "./App.css";
import BurgerMenu from "./components/BurgerMenu";
import { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <header className={darkMode ? "container-dark" : "container-light"}>
      <nav className="navigation-menu">
        <h1>Bac à Sable</h1>
        <div>
          <BurgerMenu />
        </div>
        <section className="container-text-home">
          <p>
            Bienvenue dans mon bac à sable <br /> un terrain de jeu pour
            expérimenter, coder, tester et créer sans limite.
          </p>
        </section>
      </nav>
      <Outlet />
    </header>
  );
}

export default App;
