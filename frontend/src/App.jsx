import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import routes from "./routes/routes.js";
import WelcomePage from "./pages/WelcomePage/WelcomePage.jsx";
import AvatarCreationPage from "./pages/AvatarCreationPage/AvatarCreationPage.jsx";
import DownloadPage from "./pages/DownloadPage/DownloadPage.jsx";
import NavBarContainer from "./containers/NavBarContainer.jsx";
import NotFound from "./pages/notFound/notFound.jsx";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
};

const MainLayout = () => {
  const location = useLocation();

  const hideNavBarPages = [routes.welcome, routes.notFound];
  const shouldHideNavBar = hideNavBarPages.includes(location.pathname);

  return (
    <>
      {!shouldHideNavBar && <NavBarContainer />}
      <Routes>
        <Route path={routes.welcome} element={<WelcomePage />} />
        <Route path={routes.avatarCreation} element={<AvatarCreationPage />} />
        <Route path={routes.downloadAvatar} element={<DownloadPage />} />
        <Route path={routes.notFound} element={<NotFound />} />
        <Route path="*" element={<Navigate to={routes.notFound} />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
