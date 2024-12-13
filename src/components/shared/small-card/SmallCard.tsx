import "./SmallCard.css";

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
    <div className="small-card">
      <div className="small-card-row-1">
        <img src={project_img} alt="project image" />
        <div className="small-card__users-container">
          {people.map((user) => (
            <img src={user.img} className="small-card__users-in" />
          ))}
        </div>
      </div>
      <div className="small-card-row-2">
        <h4>{title}</h4>
        <p>{date}</p>
      </div>
    </div>
  );
};
