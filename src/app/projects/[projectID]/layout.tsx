import { ReactNode } from "react";
import projects from "@/data/projects/projects.json";

export async function generateMetadata({
  params,
}: {
  params: { projectID: string };
}) {
  const { projectID } = params;
  const project = projects.find(
    (proj) => proj.id.toLowerCase() === projectID.toLowerCase(),
  );

  if (project) {
    return {
      title: project.title,
      description: project.desc,
    };
  }

  return {
    title: "Project Not Found",
    description: "The requested project does not exist.",
  };
}

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
