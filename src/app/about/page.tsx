import teamData from "@/data/team.json";
import aboutData from "@/data/pages/about.json";
import {
  Title,
  Heading,
  TeamCards,
  MemberCard,
  NumberedCards,
  SectionHeader,
  FadeInBackground,
} from "@/components";
import type { Metadata } from "next";
import { split as splitSentences } from "sentence-splitter";

export const metadata: Metadata = {
  title: "About Us | AGDF",
  description:
    "Learn more about our mission, objectives, priority areas, and milestones. Meet our dedicated team and discover how we are driving impactful change.",
};

export default function AboutPage() {
  const { whoWeAre, objective, priorityAreas, milestones } = aboutData;
  const { team } = teamData;

  const sentenceNodes = splitSentences(whoWeAre.desc);
  const sentences = sentenceNodes
    .filter((node) => node.type === "Sentence")
    .map((node) => node.raw.trim());

  const paragraphs = [];
  for (let i = 0; i < sentences.length; i += 2) {
    paragraphs.push(sentences.slice(i, i + 2).join(" "));
  }
  return (
    <div className="text-white">
      <Heading>
        <FadeInBackground direction="bottom" isDark />
        <div className="brand-width relative z-20 flex flex-col items-center justify-center gap-4 text-center md:mt-0">
          <Title text="about us" />
        </div>
      </Heading>

      <main>
        {/* SECTION-01 */}
        <section className="brand-width flex flex-col gap-20 py-24 lg:py-36">
          {/* WHO ARE WE */}
          <div>
            <SectionHeader title={whoWeAre.title} />
            <div className="space-y-6 font-light text-gray-400">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* PRIORITIES */}
          <div>
            <SectionHeader title={priorityAreas.title} />
            <p className="text-gray-400">{priorityAreas.desc}</p>
          </div>

          {/* MILESTONES */}
          <div>
            <SectionHeader
              isReverse
              title={milestones.title}
              content={milestones.desc}
            />
            <ul className="space-y-2 text-gray-400">
              {milestones.milestone.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="bg-brand block h-2 min-w-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION-02 */}
        <section className="relative bg-[url('/hero.jpeg')] bg-cover bg-center py-24 lg:py-36">
          <FadeInBackground direction="top" />
          <FadeInBackground direction="bottom" isDark />
          <div className="brand-width relative z-10 space-y-3">
            <SectionHeader title={objective.title} content={objective.desc} />
            <NumberedCards cards={objective.objectives} columns="3" />
          </div>
        </section>

        {/* SECTION-03 */}
        <section className="bg-black py-24 lg:py-48">
          <div className="brand-width">
            <SectionHeader isLight title={team.title} content={team.tagline} />
            <TeamCards>
              {[...team.members, ...team.members].map((member, index) => (
                <MemberCard
                  key={index}
                  name={member.Name}
                  role={member.Role}
                  image={member.Name.toLowerCase().replace(" ", "_")}
                />
              ))}
            </TeamCards>
          </div>
        </section>
      </main>
    </div>
  );
}
