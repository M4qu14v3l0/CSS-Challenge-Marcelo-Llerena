import styles from "./InfoSidebar.module.css";
import { Chart } from "./components/chart/Chart";
import { BuySpace } from "./components/buy-space/BuySpace";
import { Profile } from "../../shared/profile/Profile";
import InfoSidebarResponsive from "./components/responsive/InfoSidebarResponsive";

export default function InfoSidebar() {
  return (
    <>
      <div className={styles.sidebarContainer}>
        <Profile />
        <Chart />
        <BuySpace />
      </div>
      <InfoSidebarResponsive />
    </>
  );
}
