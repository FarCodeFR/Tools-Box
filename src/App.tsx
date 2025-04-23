import { NavLink, Outlet } from "react-router-dom";
import "./app.css";
function App() {
	return (
		<>
			<nav className="navigation-menu">
				<h1>Bac à Sable</h1>
				<div>
					<ul>
						<NavLink to="/">
							<li>Accueil</li>
						</NavLink>
						<NavLink to="qrc">
							<li>QRC</li>
						</NavLink>
						<NavLink to="extension">
							<li>Extension</li>
						</NavLink>
					</ul>
				</div>
			</nav>
			<Outlet />
		</>
	);
}

export default App;
