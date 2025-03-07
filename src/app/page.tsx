import {
  FlexCards,
  TeamCards,
  MemberCard,
  NumberedCard,
  PrimaryButton,
  SectionHeader,
  FadeInBackground,
} from "@/components";
import homeData from "@/data/home.json";
import teamData from "@/data/team.json";

export default function Home() {
  const ourMission = homeData["our-mission"];
  const ourProject = homeData["our-project"];
  const ourTeam = teamData.team;

  return (
    <>
      <header className="relative flex h-screen w-full items-center justify-center bg-[url('/hero.jpeg')] bg-cover bg-center">
        <FadeInBackground direction="bottom" isDark />
        <div className="brand-width relative z-20 -mt-12 flex flex-col items-center justify-center gap-4 text-center md:mt-0">
          <h1 className="text-3xl font-black text-white capitalize md:text-5xl">
            <span className="text-brand bg-brand/30 mx-auto mb-4 block w-max rounded px-6 py-2 text-sm font-light tracking-wider uppercase backdrop-blur">
              Civil Society Think Tank
            </span>
            Empowering Africa’s <br />
            Green Future
          </h1>
          <p className="max-w-xl text-gray-400 lg:max-w-2xl lg:text-xl">
            Join AGDF in pioneering sustainable innovation and transformative
            green growth. Together, we’re shaping a resilient, eco-friendly
            tomorrow.
          </p>
          <PrimaryButton text="learn more" link="about" />
        </div>
      </header>

      <main>
        {/* SECTION-01 */}
        <section className="bg-black py-24 lg:py-48">
          <div className="brand-width">
            <SectionHeader
              isLight
              title={ourProject.title}
              content={ourProject.tagline}
            />
            <FlexCards projects={ourProject.projects} />
          </div>
        </section>

        {/* SECTION-02 */}
        <section className="relative bg-[url('/hero.jpeg')] bg-cover bg-center py-24 lg:py-48">
          <FadeInBackground direction="top" />
          <FadeInBackground direction="bottom" isDark />
          <div className="brand-width relative z-10">
            <SectionHeader
              isLight
              isReverse
              title={ourMission.title}
              content={ourMission.tagline}
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {ourMission.mission.map((item) => (
                <NumberedCard
                  id={item.id}
                  key={item.title}
                  desc={item.desc}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION-03 */}
        <section className="bg-black py-24 lg:py-48">
          <div className="brand-width">
            <SectionHeader
              isLight
              title={ourTeam.title}
              content={ourTeam.tagline}
            />
            <TeamCards>
              {[...ourTeam.members, ...ourTeam.members].map((member, index) => (
                <MemberCard
                  key={index}
                  name={member}
                  image={member.replace(" ", "_")}
                />
              ))}
            </TeamCards>
          </div>
        </section>
      </main>
    </>
  );
}
