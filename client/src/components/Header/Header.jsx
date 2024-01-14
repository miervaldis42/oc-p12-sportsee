// Components
import LogoArea from "./LogoArea/LogoArea";
import Navbar from "./Navbar/Navbar";

// Stylesheet
import styles from "./Header.module.scss";

// 'Header' Component
function Header() {
  return (
    <header aria-label="Website header" className={styles.header}>
      <LogoArea />
      <Navbar />
    </header>
  );
}

export default Header;
