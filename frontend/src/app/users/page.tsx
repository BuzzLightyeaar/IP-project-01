import SectionPage from "@/components/SectionPage";
import { userItems } from "@/data/users";

export default function UsersPage() {
  return (
    <SectionPage
      title="Хэрэглэгч"
      description="Системийн хэрэглэгчдийн мэдээлэл болон эрхийг удирдах хэсэг."
      icon="👥"
      items={userItems}
    />
  );
}
