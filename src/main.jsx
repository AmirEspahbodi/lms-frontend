import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "../styles/index.css";
import {AuthContextProvider} from "./Core/contexts/root-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </React.StrictMode>
);
