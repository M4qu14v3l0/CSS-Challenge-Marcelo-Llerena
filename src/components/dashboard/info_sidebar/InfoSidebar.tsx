import styles from "./InfoSidebar.module.css";
import { Chart } from "./components/chart/Chart";
import { BuySpace } from "./components/buy-space/BuySpace";
import { Profile } from "../../shared/profile/Profile";
import { RiBarChart2Line } from "@remixicon/react";
import useToggle from "../../../hooks/useToggle";
import OpenIcon from "../../shared/openIcon/OpenIcon";

export default function InfoSidebar() {
  const { handleToggle, toggle } = useToggle();

  return (
    <>
      <div
        className={`${styles.sidebarContainer} ${
          toggle ? styles.sidebarResponsive__show : ""
        }`}
      >
        <Profile />
        <Chart />
        <BuySpace />
        <OpenIcon
          styleProps={styles.openIconInfo}
          toggle={toggle}
          handleToggle={handleToggle}
          toggleOffIcon={<RiBarChart2Line size={10} color="white" />}
          toggleOnIcon={<RiBarChart2Line size={10} color="white" />}
        />
      </div>
    </>
  );
}
