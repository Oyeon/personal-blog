import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';

const projects = [
  { id: 1, title: "Project 1", description: "A brief description of Project 1." },
  { id: 2, title: "Project 2", description: "A brief description of Project 2." },
  { id: 3, title: "Project 3", description: "A brief description of Project 3." },
  { id: 4, title: "Project 4", description: "A brief description of Project 4." },
  { id: 5, title: "Project 5", description: "A brief description of Project 5." },
  { id: 6, title: "Project 6", description: "A brief description of Project 6." },
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectDetail({ params }) {
  const { id } = params;

  const project = projects.find((project) => project.id.toString() === id);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {/* 추가적인 프로젝트 정보를 여기에 표시 */}
    </div>
  );
}