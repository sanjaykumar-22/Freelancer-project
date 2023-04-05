import React from "react";
import { NavLink } from "react-router-dom";

import "./MainNavigation.css";

const MainNavigation = (props) => (
  <header className="main-navigation">
    <nav>
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>        
      </ul>
    </nav>
  </header>
);

export default MainNavigation;