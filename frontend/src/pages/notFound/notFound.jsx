import { Link } from "react-router-dom";
import styles from "../notFound/notFound.module.scss";
import numberZero from "../../assets/img/number-zero.png";
import numberFour from "../../assets/img/number-four.png";
import "bootstrap/dist/css/bootstrap.min.css";
import ghostBody from "../../assets/img/ghost-body.png";
import ghostLeftLeg from "../../assets/img/ghost-left-leg.png";
import ghostRightLeg from "../../assets/img/ghost-right-leg.png";
import ghostLeftEye from "../../assets/img/ghost-left-eye.png";
import ghostRightEye from "../../assets/img/ghost-right-eye.png";
import ghostPartOfLeg from "../../assets/img/ghost-part-of-leg.png";
import { useTranslation } from "react-i18next";

/* eslint-disable react/no-unknown-property */
const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className={styles["error-container"]}>
      <h1 className={styles["error-heading"]}>{t("notFound.heading")}</h1>
      <div className={styles["error-container"]}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
          <rect width="100" height="100" fill="blue" />
        </svg>
      </div>
      <p className={styles["error-description"]}>{t("notFound.description")}</p>
      <div className={styles["number-display"]}>
        <img
          src={numberFour}
          className={styles["number-image"]}
          alt="Number Four"
        />
        <img
          src={numberZero}
          className={styles["number-image"]}
          alt="Number Zero"
        />
        <img
          src={numberFour}
          className={styles["number-image"]}
          alt="Number Four"
        />
        <img src={ghostBody} alt="" className={styles["ghost-body"]} />
        <img src={ghostRightLeg} alt="" className={styles["ghost-right-leg"]} />
        <img src={ghostLeftLeg} alt="" className={styles["ghost-left-leg"]} />
        <img src={ghostRightEye} alt="" className={styles["ghost-right-eye"]} />
        <img src={ghostLeftEye} alt="" className={styles["ghost-left-eye"]} />
        <img
          src={ghostPartOfLeg}
          alt=""
          className={styles["ghost-part-of-leg"]}
        />
        <Link to="/" className={styles["back-to-safety"]}>
          <button className={styles["error-button"]}>
            {t("notFound.buttonText")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
