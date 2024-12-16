import styles from "./SmallCard.module.css";

interface CardProps {
  id: number;
  project_img: string;
  title: string;
  date: string;
  people: {
    img: string;
  }[];
}

export const SmallCard = ({ date, people, project_img, title }: CardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardRow1}>
        <img src={project_img} alt="project image" />
        <div className={styles.cardImagesUsers}>
          {people.map((user) => (
            <img src={user.img} className={styles.cardUsers} key={user.img} />
          ))}
        </div>
      </div>
      <div className={styles.cardRow2}>
        <h4>{title}</h4>
        <p>{date}</p>
      </div>
    </div>
  );
};
