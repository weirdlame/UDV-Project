import React, { useState } from "react";
import AvatarDescriptionInput from "./AvatarDescriptionInput.jsx";
import ScenarioInput from "./ScenarioInput.jsx";
import { useTranslation } from "react-i18next";
import styles from "./AvatarForm.module.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AvatarFormContainer = () => {
  const [params, setParams] = useState({ gender: "" });
  const [scenario, setScenario] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  const navigate = useNavigate();

  const validation = () => {
    if (!params.gender) {
      toast.error("❗ Пожалуйста, выберите параметры желаемого аватара.");
      setLoading(false);
      return false;
    }

    if (!scenario.trim()) {
      toast.error("❗ Пожалуйста, введите текст, произносимый аватаром.");
      setLoading(false);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validation();
    if (!isValid) return;
    setLoading(true); // Устанавливаем состояние загрузки
    const formData = {
      ...params,
      scenario,
    }; // Собираем данные для отправки на бэк

    try {
      // Имитация задержки для демонстрации
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Задержка в 2 секунды

      // Заглушка для имитации ответа с сервером
      const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4"; // Заглушка с видео URL
      setVideoUrl(videoUrl); // Сохраняем ссылку на видео

      setParams({ gender: "" }); // Очищаем поля
      setScenario("");

      // Перенаправление на страницу с результатом и передача videoUrl через state
      navigate("/download-avatar", { state: { videoUrl, formData } }); // Передаем videoUrl в state
    } catch (error) {
      setLoading(false); // Снимаем состояние загрузки
      console.error("Ошибка при отправке запроса:", error);
      toast.error("❌ Ошибка при отправке запроса.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <AvatarForm
        params={params}
        setParams={setParams}
        scenario={scenario}
        setScenario={setScenario}
        handleSubmit={handleSubmit}
        loading={loading}
        videoUrl={videoUrl}
        goToCreateAvatar={() => navigate("/avatar-creation")}
      />
    </div>
  );
};

const AvatarForm = ({
  params,
  setParams,
  scenario,
  setScenario,
  handleSubmit,
  loading,
  videoUrl,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles["avatar-form"]}>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2 className={styles.title}>{t("avatarForm.title")}</h2>

          <div className="row mb-5">
            <div className="col-12">
              <AvatarDescriptionInput
                params={params}
                setParams={setParams}
                className={"avatar-description-input"}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <ScenarioInput
                scenario={scenario}
                setScenario={setScenario}
                className={"scenario-input"}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <button
                type="submit"
                className={`${styles["form-btn"]} ${loading ? "btn-loading" : "btn-primary"}`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <span>{t("avatarForm.loadingButton")}</span>
                  </>
                ) : (
                  t("avatarForm.submitButton")
                )}
              </button>
            </div>
          </div>
        </form>

        {videoUrl && (
          <div className="video-container">
            <h3>{t("avatarForm.videoTitle")}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarFormContainer;
