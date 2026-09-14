import type { FeatureCardItem } from "@/types/card";

export const userItems: FeatureCardItem[] = [
  {
    id: 1,
    title: "Хэрэглэгчийн жагсаалт",
    description: "Системийн бүх хэрэглэгчийн мэдээллийг харах.",
    href: "/users/list",
    badge: "Жагсаалт",
    icon: "☰",
  },
  {
    id: 2,
    title: "Хэрэглэгч нэмэх",
    description: "Шинэ хэрэглэгчийн мэдээлэл бүртгэх.",
    href: "/users/create",
    badge: "Шинэ",
    icon: "+",
  },
  {
    id: 3,
    title: "Эрх ба төлөв",
    description: "Хэрэглэгчийн эрх, төлөв болон хандалтыг удирдах.",
    href: "/users/roles",
    badge: "Тохиргоо",
    icon: "⚙",
  },
];
