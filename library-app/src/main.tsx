import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/ReduxStore.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  /*  Providing the store to the entire application */
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
