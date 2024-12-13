import { useState } from "react";
import { Button } from "../shared/button/Button";
import "./Sidebar.css";

import {
  RiHome2Line,
  RiFile2Line,
  RiHistoryFill,
  RiShare2Fill,
  RiFileTransferLine,
  RiDeleteBin2Line,
  RiAddLine,
  RiArrowRightWideLine,
  RiArrowLeftWideLine,
} from "@remixicon/react";

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
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const [selectedLink, setSelectedLink] = useState("Home");

  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
  };

  return (
    <>
      <aside className="sidebar">
        <ul className="links-container">
          <li></li>
          {links.map((link) => (
            <li
              onClick={() => handleLinkClick(link.label)}
              className={selectedLink === link.label ? "link-selected" : ""}
            >
              {link.icon}
              {link.label}
            </li>
          ))}
        </ul>
        <Button
          label="Create New"
          icon={<RiAddLine size={15} />}
          transparentBg={true}
          openModal={true}
        />
      </aside>
      <aside
        className={`sidebar-responsive ${
          toggle ? "sidebar-responsive-show" : ""
        }`}
      >
        <div onClick={handleToggle} className="open-icon">
          {toggle ? (
            <RiArrowLeftWideLine size={10} color="white" />
          ) : (
            <RiArrowRightWideLine size={10} color="white" />
          )}
        </div>

        <ul className="links-container">
          <li></li>
          {links.map((link) => (
            <li>
              {link.icon}
              {link.label}
            </li>
          ))}
        </ul>
        <Button
          label="Create New"
          icon={<RiAddLine size={15} />}
          transparentBg={true}
          openModal={false}
        />
      </aside>
    </>
  );
}
