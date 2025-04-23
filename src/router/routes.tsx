import Extension from "../pages/Extensions/Extension";
import Generator from "../pages/Generator/Generator";
import Qrc from "../pages/QRC/Qrc";

const routes = [
	{
		path: "qrc",
		element: <Qrc />,
	},
	{
		path: "extension",
		element: <Extension />,
	},
	{
		path: "generator",
		element: <Generator />,
	},
];

export default routes;
