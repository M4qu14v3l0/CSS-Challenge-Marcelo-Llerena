import {
  RiHome2Line,
  RiFile2Line,
  RiHistoryFill,
  RiShare2Fill,
  RiFileTransferLine,
  RiDeleteBin2Line,
  RiAddLine,
} from "@remixicon/react";

import styles from "./Sidebar.module.css";
import useToggle from "../../../hooks/useToggle";
import SidebarLinks from "./components/sidebarLinks/SidebarLinks";
import OpenIcon from "./components/openIcon/OpenIcon";

import { Button } from "../../shared/button/Button";

const links = [
  {
    id: 1,
    icon: (
      <RiHome2Line
        size={15}
        style={{ color: "var(--text--secondary-color)" }}
      />
    ),
    label: "Home",
  },
  {
    id: 2,
    icon: (
      <RiFile2Line
        size={15}
        style={{ color: "var(--text--secondary-color)" }}
      />
    ),
    label: "My Files",
  },
  {
    id: 3,
    icon: (
      <RiHistoryFill
        size={15}
        style={{ color: "var(--text--secondary-color)" }}
      />
    ),
    label: "Recent Files",
  },
  {
    id: 4,
    icon: (
      <RiShare2Fill
        size={15}
        style={{ color: "var(--text--secondary-color)" }}
      />
    ),
    label: "Shared Filed",
  },
  {
    id: 5,
    icon: (
      <RiFileTransferLine
        size={15}
        style={{ color: "var(--text--secondary-color)" }}
      />
    ),
    label: "File Request",
  },
  {
    id: 6,
    icon: (
      <RiDeleteBin2Line
        size={15}
        style={{ color: "var(--text--secondary-color)" }}
      />
    ),
    label: "Trash",
  },
];

export default function Sidebar() {
  const { handleToggle, toggle } = useToggle();
  return (
    <>
      <aside
        className={`${styles.sidebar} ${
          toggle ? styles.sidebarResponsiveShow : ""
        }`}
      >
        <SidebarLinks links={links} />
        {/* Open Icon appears only in responsive mode */}
        <OpenIcon handleToggle={handleToggle} toggle={toggle} />
        <Button
          label="Create New"
          icon={<RiAddLine size={15} />}
          transparentBg={true}
          openModal={true}
        />
      </aside>
    </>
  );
}
