import React from "react";

const AvatarDescriptionInput = ({ description, setDescription }) => {
  // Деструктурируем объект, содержащий описание, который приходит на вход AvatarDescriptionInput
  return (
    <div className="avatar-description-input">
      <label htmlFor="description">Avatar Description:</label>
      <textarea
        id="description"
        className="avatar-description-textarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        // e.target.value — значение объекта, на котором произошло событие
        // onChange - обработчик события для элементов вроде: input, textaria, то есть мы прокидываем значение в setDescription
        //https://learn.javascript.ru/obtaining-event-object
        placeholder="Enter a description of your avatar..."
        required
        rows="10"
      />
    </div>
  );
};

export default AvatarDescriptionInput;
