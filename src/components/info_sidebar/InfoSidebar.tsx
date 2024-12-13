import "./InfoSidebar.css";
import { Chart } from "./components/chart/Chart";
import { BuySpace } from "./components/buy-space/BuySpace";
import { Profile } from "./components/profile/Profile";

export default function InfoSidebar() {
  return (
    <div className="info-sidebar">
      <Profile />
      <Chart />
      <BuySpace />
    </div>
  );
}
