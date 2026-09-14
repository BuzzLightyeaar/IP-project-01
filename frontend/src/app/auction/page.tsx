import SectionPage from "@/components/SectionPage";
import { auctionItems } from "@/data/auction";

export default function AuctionPage() {
  return (
    <SectionPage
      title="Дэлгүүр"
      description="Бүх төрлийн зар болон дэлгүүрийн бараатай ажиллах хэсэг."
      icon="🛒"
      items={auctionItems}
    />
  );
}
