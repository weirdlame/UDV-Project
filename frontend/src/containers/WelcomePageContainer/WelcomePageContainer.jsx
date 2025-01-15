import React, { useState } from "react";
import styles from "./WelcomePageContainer.module.scss";
import { useTranslation } from "react-i18next";
import Instruction from "../../components/Instruction/Instruction.jsx";
import AuthButton from "../../components/AuthButton/AuthButton.jsx";
import AuthForm from "../../components/AuthForm/AuthForm.jsx";
import RegForm from "../../components/RegForm/RegForm.jsx";

const WelcomePageContainer = () => {
  const { t } = useTranslation();
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [showRegForm, setShowRegForm] = useState(false);

  const openAuthForm = () => setShowAuthForm(true);
  const closeAuthForm = () => setShowAuthForm(false);
  const openRegForm = () => setShowRegForm(true);
  const closeRegForm = () => setShowRegForm(false);

  return (
    <div className={styles["welcome-page-container"]}>
      <h1 className={styles["welcome-page-title"]}>
        {t("welcome-page.title")}
      </h1>
      <Instruction />
      <div className="auth-buttons-container">
        <AuthButton
          onClick={openAuthForm}
          type="register"
          text={t("welcome-page.buttons.button-sign-up")}
        ></AuthButton>
        <AuthButton
          onClick={openRegForm}
          type="login"
          text={t("welcome-page.buttons.button-log-in")}
        ></AuthButton>

        {showAuthForm && (
          <AuthForm handleClose={closeAuthForm} showModal={openAuthForm} />
        )}
        {showRegForm && (
          <RegForm handleClose={closeRegForm} showModal={openRegForm} />
        )}
      </div>
    </div>
  );
};

export default WelcomePageContainer;
