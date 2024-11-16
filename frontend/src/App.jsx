import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes/routes.js";
import WelcomePage from "./pages/WelcomePage.jsx";
import AvatarCreationPage from "./pages/AvatarCreationPage.jsx";
import DownloadPage from "./pages/DownloadPage.jsx";
import NavBarContainer from "./containers/NavBarContainer.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <NavBarContainer />
      <Routes>
        <Route path={routes.welcome} element={<WelcomePage />} />
        <Route path={routes.avatarCreation} element={<AvatarCreationPage />} />
        <Route path={routes.downloadAvatar} element={<DownloadPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
