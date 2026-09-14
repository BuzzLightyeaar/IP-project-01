import SectionPage from "@/components/SectionPage";
import { treeItems } from "@/data/tree";

export default function TreePage() {
  return (
    <SectionPage
      title="Ургийн мод"
      description="Өөрийн гэр бүл, төрөл садны ургийн модыг хөтлөх хэсэг."
      icon="🌳"
      items={treeItems}
    />
  );
}
