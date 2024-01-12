// Components
import SportsNav from "./SportsNav/SportsNav";

// Stylesheet
import styles from "./Sidebar.module.scss";

// 'Sidebar' Component
function Sidebar() {
  return (
    <aside id={styles.sidebar}>
      <SportsNav />

      <footer>Copyright - SportSee 2024</footer>
    </aside>
  );
}

export default Sidebar;
