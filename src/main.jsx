import ReactDOM from "react-dom/client";
import App from "./App";
import "./Core/styles/index.css";
import {AuthContextProvider} from "./Core/contexts/root-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
