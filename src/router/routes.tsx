import Extension from "../pages/Extensions/Extension"
import Qrc from "../pages/QRC/Qrc"

const routes = [
  {
    path: "qrc",
    element: <Qrc/>
  },
  {
    path: "extension",
    element: <Extension/>
  }
]

export default routes