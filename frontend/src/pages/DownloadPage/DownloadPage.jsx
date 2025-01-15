import React from "react";
import { useLocation } from "react-router-dom";
import VideoContainer from "../../components/VideoConteiner/VideoContainer.jsx";
import { useTranslation } from "react-i18next";
import styles from "./DownloadPage.module.scss";
import downloadIcon from "../../assets/img/Icon.png";
import cn from "classnames";

const DownloadAvatarPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const videoUrl = location.state?.videoUrl;

  const handleDownload = () => {
    if (!videoUrl) return;

    // Проверяем, что это действительно ссылка на файл
    const isVideo = videoUrl.endsWith(".mp4"); // Для простоты, проверяем на расширение

    if (isVideo) {
      const link = document.createElement("a");
      link.href = videoUrl;
      link.download = "avatar_video.mp4"; // Можно сделать название файла динамическим, если нужно
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert(t("downloadPage.invalidFile"));
    }
  };

  return (
    <div className={cn(styles.downloadPage)}>
      <div className={styles.contentWrapper}>
        {videoUrl ? (
          <>
            <VideoContainer videoUrl={videoUrl} />
            <button
              className={styles.downloadButton}
              onClick={handleDownload}
              aria-label={t("downloadPage.button-download")}
            >
              <img
                src={downloadIcon}
                alt={t("downloadPage.downloadIconAlt")}
                className={styles.downloadIcon}
              />
              {t("downloadPage.button-download")}
            </button>
          </>
        ) : (
          <h2 className={styles.unavailableText}>
            {t("downloadPage.notGenerated.description")}
          </h2>
        )}
      </div>
    </div>
  );
};

export default DownloadAvatarPage;
