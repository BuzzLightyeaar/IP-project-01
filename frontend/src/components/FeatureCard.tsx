import Link from "next/link";
import type { FeatureCardItem } from "@/types/card";

type FeatureCardProps = {
  item: FeatureCardItem;
};

export default function FeatureCard({ item }: FeatureCardProps) {
  return (
    <Link
      href={item.href}
      className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 text-xl text-white">
          {item.icon ?? "•"}
        </div>

        {item.badge && (
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            {item.badge}
          </span>
        )}
      </div>

      <h2 className="mt-5 text-lg font-semibold text-gray-900">
        {item.title}
      </h2>

      <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-500">
        {item.description}
      </p>

      <div className="mt-5 flex items-center text-sm font-medium text-gray-900">
        Нээх
        <span className="ml-2 transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
