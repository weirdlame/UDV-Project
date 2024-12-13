import React from "react";
import styles from "./WelcomePageContainer.module.scss";
import { useTranslation } from "react-i18next";
import Instruction from "../../components/Instruction/Instruction.jsx";
import AuthButton from "../../components/AuthButton/AuthButton.jsx";

const WelcomePageContainer = ({ onGoToCreateAvatar }) => {
  const { t } = useTranslation();

  return (
    <div className={styles["welcome-page-container"]}>
      <h1 className={styles["welcome-page-title"]}>
        {t("welcome-page.title")}
      </h1>
      <Instruction />
      <div className="auth-buttons-container">
        <AuthButton
          onClick={onGoToCreateAvatar}
          type="register"
          text={t("welcome-page.buttons.button-sign-up")}
        ></AuthButton>
        <AuthButton
          onClick={onGoToCreateAvatar}
          type="login"
          text={t("welcome-page.buttons.button-log-in")}
        ></AuthButton>
      </div>
    </div>
  );
};

export default WelcomePageContainer;
