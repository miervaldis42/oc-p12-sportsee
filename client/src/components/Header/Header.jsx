// Assets
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Brand } from "../../assets/brand.svg";

// Components
import Navbar from "./Navbar/Navbar";

// Stylesheet
import styles from "./Header.module.scss";

// 'Header' Component
function Header() {
  return (
    <header aria-label="Website header">
      <a href="/" aria-label="SportSee logo" className={styles["logo-area"]}>
        <Logo />
        <Brand />
      </a>

      <Navbar />
    </header>
  );
}

export default Header;
