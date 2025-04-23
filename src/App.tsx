import { Outlet } from "react-router-dom";
import "./app.css";
import BurgerMenu from "./components/BurgerMenu";
function App() {
	return (
		<>
			<nav className="navigation-menu">
				<h1>Bac à Sable</h1>
				<div>
					<BurgerMenu />
				</div>
				<section className="container-text-home">
					<p>
						Ceci est mon centre de recherche et de test utiliser le menu burger
						sur la droite pour naviguer entre les pages
					</p>
				</section>
			</nav>
			<Outlet />
		</>
	);
}

export default App;
