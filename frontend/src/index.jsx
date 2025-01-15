import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Импортируем Provider
import App from "./App.jsx";
import "./styles/main.scss";
import "./i18n";
import store from "./store/slices/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
);
