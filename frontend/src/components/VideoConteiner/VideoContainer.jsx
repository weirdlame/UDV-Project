import React from "react";
import styles from "./VideoContainer.module.scss";
import { useTranslation } from "react-i18next";

const VideoContainer = ({ videoUrl }) => {
  const { t } = useTranslation();
  if (!videoUrl) return null; // Возвращаем null, если нет видео URL

  return (
    <div className={styles["video-container"]}>
      <h2>{t("downloadPage.videoTitle")}</h2>
      <video width="100%" controls>
        <source src={videoUrl} type="video/mp4" />
        <track default kind="captions" srcLang="en" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoContainer;
