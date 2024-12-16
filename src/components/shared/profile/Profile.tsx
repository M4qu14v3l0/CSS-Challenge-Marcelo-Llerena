import { RiMoonClearLine, RiSquareLine, RiSunLine } from "@remixicon/react";
import { useState } from "react";

import styles from "./Profile.module.css";

interface ProfileProps {
  showProfile?: string;
}

export const Profile = ({ showProfile }: ProfileProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <section className={`${styles.profileContainer} ${showProfile}`}>
      <div className={styles.profileIcons}>
        <div onClick={toggleDarkMode}>
          {darkMode ? (
            <RiSunLine size={15} color="var(--text-h2)" />
          ) : (
            <RiMoonClearLine size={15} color="var(--text-h2)" />
          )}
        </div>
        <RiSquareLine />
      </div>

      <div className={styles.profileUser}>
        <p>Name</p>
        <img src="https://avatar.iran.liara.run/public/1" />
      </div>
    </section>
  );
};
