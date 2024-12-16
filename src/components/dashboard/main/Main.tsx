import { Card } from "../../shared/card/card-medium/MediumCard";
import { SmallCard } from "../../shared/card/small-card/SmallCard";
import { Profile } from "../../shared/profile/Profile";

import { Table } from "./components/recent-files/Table";
import { Search } from "./components/search/Search";
import { folders, foldersShared } from "./data/folders";

import styles from "./Main.module.css";
import Section from "../../shared/sections/Sections";
import { CardGrid } from "../../shared/card/card-grid/CardGrid";

export default function Main() {
  return (
    <main className={styles.mainContainer}>
      {/* responsive only */}

      <Profile showProfile={styles.showProfile} />

      <Search />

      <Section title="Recently Used" titleMargin="24px">
        <CardGrid>
          {folders.map((folder) => (
            <Card {...folder} key={folder.id} />
          ))}
        </CardGrid>
      </Section>

      <Section title="Recent Files" titleMargin="18px">
        <Table />
      </Section>

      <Section title="Share with me" titleMargin="18px" marginBottom="0px">
        <CardGrid>
          {foldersShared.map((folder) => (
            <SmallCard {...folder} key={folder.id} />
          ))}
        </CardGrid>
      </Section>
    </main>
  );
}
