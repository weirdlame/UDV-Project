import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes";
import WelcomePageContainer from "../../containers/WelcomePageContainer/WelcomePageContainer.jsx";
import styles from "./WelcomePage.module.scss";
import AnimatedCircles from "../../components/AnimatedCircles/AnimatedCircles.jsx";

const WelcomePage = () => {
  const navigate = useNavigate();

  const goToCreateAvatar = () => {
    navigate(routes.avatarCreation);
  };

  return (
    <div className={styles["welcome-page"]}>
      {/* SVG Gooey Filter */}
      <div className={styles["gradient-bg"]}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      </div>
      <AnimatedCircles />
      <WelcomePageContainer onGoToCreateAvatar={goToCreateAvatar} />
    </div>
  );
};

export default WelcomePage;
