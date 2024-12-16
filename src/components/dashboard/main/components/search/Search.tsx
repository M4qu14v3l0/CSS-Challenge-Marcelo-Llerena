import styles from "./Search.module.css";
import { RiSearch2Line } from "@remixicon/react";

export const Search = () => {
  return (
    <div className={styles.inputDiv}>
      <RiSearch2Line size={15} style={{ color: "var(--icon-color)" }} />
      <input placeholder="Search" />
    </div>
  );
};
