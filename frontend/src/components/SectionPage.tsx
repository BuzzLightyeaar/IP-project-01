import FeatureCard from "@/components/FeatureCard";
import PageHeader from "@/components/PageHeader";
import type { FeatureCardItem } from "@/types/card";

type SectionPageProps = {
  title: string;
  description: string;
  icon?: string;
  items: FeatureCardItem[];
};

export default function SectionPage({
  title,
  description,
  icon,
  items,
}: SectionPageProps) {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <PageHeader
          title={title}
          description={description}
          icon={icon}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <FeatureCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
