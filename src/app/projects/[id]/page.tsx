"use client";

import { useParams } from "next/navigation";
import projects from "@/data/projects/projects.json";
import { split as splitSentences } from "sentence-splitter";
import { FadeInBackground, PrimaryButton, Tagline, Title } from "@/components";

export default function ProjectPage() {
  const params = useParams();
  const projectID = params?.id as string;

  const project = projects.find(
    (proj) => proj.id.toLowerCase() === projectID.toLowerCase(),
  );

  if (!project) {
    return <div>No such project</div>;
  }

  const projectPDF = `/projects/documents/${project.id}.pdf`;

  const sentenceNodes = splitSentences(project.full_desc);
  const sentences = sentenceNodes
    .filter((node) => node.type === "Sentence")
    .map((node) => node.raw.trim());

  const paragraphs = [];
  for (let i = 0; i < sentences.length; i += 2) {
    paragraphs.push(sentences.slice(i, i + 2).join(" "));
  }

  return (
    <div className="text-white md:mb-44">
      {/* HEADER */}
      <header className="relative flex h-[560px] w-full flex-col items-center justify-center bg-[url('/hero.jpeg')] bg-cover bg-center">
        <FadeInBackground direction="bottom" isDark />
        <div className="brand-width z-20 flex flex-col items-center text-center">
          <Tagline text={project.tagline} />
          <Title text={project.title} />
        </div>
      </header>

      {/* MAIN SECTION */}
      <main className="brand-width mt-12 space-y-10 lg:mt-24">
        {/* DATE & CLIENT */}
        <div className="flex flex-col justify-between text-start font-bold tracking-wider uppercase lg:flex-row-reverse">
          <p>
            Date: <span className="font-light">{project.date}</span>
          </p>
          <p>
            Client: <span className="font-light">{project.client}</span>
          </p>
        </div>

        {/* PARAGRAPH */}
        <div className="space-y-6 lg:text-start">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* PARTNERS */}
        <ul className="flex flex-col gap-2 font-bold uppercase lg:flex-row lg:items-center">
          <p>partner:</p>
          {project.project_involved.map((partner) => (
            <li
              key={partner}
              className="bg-brand/30 block w-max rounded px-4 py-2 font-light"
            >
              {partner}
            </li>
          ))}
        </ul>

        {/* PDF BUTTON */}
        <PrimaryButton text="View Report" newTab link={projectPDF} />
      </main>
    </div>
  );
}
