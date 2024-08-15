import Link from "next/link";

const projects = [
  { id: 1, title: "Project 1", description: "A brief description of Project 1." },
  { id: 2, title: "Project 2", description: "A brief description of Project 2." },
  { id: 3, title: "Project 3", description: "A brief description of Project 3." },
  { id: 4, title: "Project 4", description: "A brief description of Project 4." },
  { id: 5, title: "Project 5", description: "A brief description of Project 5." },
  { id: 6, title: "Project 6", description: "A brief description of Project 6." },
];

export function ProjectGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/pages/projects/${project.id}`}
          className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
          prefetch={false}
        >
          <div className="text-sm font-medium leading-none group-hover:underline">{project.title}</div>
          <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">{project.description}</div>
          <img
            src="/placeholder.svg"
            width="400"
            height="225"
            alt={project.title}
            className="aspect-video overflow-hidden rounded-md object-cover"
          />
        </Link>
      ))}
    </div>
  );
}