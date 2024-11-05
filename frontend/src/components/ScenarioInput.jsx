import React from "react";

const ScenarioInput = ({ scenario, setScenario }) => {
  // Деструктурируем объект, содержащий сценарий, который приходит на вход AvatarDescriptionInput
  return (
    <div className="scenario-input">
      <label htmlFor="scenario">Scenario:</label>
      <br />
      <textarea
        id="scenario"
        className="scenario-input-textarea"
        value={scenario}
        onChange={(e) => setScenario(e.target.value)}
        placeholder="Enter a scenario..."
        required
        rows="10"
        cols="50"
      />
    </div>
  );
};

export default ScenarioInput;
