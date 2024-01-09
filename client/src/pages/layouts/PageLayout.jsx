// Components
import Header from "../../components/Header/Header";

// Stylesheet
import styles from "./PageLayout.module.scss";

// Layout - Page
function PageLayout({ children }) {
  return (
    <>
      <Header />

      <main className={styles.container}>{children}</main>
    </>
  );
}

export default PageLayout;
