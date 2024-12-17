import styles from "./SidebarLinks.module.css";
import { Link } from "../../interfaces/link.interface";
import useSelectedLink from "../../../../../hooks/useSelected";

interface SidebarLinksProps {
  links: Link[];
}
export default function SidebarLinks({ links }: SidebarLinksProps) {
  const { handleSelect, selectedLink } = useSelectedLink("Home");
  return (
    <ul className={styles.linksContainer}>
      <li></li>
      {links.map((link) => (
        <li
          onClick={() => handleSelect(link.label)}
          className={selectedLink === link.label ? styles.linkSelected : ""}
          key={link.id}
        >
          {link.icon}
          {link.label}
        </li>
      ))}
    </ul>
  );
}
