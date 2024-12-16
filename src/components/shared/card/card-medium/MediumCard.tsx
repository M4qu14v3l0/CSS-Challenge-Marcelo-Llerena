import { RiMore2Line } from "@remixicon/react";
import styles from "./MediumCard.module.css";

interface CardProps {
  id: number;
  project_img: string;
  title: string;
  date: string;
  project_color: string;
  people: {
    img: string;
  }[];
}

export const Card = ({
  date,
  people,
  project_color,
  project_img,
  title,
}: CardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardRow1}>
        <div className={styles.cardImage}>
          <img src={project_img} alt="project image" />
          <div style={{ backgroundColor: project_color }} />
        </div>
        <div className={styles.cardImagesUsers}>
          {people.map((user) => (
            <img src={user.img} className={styles.cardUsers} key={user.img} />
          ))}
          <div className={styles.cardUsers}>+3</div>
        </div>
        <RiMore2Line size={15} className={styles.cardMore} />
      </div>
      <div className={styles.cardRow2}>
        <h4>{title}</h4>
        <p>Created: {date}</p>
      </div>
    </div>
  );
};
