import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import step1Number from "../../assets/img/StepNum1.png";
import step2Number from "../../assets/img/StepNum2.png";
import step1Image from "../../assets/img/step1.png";
import step2Image from "../../assets/img/step2.png";
import { gsap } from "gsap"; // Импортируем GSAP
import styles from "./Instruction.module.scss";

const Instruction = () => {
  const { t } = useTranslation();

  // Используем useRef для элементов
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      step1Ref.current,
      { opacity: 0, transform: "translateX(-150px)" },
      {
        opacity: 1,
        transform: "translateX(0)",
        duration: 1.5,
        ease: "power3.out",
        force3D: true,
      },
    );

    gsap.fromTo(
      step2Ref.current,
      { opacity: 0, transform: "translateX(150px)" },
      {
        opacity: 1,
        transform: "translateX(0)",
        duration: 1.5,
        ease: "power3.out",
        delay: 0.1,
      },
    );
  }, []);

  return (
    <div className={styles["instruction-container"]}>
      <div className={styles["step1"]} ref={step1Ref}>
        <img className={styles["step"]} src={step1Number} alt="" />
        <img src={step1Image} alt="" className="step1Image" />
        <p className={styles["title"]}>{t("welcome-page.instruction.step1")}</p>
      </div>
      <div className={styles["step2"]} ref={step2Ref}>
        <img className={styles["step"]} src={step2Number} alt="" />
        <img src={step2Image} alt="" className="step2Image" />
        <p className={styles["title"]}>{t("welcome-page.instruction.step2")}</p>
      </div>
    </div>
  );
};

export default Instruction;
