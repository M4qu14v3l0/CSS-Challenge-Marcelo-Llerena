import "./App.css";
import InfoSidebar from "./components/info_sidebar/InfoSidebar";
import InfoSidebarResponsive from "./components/info_sidebar/components/responsive/InfoSidebarResponsive";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="app__container">
      <Sidebar />
      <Main />
      <InfoSidebar />
      <InfoSidebarResponsive />
    </div>
  );
}

export default App;
