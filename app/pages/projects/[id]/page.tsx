import { notFound } from 'next/navigation';
import { projects } from '../../../../data/projects'; // Corrected path
import { ProjectDetails } from '../../../../components/ProjectDetails'; // Import the new component

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

interface Params {
  id: string;
}

export default function ProjectDetail({ params }: { params: Params }) {
  const { id } = params;

  const project = projects.find((project) => project.id.toString() === id);
 

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project as any} />; // Cast project to any type
}