import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./router/routes.tsx";
import { DarkModeProvider } from "./context/DarkModeContext.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: routes,
	},
]);

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<DarkModeProvider>
			<RouterProvider router={router} />
		</DarkModeProvider>
	</StrictMode>,
);
