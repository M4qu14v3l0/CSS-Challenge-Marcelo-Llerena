import React from "react";
import styles from "./Sections.module.css";

interface SectionProps {
  children: React.ReactNode;
  title: string;
  titleMargin?: string;
  marginBottom?: string;
}

export default function Section({
  children,
  title,
  titleMargin = "",
  marginBottom = "38px",
}: SectionProps) {
  return (
    <section className={styles.section} style={{ marginBottom }}>
      <h2 style={{ marginBottom: titleMargin }}>{title}</h2>
      {children}
    </section>
  );
}
