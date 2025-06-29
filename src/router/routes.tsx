import Extension from "../pages/Extensions/Extension";
import Generator from "../pages/Generator/Generator";
import Shop from "../pages/Shop/Shop";

const routes = [
  {
    path: "extension",
    element: <Extension />,
  },
  {
    path: "generator",
    element: <Generator />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
];

export default routes;
