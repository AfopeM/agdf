"use client";

import { useParams } from "next/navigation";
import projects from "@/data/projects/projects.json";
import { split as splitSentences } from "sentence-splitter";
import { FadeInBackground, PrimaryButton, Tagline, Title } from "@/components";

export default function ProjectPage() {
  const params = useParams();
  const projectID = params?.projectID as string;

  const project = projects.find(
    (proj) => proj.id.toLowerCase() === projectID.toLowerCase(),
  );

  if (!project) {
    return <div>No such project</div>;
  }

  const projectPDF = `/projects/documents/${project.id}.pdf`;

  const sentenceNodes = splitSentences(project.desc);
  const sentences = sentenceNodes
    .filter((node) => node.type === "Sentence")
    .map((node) => node.raw.trim());

  const paragraphs = [];
  for (let i = 0; i < sentences.length; i += 3) {
    paragraphs.push(sentences.slice(i, i + 3).join(" "));
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
      <main className="brand-width mt-12 space-y-10 text-center lg:mt-24 lg:text-start">
        <div className="flex flex-col lg:flex-col-reverse">
          <div className="space-y-6 lg:text-start">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="flex flex-col justify-between capitalize lg:flex-row">
            <ul>
              {project.project_involved.map((partner) => (
                <li key={partner} className="space-y-2">
                  partner:
                  <br />
                  <span className="bg-brand/50 rounded px-4 py-2">
                    {partner}
                  </span>
                </li>
              ))}
            </ul>
            <div>
              <p>
                Date: <span className="font-bold">{project.date}</span>
              </p>
              <p>
                Client: <span className="font-bold">{project.client}</span>
              </p>
            </div>
          </div>
        </div>

        {/* PDF BUTTON */}
        {projectPDF && (
          <PrimaryButton text="View Report" newTab link={projectPDF} />
        )}
      </main>
    </div>
  );
}

// import projects from "@/data/projects/projects.json";
// import { split as splitSentences } from "sentence-splitter";
// import { FadeInBackground, PrimaryButton, Tagline, Title } from "@/components";

// export default async function ProjectPage({
//   params,
// }: {
//   params: Promise<{ projectID: string }>;
// }) {
//   const { projectID } = await params;
//   const project = projects.find(
//     (proj) => proj.id.toLowerCase() === projectID.toLowerCase(),
//   );

//   if (!project) {
//     return <div>No such project</div>;
//   }

//   const sentenceNodes = splitSentences(project.desc);
//   const sentences = sentenceNodes
//     .filter((node) => node.type === "Sentence")
//     .map((node) => node.raw.trim());

//   const paragraphs = [];
//   for (let i = 0; i < sentences.length; i += 3) {
//     const paragraph = sentences.slice(i, i + 3).join(" ");
//     paragraphs.push(paragraph);
//   }

//   // const projectPDF = `/projects/documents/${project.id}.pdf`;
//   const projectPDF =
//     typeof window !== "undefined"
//       ? `${window.location.origin}/projects/documents/${project.id}.pdf`
//       : "";
//   console.log(projectPDF);

//   return (
//     <>
//       <div className="text-white md:mb-44">
//         {/* HEADER */}
//         <header className="relative flex h-[560px] w-full flex-col items-center justify-center bg-[url('/hero.jpeg')] bg-cover bg-center">
//           <FadeInBackground direction="bottom" isDark />
//           <div className="brand-width z-20 flex flex-col items-center text-center">
//             <Tagline text={project.tagline} />
//             <Title text={project.title} />
//           </div>
//         </header>

//         {/* MAIN SECTION */}
//         <main className="brand-width mt-12 space-y-10 text-center lg:mt-24 lg:text-start">
//           <div className="flex flex-col lg:flex-col-reverse">
//             <div className="space-y-6 lg:text-start">
//               {paragraphs.map((paragraph, index) => (
//                 <p key={index}>{paragraph}</p>
//               ))}
//             </div>
//             <div className="flex flex-col justify-between capitalize lg:flex-row">
//               <ul>
//                 {project.project_involved.map((partner) => (
//                   <li key={partner} className="space-y-2">
//                     partner:
//                     <br />
//                     <span className="bg-brand/50 rounded px-4 py-2">
//                       {partner}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//               <div>
//                 <p>
//                   Date: <span className="font-bold">{project.date}</span>
//                 </p>
//                 <p>
//                   Client: <span className="font-bold">{project.client}</span>
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* PDF BUTTON */}
//           <PrimaryButton text="View Report" newTab link={projectPDF} />
//         </main>
//       </div>
//     </>
//   );
// }
