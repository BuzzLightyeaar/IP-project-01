import type { FeatureCardItem } from "@/types/card";

export const treeItems: FeatureCardItem[] = [
  {
    id: 1,
    title: "Ургийн мод харах",
    description: "Өөрийн гэр бүл, төрөл садны холбоог мод хэлбэрээр харах.",
    href: "/tree/view",
    badge: "Үндсэн",
    icon: "♣",
  },
  {
    id: 2,
    title: "Гэр бүлийн гишүүн нэмэх",
    description: "Шинэ хүнийг ургийн модонд бүртгэж холбоо үүсгэнэ.",
    href: "/tree/add",
    badge: "Бүртгэл",
    icon: "+",
  },
  {
    id: 3,
    title: "Холбоо удирдах",
    description: "Эцэг, эх, хүүхэд, хань болон бусад холбоог засварлана.",
    href: "/tree/relationships",
    badge: "Тохиргоо",
    icon: "∞",
  },
];
