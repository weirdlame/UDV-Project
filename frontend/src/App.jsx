// Библиотеки
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Стили
import "./styles/main.scss";

// Страницы
import WelcomePage from "./pages/WelcomePage.jsx";
import AvatarCreationPage from "./pages/AvatarCreationPage.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import DownloadPage from "./pages/DownloadPage.jsx";

// Компоненты
import NavBarContainer from "./containers/NavBarContainer.jsx"; // Исправленный импорт

const App = () => {
  return (
    <BrowserRouter>
      <NavBarContainer /> {/* Используем компонент NavBar */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/avatar-creation" element={<AvatarCreationPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/download-avatar" element={<DownloadPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
