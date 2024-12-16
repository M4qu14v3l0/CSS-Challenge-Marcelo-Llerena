import styles from "./OpenIcon.module.css";

interface OpenIconProps {
  handleToggle: () => void;
  toggle: boolean;
  toggleOnIcon: JSX.Element;
  toggleOffIcon: JSX.Element;
  styleProps?: string;
}

export default function OpenIcon({
  handleToggle,
  toggle,
  toggleOnIcon,
  toggleOffIcon,
  styleProps = styles.openIcon,
}: OpenIconProps) {
  return (
    <div onClick={handleToggle} className={styleProps}>
      {toggle ? toggleOnIcon : toggleOffIcon}
    </div>
  );
}
