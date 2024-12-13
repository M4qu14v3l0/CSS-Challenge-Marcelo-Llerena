import { useState } from "react";
import "./InfoSidebarResponsive.css";
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
      className={`info-sidebar-responsive ${
        toggle ? "info-sidebar-responsive--show" : ""
      }`}
    >
      <div onClick={handleToggle} className="open-icon-info">
        <RiBarChart2Line size={10} color="white" />
      </div>
      <Chart />
      <BuySpace />
    </div>
  );
}
