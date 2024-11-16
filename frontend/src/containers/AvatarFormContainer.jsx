import React, { useState } from "react";
import AvatarDescriptionInput from "../components/AvatarDescriptionInput.jsx";
import ScenarioInput from "../components/ScenarioInput.jsx";
import { useTranslation } from "react-i18next";
import "../styles/main.scss";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Подключаем Bootstrap если не подключен

const AvatarFormContainer = () => {
  const [description, setDescription] = useState("");
  const [scenario, setScenario] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Устанавливаем состояние загрузки

    try {
      // Имитация задержки для демонстрации
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Задержка в 2 секунды

      // Заглушка для имитации ответа с сервером
      const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4"; // Заглушка с видео URL
      setVideoUrl(videoUrl); // Сохраняем ссылку на видео

      setDescription(""); // Очищаем поля
      setScenario("");

      // Перенаправление на страницу с результатом и передача videoUrl через state
      navigate("/download-avatar", { state: { videoUrl } }); // Передаем videoUrl в state
    } catch (error) {
      setLoading(false); // Снимаем состояние загрузки
      console.error("Ошибка при отправке запроса:", error);
      alert("avatarForm.errorMessage");
    }
  };

  return (
    <div>
      <AvatarForm
        description={description}
        setDescription={setDescription}
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
  description,
  setDescription,
  scenario,
  setScenario,
  handleSubmit,
  loading,
  videoUrl,
  goToCreateAvatar,
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
        <button
          type="submit"
          className={`btn ${loading ? "btn-loading" : "btn-primary"}`}
          disabled={loading}
          onClick={goToCreateAvatar}
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
      </form>

      {videoUrl && (
        <div className="video-container">
          <h3>{t("avatarForm.videoTitle")}</h3>
        </div>
      )}
    </div>
  );
};

export default AvatarFormContainer;
