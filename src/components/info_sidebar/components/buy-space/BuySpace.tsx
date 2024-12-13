import "./BuySpace.css";
import { Button } from "../../../shared/button/Button";

export const BuySpace = () => {
  return (
    <section className="buy-space">
      <div className="img-gradient" />
      <div className="buy-space__text">
        <h4>Buy more space now!</h4>
        <p>Upgrade to cloud premium</p>
      </div>
      <Button label="Upgrade Account!" openModal={false} />
    </section>
  );
};
