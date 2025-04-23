import { createContext, useEffect, useState } from "react";

type DarkModeContextValue = {
	darkMode: boolean;
	toggleDarkMode: () => void;
};
const DarkModeContext = createContext<DarkModeContextValue>({
	darkMode: false,
	toggleDarkMode: () => {},
});

function DarkModeProvider(props: { children: React.ReactNode }) {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode((prev) => {
			const newValue = !prev;
			localStorage.setItem("darkMode", String(newValue));
			return newValue;
		});
	};
	useEffect(() => {
		const storedMode = localStorage.getItem("darkMode");
		if (storedMode !== null) {
			setDarkMode(storedMode === "true");
		}
	}, []);

	return (
		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{props.children}
		</DarkModeContext.Provider>
	);
}

export { DarkModeContext, DarkModeProvider };
