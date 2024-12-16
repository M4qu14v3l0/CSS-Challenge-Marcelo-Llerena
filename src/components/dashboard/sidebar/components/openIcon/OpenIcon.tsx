import { RiArrowLeftWideLine, RiArrowRightWideLine } from "@remixicon/react";

import styles from "./OpenIcon.module.css";

interface OpenIconProps {
  handleToggle: () => void;
  toggle: boolean;
}

export default function OpenIcon({ handleToggle, toggle }: OpenIconProps) {
  return (
    <div onClick={handleToggle} className={styles.openIcon}>
      {toggle ? (
        <RiArrowLeftWideLine size={10} color="white" />
      ) : (
        <RiArrowRightWideLine size={10} color="white" />
      )}
    </div>
  );
}
