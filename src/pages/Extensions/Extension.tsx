import { useContext, useState } from "react";
import "./extension.css";
import Cards, { type dataI } from "../../components/Cards";
import dataCards from "../../data.json";
import { DarkModeContext } from "../../context/DarkModeContext";

function Extension() {
	const [data, setData] = useState<dataI[]>(dataCards);
	const [filterTags, setFilterTags] = useState<string | null>("All");
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

	const handleClickActive = () => {
		setFilterTags("Active");
	};

	const handleClickInactive = () => {
		setFilterTags("Inactive");
	};

	const handleClickAll = () => {
		setFilterTags("All");
	};

	const filterdData = data.filter((el) => {
		if (filterTags === "All") {
			return true;
		}
		if (filterTags === "Active") {
			return el.isActive === true;
		}
		if (filterTags === "Inactive") {
			return el.isActive === false;
		}
		return true;
	});

	return (
		<body className={darkMode ? "container-dark" : "container-light"}>
			<header className="container-toggle">
				<figure>
					<img src="/images/cercle.png" alt="rouage" />
					<figcaption>
						<h2>Extensions</h2>
					</figcaption>
				</figure>
				<button onClick={toggleDarkMode} id="toggleTheme" type="button">
					{darkMode === true ? "🌑" : "🌕"}
				</button>
			</header>
			<nav className="container-extension-list">
				<h1>Extensions List</h1>
				<ul>
					<li>
						<button
							onClick={handleClickAll}
							type="button"
							className={filterTags === "All" ? "active-filter" : ""}
						>
							All
						</button>
					</li>
					<li>
						<button
							onClick={handleClickActive}
							type="button"
							className={filterTags === "Active" ? "active-filter" : ""}
						>
							Active
						</button>
					</li>
					<li>
						<button
							onClick={handleClickInactive}
							type="button"
							className={filterTags === "Inactive" ? "active-filter" : ""}
						>
							Inactive
						</button>
					</li>
				</ul>
			</nav>
			<Cards filterData={filterdData} fullData={data} setData={setData} />
		</body>
	);
}
export default Extension;
