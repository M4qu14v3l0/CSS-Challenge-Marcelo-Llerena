import { Button } from "../../../../shared/button/Button";
import styles from "./BuySpace.module.css";

export const BuySpace = () => {
  return (
    <section className={styles.buySpace}>
      <div className={styles.imgGradient} />
      <div className={styles.buySpaceText}>
        <h4>Buy more space now!</h4>
        <p>Upgrade to cloud premium</p>
      </div>
      <Button label="Upgrade Account!" openModal={false} />
    </section>
  );
};
