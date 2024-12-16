import styles from "./App.module.css";
import InfoSidebar from "./components/dashboard/info_sidebar/InfoSidebar";

import Main from "./components/dashboard/main/Main";
import Sidebar from "./components/dashboard/sidebar/Sidebar";

function App() {
  return (
    <div className={styles.appContainer}>
      <Sidebar />
      <Main />
      <InfoSidebar />
    </div>
  );
}

export default App;
