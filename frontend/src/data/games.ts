import type { FeatureCardItem } from "@/types/card";

export const gameItems: FeatureCardItem[] = [
  {
    id: 1,
    title: "Асуулт хариулт",
    description: "Бие биенээ илүү сайн таних асуултуудаар тоглоно.",
    href: "/games/questions",
    badge: "Тоглоом",
    icon: "❤",
  },
  {
    id: 2,
    title: "Үнэнийг хэл",
    description: "Сонирхолтой, хөгжилтэй асуултуудад үнэнээр хариулна.",
    href: "/games/truth",
    badge: "Тоглоом",
    icon: "✦",
  },
  {
    id: 3,
    title: "Сонголт хий",
    description: "Хоёр сонголтоос нэгийг сонгон ярилцана.",
    href: "/games/choice",
    badge: "Тоглоом",
    icon: "↔",
  },
];
