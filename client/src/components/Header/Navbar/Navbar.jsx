// Imports
import { NavLink } from "react-router-dom";
import ROUTESLIST from "../../../router/routesList";

// Stylesheet
import styles from "./Navbar.module.scss";

// 'Navbar' Component
function Navbar() {
  return (
    <nav aria-label="Main navbar" className={styles.navbar}>
      <ul aria-label="List of navigation links">
        <li aria-label={ROUTESLIST.home.path.eng}>
          <NavLink
            to={ROUTESLIST.home.path}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            {ROUTESLIST.home.name.fr}
          </NavLink>
        </li>
        <li aria-label={ROUTESLIST.profile.path.eng}>
          <NavLink
            to={ROUTESLIST.profile.path}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            {ROUTESLIST.profile.name.fr}
          </NavLink>
        </li>
        <li aria-label={ROUTESLIST.settings.path.eng}>
          <NavLink
            to={ROUTESLIST.settings.path}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            {ROUTESLIST.settings.name.fr}
          </NavLink>
        </li>
        <li aria-label={ROUTESLIST.blog.path.eng}>
          <NavLink
            to={ROUTESLIST.blog.path}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            {ROUTESLIST.blog.name.fr}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
