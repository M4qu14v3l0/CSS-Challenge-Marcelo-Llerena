import { useState } from "react";
import styles from "./InfoSidebarResponsive.module.css";
import { RiBarChart2Line } from "@remixicon/react";
import { Chart } from "../chart/Chart";
import { BuySpace } from "../buy-space/BuySpace";
export default function InfoSidebarResponsive() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={`${styles.sidebarResponsive} ${
        toggle ? styles.sidebarResponsive__show : ""
      }`}
    >
      <div onClick={handleToggle} className={styles.openIconInfo}>
        <RiBarChart2Line size={10} color="white" />
      </div>
      <Chart />
      <BuySpace />
    </div>
  );
}
