import Link from "next/link";

type PageHeaderProps = {
  title: string;
  description: string;
  icon?: string;
};

export default function PageHeader({
  title,
  description,
  icon = "●",
}: PageHeaderProps) {
  return (
    <div className="mb-8">
      <div className="mb-3 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-900">
          Нүүр хуудас
        </Link>
        <span className="mx-2">/</span>
        <span>{title}</span>
      </div>

      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-xl text-white">
          {icon}
        </div>

        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
