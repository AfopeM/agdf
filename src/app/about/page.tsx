import teamData from "@/data/team.json";
import aboutData from "@/data/pages/about.json";
import {
  Title,
  TeamCards,
  MemberCard,
  NumberedCard,
  SectionHeader,
  FadeInBackground,
} from "@/components";
import { split as splitSentences } from "sentence-splitter";
export default function AboutPage() {
  const { whoWeAre, objectives, priorityAreas, milestones } = aboutData;
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
      <header className="relative flex h-[500px] w-full items-center justify-center bg-[url('/hero.jpeg')] bg-cover bg-center">
        <FadeInBackground direction="bottom" isDark />
        <div className="brand-width relative z-20 flex flex-col items-center justify-center gap-4 text-center md:mt-0">
          <Title text="about us" />
        </div>
      </header>

      <main>
        {/* SECTION-01 */}
        <section className="brand-width flex flex-col gap-20 py-24 lg:py-36">
          {/* WHO ARE WE */}
          <div>
            <SectionHeader isLight title={whoWeAre.title} />
            <div className="space-y-6 font-light text-gray-400">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* PRIORITIES */}
          <div>
            <SectionHeader isLight title={priorityAreas.title} />
            <p className="text-gray-400">{priorityAreas.desc}</p>
          </div>

          {/* MILESTONES */}
          <div>
            <SectionHeader
              isLight
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
            <SectionHeader
              isLight
              title={objectives.title}
              content={objectives.desc}
            />

            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {objectives.obj.map((item, i) => (
                <NumberedCard id={i + 1} key={i} desc={item} />
              ))}
            </div>
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
                  name={member}
                  image={member.toLowerCase().replace(" ", "_")}
                />
              ))}
            </TeamCards>
          </div>
        </section>
      </main>
    </div>
  );
}
