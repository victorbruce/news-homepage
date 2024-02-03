import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./layouts/AppLayout.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppLayout>
      <App />
    </AppLayout>
  </React.StrictMode>
);
