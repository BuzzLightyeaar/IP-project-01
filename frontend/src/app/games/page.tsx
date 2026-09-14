import SectionPage from "@/components/SectionPage";
import { gameItems } from "@/data/games";

export default function GamesPage() {
  return (
    <SectionPage
      title="Танилцах тоглоомууд"
      description="Болзоон дээр эсвэл хамтдаа тоглож болох сонирхолтой тоглоомууд."
      icon="🎮"
      items={gameItems}
    />
  );
}
