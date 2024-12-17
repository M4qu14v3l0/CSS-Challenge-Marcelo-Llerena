import { useState } from "react";

export default function useSelectedLink(initialLink: string) {
  const [selectedLink, setSelectedLink] = useState(initialLink);

  const handleSelect = (link: string) => {
    setSelectedLink(link);
  };

  return {
    selectedLink,
    handleSelect,
  };
}
