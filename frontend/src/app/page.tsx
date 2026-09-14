import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainCard from "@/components/MainCard";
import { mockMenu } from "@/data/mockMenu";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Системийн үндсэн цэс
            </h1>

            <p className="mt-2 text-gray-600">
              Ашиглах хэсгээ сонгоно уу.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mockMenu.map((item) => (
              <MainCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}