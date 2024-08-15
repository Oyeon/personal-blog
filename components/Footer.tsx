import Link from "next/link";

export function Footer() {
  const footerLinks = {
    "Quick Links": ["Home", "About", "Projects", "Contact"],
    Projects: ["Project 1", "Project 2", "Project 3", "Project 4"],
    Resources: ["Blog", "Tutorials", "FAQs", "Documentation"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    Contact: ["Email", "Phone", "Social Media"],
  };

  return (
    <footer className="bg-muted p-6 md:py-12 w-full">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section} className="grid gap-1">
            <h3 className="font-semibold">{section}</h3>
            {links.map((link) => (
              <Link key={link} href="#" prefetch={false}>
                {link}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}