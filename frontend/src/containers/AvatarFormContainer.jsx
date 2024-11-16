import React, { useState } from "react";
import AvatarDescriptionInput from "../components/AvatarDescriptionInput.jsx";
import ScenarioInput from "../components/ScenarioInput.jsx";
import { useTranslation } from "react-i18next";
import "../styles/main.scss";
import { useNavigate } from "react-router-dom";

const AvatarFormContainer = () => {
  const [description, setDescription] = useState("");
  const [scenario, setScenario] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null); // Для хранения ссылки на видео

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
      alert("avatarForm.errorMessage"); // Используйте t() для перевода сообщения об ошибке
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
        goToCreateAvatar={() => navigate("/avatar-creation")} // Передаем функцию для перехода
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
          className="btn"
          disabled={loading}
          onClick={goToCreateAvatar}
        >
          {loading
            ? t("avatarForm.loadingButton")
            : t("avatarForm.submitButton")}
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
