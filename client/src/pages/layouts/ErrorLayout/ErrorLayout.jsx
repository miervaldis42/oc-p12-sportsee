// Components
import LogoArea from "../../../components/Header/LogoArea/LogoArea";

// Stylesheet
import styles from "./ErrorLayout.module.scss";

// Layout
function ErrorLayout({ children }) {
  return (
    <main className={styles["error-layout"]}>
      <LogoArea />

      <>{children}</>
    </main>
  );
}

export default ErrorLayout;
