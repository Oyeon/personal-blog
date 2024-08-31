import Link from "next/link";

const newsItems = [
  { title: "Welcome to my fun little blog! 😊", description: "Projects are divided into ongoing and past as of 2024, and you can check out personal information on the right in the about section!" },
  // { title: "Company Expansion", description: "We're growing our team and opening new offices." },
  // { title: "Industry Event", description: "Join us at the upcoming industry conference." },
];

export function NewsSection() {
  return (
    <div className="w-full px-4"> {/* Add px-4 for padding */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-muted p-4 rounded-md w-full">
          <h2 className="text-lg font-bold mb-2">Sharinig Info</h2>
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
    </div>
  );
}