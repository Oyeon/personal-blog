import Link from "next/link";

const newsItems = [
  { title: "New Product Launch", description: "Check out our latest product release!" },
  { title: "Company Expansion", description: "We're growing our team and opening new offices." },
  { title: "Industry Event", description: "Join us at the upcoming industry conference." },
];

export function NewsSection() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-muted p-4 rounded-md">
        <h2 className="text-lg font-bold mb-2">Hot News</h2>
        <div className="space-y-2">
          {newsItems.map((news, index) => (
            <div key={index}>
              <Link href="#" className="font-medium hover:underline" prefetch={false}>
                {news.title}
              </Link>
              <p className="text-muted-foreground text-sm">{news.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}