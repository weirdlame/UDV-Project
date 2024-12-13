import React from "react";
import PropTypes from "prop-types";
import styles from "./AuthButton.module.scss";
import cn from "classnames";

const AuthButton = ({ text, onClick, type }) => {
  return (
    <button
      className={cn(styles["auth-btn"], {
        [styles["login-btn"]]: type === "login",
        [styles["register-btn"]]: type === "register",
      })}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

AuthButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["login", "register"]).isRequired,
};

export default AuthButton;
