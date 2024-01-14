// Assets
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { ReactComponent as Brand } from "../../../assets/brand.svg";

// Stylesheet
import styles from "./LogoArea.module.scss";

// Component
function LogoArea() {
  return (
    <a href="/" aria-label="SportSee logo" className={styles["logo-area"]}>
      <Logo />
      <Brand />
    </a>
  );
}

export default LogoArea;
