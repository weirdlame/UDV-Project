import { useState, useEffect } from "react";
import NavBar from "../components/NavBar.jsx";

const NavBarContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [viewportType, setViewportType] = useState("desktop");

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setViewportType("mobile");
        setIsMenuOpen(false); // Скрываем меню при смене устройства
      } else {
        setViewportType("desktop");
        setIsMenuOpen(false); // Скрываем меню на десктопе
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <NavBar
      isMenuOpen={isMenuOpen}
      viewportType={viewportType}
      onToggleMenu={handleToggleMenu}
    />
  );
};

export default NavBarContainer;
