import { RiMoonClearLine, RiSquareLine, RiSunLine } from "@remixicon/react";
import "./Profile.css";
import { useState } from "react";
export const Profile = () => {
  const [darkMode, setDarkMode] = useState(false); // Estado para el tema

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Alterna entre light mode y dark mode
    document.body.classList.toggle("dark-mode", !darkMode); // Añade o quita la clase en <body>
  };

  return (
    <section className="info-sidebar__row-1">
      <div className="info-sidebar__icons">
        <div onClick={toggleDarkMode}>
          {darkMode ? (
            <RiSunLine size={15} color="var(--text-h2)" />
          ) : (
            <RiMoonClearLine size={15} color="var(--text-h2)" />
          )}
        </div>
        <RiSquareLine />
      </div>

      <div className="info-sidebar__profile">
        <p>Name</p>
        <img src="https://avatar.iran.liara.run/public/1" />
      </div>
    </section>
  );
};
