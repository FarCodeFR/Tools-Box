import Extension from "../pages/Extensions/Extension";
import Generator from "../pages/Generator/Generator";
import Qrc from "../pages/QRC/Qrc";
import Shop from "../pages/Shop/Shop";

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
  {
    path: "shop",
    element: <Shop />,
  },
];

export default routes;
