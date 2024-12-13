import React from "react";
import { useTranslation } from "react-i18next";
import step1Number from "../../assets/img/StepNum1.png";
import step2Number from "../../assets/img/StepNum2.png";
import step1Image from "../../assets/img/step1.png";
import step2Image from "../../assets/img/step2.png";
import styles from "./Instruction.module.scss";

const Instruction = () => {
  const { t } = useTranslation();
  return (
    <div className={styles["instruction-container"]}>
      <div className={styles["step1"]}>
        <img className={styles["step"]} src={step1Number} alt="" />
        <img src={step1Image} alt="" className="step1Image" />
        <p className={styles["title"]}>{t("welcome-page.instruction.step1")}</p>
      </div>
      <div className={styles["step2"]}>
        <img className={styles["step"]} src={step2Number} alt="" />
        <img src={step2Image} alt="" className="step2Image" />
        <p className={styles["title"]}>{t("welcome-page.instruction.step2")}</p>
      </div>
    </div>
  );
};

export default Instruction;
