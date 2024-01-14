// Imports
import { useParams } from "react-router-dom";

// Components
import SportsNav from "./SportsNav/SportsNav";

// Stylesheet
import styles from "./Sidebar.module.scss";

// 'Sidebar' Component
function Sidebar() {
  const { userId } = useParams();

  return (
    <aside id={styles.sidebar}>
      {userId !== undefined && (userId === "12" || userId === "18") && (
        <SportsNav />
      )}

      <footer>Copyright - SportSee 2024</footer>
    </aside>
  );
}

export default Sidebar;
