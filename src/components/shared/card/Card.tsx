import { RiMore2Line } from "@remixicon/react";
import "./Card.css";

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
    <div className="card">
      <div className="card-row-1">
        <div className="card__image-container">
          <img src={project_img} alt="project image" />
          <div style={{ backgroundColor: project_color }} />
        </div>
        <div className="card__users-container">
          {people.map((user) => (
            <img src={user.img} className="card__users-in" />
          ))}
          <div className="card__users-in">+3</div>
        </div>
        <RiMore2Line size={15} className="card__options" />
      </div>
      <div className="card-row-2">
        <h4>{title}</h4>
        <p>{date}</p>
      </div>
    </div>
  );
};
