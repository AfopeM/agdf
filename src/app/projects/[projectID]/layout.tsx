import { ReactNode } from "react";
import projects from "@/data/projects/projects.json";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectID: string }>;
}) {
  const { projectID } = await params;
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

// Update the layout props to include `params`
export default function ProjectLayout({
  children,
  params: _params,
}: {
  children: ReactNode;
  params: Promise<{ projectID: string }>;
}) {
  return <div>{children}</div>;
}
