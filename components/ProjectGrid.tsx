import Link from "next/link";
import { projects } from "../data/projects";

export function ProjectGrid({ filter }: { filter: 'new' | 'past' }) {
  const cutoffDate = new Date('2024-01-01');
  const filteredProjects = projects.filter(project => {
    const projectEndDate = new Date(project.endDate);
    return filter === 'new' 
      ? projectEndDate >= cutoffDate 
      : projectEndDate < cutoffDate;
  });

  const sortedProjects = filteredProjects.sort((a, b) => a.position - b.position);

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {sortedProjects.map((project) => (
        <Link
          key={project.id}
          href={`/pages/projects/${project.id}`}
          className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
          prefetch={false}
        >
          <div className="text-sm font-medium leading-none group-hover:underline">{project.title}</div>
          <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">{project.description}</div>
          <img
            src={project.images ? project.images[0] : ''}
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