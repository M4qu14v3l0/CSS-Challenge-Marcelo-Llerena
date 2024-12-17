import React from "react";
import styles from "./CardGrid.module.css";

interface CardGridProps {
  children: React.ReactNode;
}

export const CardGrid = ({ children }: CardGridProps) => {
  return <div className={styles.cardGrid}>{children}</div>;
};
