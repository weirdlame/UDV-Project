import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes";
import WelcomePageContainer from "../../containers/WelcomePageContainer/WelcomePageContainer.jsx";
import styles from "./WelcomePage.module.scss";

const WelcomePage = () => {
  const navigate = useNavigate();

  const goToCreateAvatar = () => {
    navigate(routes.avatarCreation);
  };

  return (
    <div className={styles["welcome-page"]}>
      <WelcomePageContainer onGoToCreateAvatar={goToCreateAvatar} />
    </div>
  );
};

export default WelcomePage;
