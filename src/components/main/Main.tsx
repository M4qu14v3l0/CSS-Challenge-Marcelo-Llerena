import { Profile } from "../info_sidebar/components/profile/Profile";
import { Card } from "../shared/card/Card";
import { Table } from "./components/recent-files/Table";
import { Search } from "./components/search/Search";
import { SmallCard } from "../shared/small-card/SmallCard";
import { folders, foldersShared } from "./data/folders";
import "./Main.css";

export default function Main() {
  return (
    <main className="main-content">
      {/* responsive only */}
      <section className="user__section">
        <Profile />
      </section>

      <Search />
      <section>
        <h2>Recently Used</h2>
        <div className="card__grid">
          {folders.map((folder) => (
            <Card {...folder} />
          ))}
        </div>
      </section>

      <section>
        <h2>Recent Files</h2>
        <Table />
      </section>

      <section>
        <h2 style={{ paddingTop: "-10px" }}>Share with me</h2>
        <div className="small-card__grid">
          {foldersShared.map((folder) => (
            <SmallCard {...folder} />
          ))}
        </div>
      </section>
    </main>
  );
}
