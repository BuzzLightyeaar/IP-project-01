import type { MenuItem } from "@/types/menu";

export const mockMenu: MenuItem[] = [
  {
    id: 1,
    title: "Танилцах тоглоомууд",
    description: "Болзоон дээр тоглож болох тоглоомууд",
    count: 3,
    href: "/games",
  },
  {
    id: 2,
    title: "Ургийн мод",
    description: "Ургийн мод хөтлөх",
    count: 0,
    href: "/tree",
  },
  {
    id: 3,
    title: "Дэлгүүр",
    description: "Бүх төрлийн зар болон дэлгүүрийн бараа",
    count: 0,
    href: "/auction",
  },
  {
    id: 4,
    title: "Хэрэглэгч",
    description: "Системийн хэрэглэгчдийн мэдээллийг удирдах",
    count: 0,
    href: "/users",
  },
];