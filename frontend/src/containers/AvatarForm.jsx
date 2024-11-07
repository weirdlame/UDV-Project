import React, { useState } from "react";
import AvatarDescriptionInput from "../components/AvatarDescriptionInput";
import ScenarioInput from "../components/ScenarioInput";
import '../styles/main.scss';

const AvatarForm = () => {
  const [description, setDescription] = useState("");
  // Инициализируем состояние для описания аватара пустой строкой.
  // Хук useState добавляет состояние в функциональный компонент,
  // что позволяет отслеживать и изменять значение переменной description, изменяем через функцию setDescription.
  // Она вызывается в AvatarDescriptionInput при взаимодейтсвии с полем ввода: onChange={(e) => setScenario(e.target.value)}
  // В отличие от классовых компонентов, функциональные компоненты не имеют
  // методов жизненного цикла, поэтому для управления побочными эффектами
  // (например, запросами к API) можно использовать хук useEffect.
  const [scenario, setScenario] = useState("");
  // Аналогично: onChange={(e) => setScenario(e.target.value)}
  // Комментарий 23465
  // Rj
  const handleSubmit = (e) => {
    e.preventDefault();
    // Предотвращение стандартных действий браузера
    setDescription("");
    setScenario("");
    // Очистка формы после отправки
  };

  return (
    <div className="avatar-form">
      <h2>Create Your Avatar</h2>
      <form onSubmit={handleSubmit}>
        <AvatarDescriptionInput
          description={description}
          setDescription={setDescription}
        />
        <ScenarioInput scenario={scenario} setScenario={setScenario} />
        <button type="submit" className="btn">Generate Avatar</button>
      </form>
    </div>
  );
};

export default AvatarForm;