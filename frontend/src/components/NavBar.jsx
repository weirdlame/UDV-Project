import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import "../styles/main.scss";
import "boxicons/css/boxicons.min.css";

const NavBar = ({ isMenuOpen, viewportType, onToggleMenu }) => {
  const { t } = useTranslation(); // Подключение перевода

  return (
    <header className="header">
      {/* Кнопка меню для мобильных устройств */}
      <button
        id="menu-icon"
        className={cn({ active: isMenuOpen })}
        onClick={onToggleMenu}
      >
        <i className={isMenuOpen ? "bx bx-x" : "bx bx-menu"}></i>
      </button>

      {/* Навигация */}
      <nav
        className={cn({
          "mobile-menu": viewportType === "mobile",
          "desktop-menu": viewportType === "desktop",
          open: isMenuOpen && viewportType === "mobile",
        })}
      >
        <Link to="/" onClick={onToggleMenu}>
          {t("navBar.menu")}
        </Link>
        <Link to="/avatar-creation" onClick={onToggleMenu}>
          {t("navBar.createAvatar")}
        </Link>
        <Link to="/download-avatar" onClick={onToggleMenu}>
          {t("navBar.downloadAvatar")}
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
