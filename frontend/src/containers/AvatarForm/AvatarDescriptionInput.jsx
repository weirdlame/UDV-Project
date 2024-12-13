import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./AvatarForm.module.scss";

const AvatarDescriptionInput = ({ description, setDescription }) => {
  const { t } = useTranslation();

  return (
    <div className="avatar-description-input">
      <label htmlFor="description">{t("avatarForm.descriptionLabel")}</label>
      <textarea
        id="description"
        className={styles["avatar-description-textarea"]}
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        required
        rows="10"
      />
    </div>
  );
};

export default AvatarDescriptionInput;
