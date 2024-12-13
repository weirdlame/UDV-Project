import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./AvatarForm.module.scss";

const ScenarioInput = ({ scenario, setScenario }) => {
  const { t } = useTranslation();

  return (
    <div className="scenario-input">
      <label htmlFor="scenario">{t("avatarForm.scenarioLabel")}</label>
      <br />
      <textarea
        id="scenario"
        className={styles["scenario-input-textarea"]}
        value={scenario}
        onChange={(e) => setScenario(e.target.value)}
        placeholder={t("avatarForm.scenarioPlaceholder")}
        required
        rows="10"
        cols="50"
      />
    </div>
  );
};

export default ScenarioInput;
