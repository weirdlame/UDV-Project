import React from "react";
import styles from "./AvatarForm.module.scss";
import { useTranslation } from "react-i18next";
import cn from "classnames";

const AvatarDescriptionInput = ({ params, setParams }) => {
  const { t } = useTranslation();
  const { gender } = params;
  const handleGenderChange = (selectedParam) =>
    setParams((prevParams) => ({ ...prevParams, gender: selectedParam }));
  return (
    <div className="avatar-description">
      <label>{t("avatarForm.descriptionText")}</label>
      <div className="gender-options d-flex gap-2">
        <button
          className={cn(styles.genderButton, styles.female, {
            [styles.selected]: gender === "male",
          })}
          onClick={() => handleGenderChange("male")}
        >
          {t("avatarForm.params.gender.male")}
        </button>
        <button
          className={cn(styles.genderButton, styles.male, {
            [styles.selected]: gender === "female",
          })}
          onClick={() => handleGenderChange("female")}
        >
          {t("avatarForm.params.gender.female")}
        </button>
      </div>
    </div>
  );
};

export default AvatarDescriptionInput;
