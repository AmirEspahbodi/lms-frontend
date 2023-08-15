import { useNavigate } from "react-router-dom";
import APP_ROUTES from "../constants/Routs.js";
import "../../../styles/header.css";
import LogOutAPI from "../../Data/DataSource/API/common/LogOutAPI.js";
import LogOutAllAPI from "../../Data/DataSource/API/common/LogOutAllAPI.js";
import {useContext} from "react";
import AuthContext from "../contexts/root-context.jsx";

export default function Header() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const toggleDropdown = () => {};
  if (authContext.isAuthenticated)
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
            <li
              onClick={() => {
                navigate(APP_ROUTES.SEARCH);
              }}
            >
              search
            </li>
          </ul>
          <div className="dropdown-toggle" onClick={toggleDropdown}>
            <div>{
              ((authContext.user.firstname===undefined || false ||authContext.user.firstname==='')
                &&
              (authContext.user.lastname===undefined || false ||authContext.user.lastname==='')) ?
                  authContext.user.username:
                  authContext.user.firstname+" "+authContext.user.lastname

            }</div>
            <ul className="dropdown-menu">
              <li onClick={async () => {}}>Profile</li>
              <li
                onClick={async () => {
                  await LogOutAPI();
                  authContext.authHandler({
                    isAuthenticated: false,
                    user: {
                      id: null,
                      username: null,
                      firstname: null,
                      lastname: null,
                      role: null,
                    }
                  });
                  navigate(APP_ROUTES.LOGIN_USER);
                }}
              >
                logout
              </li>
              <li
                onClick={async () => {
                  await LogOutAllAPI();
                  authContext.authHandler({
                    isAuthenticated: false,
                    user: {
                      id: null,
                      username: null,
                      firstname: null,
                      lastname: null,
                      role: null,
                    }
                  });
                  navigate(APP_ROUTES.LOGIN_USER);
                }}
              >
                logout all
              </li>
              {authContext.user.role % 2 === 0 && <li
                  onClick={async () => {
                    navigate(APP_ROUTES.STUDENT_FINANCIAL_AIDS);
                  }}
              >
                financial aids
              </li>}
            </ul>
          </div>
        </div>
      </header>
    );
  else return (
      <header>
        <div className="flex-container">
          <ul className="left-list">
            <li> elearning system </li>
            <li
                onClick={() => {
                  navigate(APP_ROUTES.SEARCH);
                }}
            >
              search
            </li>
          </ul>
          <div style={{display:'flex', gap:'10px'}}>
            <div  onClick={() => {
              navigate(APP_ROUTES.LOGIN_USER);
            }}>
              login
            </div>
            <div  onClick={() => {
              navigate(APP_ROUTES.SIGNUP_USER);
            }}>
              signup
            </div>
          </div>
        </div>
      </header>
  );
}
