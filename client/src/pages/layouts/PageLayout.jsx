// Components
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

// Stylesheet
import styles from "./PageLayout.module.scss";

// Layout - Page
function PageLayout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />

      <main className={styles.container}>{children}</main>
    </>
  );
}

export default PageLayout;
