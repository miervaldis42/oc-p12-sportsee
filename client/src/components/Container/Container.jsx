// Imports
import { Outlet } from "react-router-dom";

// Stylesheet
import styles from "./Container.module.scss";

// Component
function Container() {
  return (
    <main className={styles.container}>
      <Outlet />
    </main>
  );
}

export default Container;
