import type { FeatureCardItem } from "@/types/card";

export const auctionItems: FeatureCardItem[] = [
  {
    id: 1,
    title: "Бүх зар",
    description: "Системд нийтлэгдсэн бүх зар, барааг үзэх.",
    href: "/auction/list",
    badge: "Зар",
    icon: "▦",
  },
  {
    id: 2,
    title: "Бараа нэмэх",
    description: "Шинэ бараа эсвэл зарын мэдээлэл бүртгэх.",
    href: "/auction/create",
    badge: "Шинэ",
    icon: "+",
  },
  {
    id: 3,
    title: "Миний зарууд",
    description: "Өөрийн оруулсан заруудыг харах болон засварлах.",
    href: "/auction/my",
    badge: "Хувийн",
    icon: "★",
  },
];
