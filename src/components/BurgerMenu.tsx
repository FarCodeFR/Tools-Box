import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "../styles/burger-menu.css";
import { useState } from "react";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state: { isOpen: boolean }) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Menu
      isOpen={isOpen}
      onStateChange={(state) => handleStateChange(state)}
      right
      width={250}
      className="burger-menu"
    >
      <NavLink to="/" className="menu-item" onClick={closeMenu}>
        Accueil
      </NavLink>
      <NavLink to="/qrc" className="menu-item" onClick={closeMenu}>
        QRC
      </NavLink>
      <NavLink to="/extension" className="menu-item" onClick={closeMenu}>
        Extension
      </NavLink>
      <NavLink to="/generator" className="menu-item" onClick={closeMenu}>
        Générateur MDP
      </NavLink>
      <NavLink to="/shop" className="menu-item" onClick={closeMenu}>
        Boutique
      </NavLink>
    </Menu>
  );
}
export default BurgerMenu;
