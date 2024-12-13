import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import routes from "./routes/routes.js";
import WelcomePage from "./pages/WelcomePage/WelcomePage.jsx";
import AvatarCreationPage from "./pages/AvatarCreationPage/AvatarCreationPage.jsx";
import DownloadPage from "./pages/DownloadPage.jsx";
import NavBarContainer from "./containers/NavBarContainer.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.welcome} element={<WelcomePage />} />
        <Route path={routes.avatarCreation} element={<AvatarCreationPage />} />
        <Route path={routes.downloadAvatar} element={<DownloadPage />} />
      </Routes>
      <NavBarContainerWithVisibility />
    </BrowserRouter>
  );
};

// Компонент для отображения NavBarContainer только на нужных страницах
const NavBarContainerWithVisibility = () => {
  const location = useLocation(); // Хук для получения текущего маршрута

  // Cкрываем меню на странице WelcomePage
  if (location.pathname === routes.welcome) return null;

  return <NavBarContainer />;
};

export default App;
