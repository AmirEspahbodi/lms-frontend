import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import APP_ROUTES from "../constants/Routs";
import useUser from "../customHooks";
import "../styles/header.css";

export default function Header() {
  const { user, authenticated } = useUser();
  const navigate = useNavigate();
  const toggleDropdown = () => {};
  if (authenticated)
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
            <div>{user.username}</div>
            <ul className="dropdown-menu">
              <li>Profile</li>
              <li>logout</li>
              <li>logout all</li>
            </ul>
          </div>
        </div>
      </header>
    );
}
