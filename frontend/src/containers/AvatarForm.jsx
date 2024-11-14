import React, { useState } from "react";
import AvatarDescriptionInput from "../components/AvatarDescriptionInput.jsx";
import ScenarioInput from "../components/ScenarioInput.jsx";
import { useTranslation } from "react-i18next";
import "../styles/main.scss";

const AvatarFormContainer = () => {
  const [description, setDescription] = useState("");
  const [scenario, setScenario] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDescription("");
    setScenario("");
  };

  return (
    <div>
      <AvatarForm
        description={description}
        setDescription={setDescription}
        scenario={scenario}
        setScenario={setScenario}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

const AvatarForm = ({
  description,
  setDescription,
  scenario,
  setScenario,
  handleSubmit,
}) => {
  const { t } = useTranslation();
  return (
    <div className="avatar-form">
      <h2>{t("avatarForm.title")}</h2>
      <form onSubmit={handleSubmit}>
        <AvatarDescriptionInput
          description={description}
          setDescription={setDescription}
        />
        <ScenarioInput scenario={scenario} setScenario={setScenario} />
        <button type="submit" className="btn">
          {t("avatarForm.submitButton")}
        </button>
      </form>
    </div>
  );
};

export default AvatarFormContainer;
