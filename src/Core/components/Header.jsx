import { useNavigate } from "react-router-dom";
import APP_ROUTES from "../constants/Routs";
import "../styles/header.css";
import LogOutAPI from "../../Data/DataSource/API/common/LogOutAPI";
import LogOutAllAPI from "../../Data/DataSource/API/common/LogOutAllAPI.jsx";

export default function Header() {
  const navigate = useNavigate();
  const toggleDropdown = () => {};
    return (
      <header>
        <div className="flex-container">
          <ul className="left-list">
            <li
              onClick={() => {
                navigate(APP_ROUTES.SPLASH);
              }}
            >
              home
            </li>
            <li>news</li>
          </ul>
          <div className="dropdown-toggle" onClick={toggleDropdown}>
            <div>{"username"}</div>
            <ul className="dropdown-menu">
              <li onClick={async () => {}}>Profile</li>
              <li
                onClick={async () => {
                  await LogOutAPI();
                  navigate(APP_ROUTES.SPLASH);
                }}
              >
                logout
              </li>
              <li
                onClick={async () => {
                  await LogOutAllAPI();
                  navigate(APP_ROUTES.SPLASH);
                }}
              >
                logout all
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
}
