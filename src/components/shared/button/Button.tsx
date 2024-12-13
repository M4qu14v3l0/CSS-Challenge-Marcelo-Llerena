import {
  RiFolder2Line,
  RiFolderAddLine,
  RiMore2Line,
  RiUpload2Line,
} from "@remixicon/react";
import "./Button.css";
import { useState } from "react";

type ButtonPropsBase = {
  label: string;
  openModal: boolean;
  icon?: JSX.Element;
  transparentBg?: never;
};

type ButtonPropsWithIcon = {
  label: string;
  icon: JSX.Element;
  openModal: boolean;
  transparentBg?: boolean;
};

type ButtonProps = ButtonPropsBase | ButtonPropsWithIcon;

export const Button = ({
  label,
  icon,
  transparentBg,
  openModal,
}: ButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button className={`button`} onClick={handleOpenModal}>
      <p>{label}</p>
      {icon ? (
        <span className={transparentBg ? "bg-transparent" : ""}>{icon}</span>
      ) : (
        <></>
      )}

      {isOpen && openModal && (
        <div className="button-modal">
          <span>
            <RiUpload2Line size={15} />
            Upload Files
          </span>
          <span>
            {" "}
            <RiFolder2Line size={15} />
            Upload Folder
          </span>
          <span>
            <RiFolderAddLine size={15} />
            New Folder
          </span>
          <span>
            <RiMore2Line size={15} />
            More
          </span>
        </div>
      )}
    </button>
  );
};
