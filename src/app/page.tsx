import {
  Tagline,
  Heading,
  FlexCards,
  TeamCards,
  MemberCard,
  NumberedCards,
  PrimaryButton,
  SectionHeader,
  FadeInBackground,
} from "@/components";
import teamData from "@/data/team.json";
import homeData from "@/data/pages/home.json";
import projectData from "@/data/projects/projects.json";

export default function Home() {
  const ourTeam = teamData.team;
  const ourMission = homeData["our-mission"];
  const projectHeader = homeData["our-project"];
  const ourProject = projectData;

  return (
    <>
      {/* HEADER */}
      <Heading height="100vh">
        <FadeInBackground direction="bottom" isDark />
        <div className="brand-width relative z-20 -mt-12 flex flex-col items-center justify-center gap-4 text-center md:mt-0">
          <h1 className="flex flex-col items-center text-3xl font-black text-white capitalize md:text-5xl">
            <Tagline text="Civil Society Think Tank" />
            Empowering Africa’s <br />
            Green Future
          </h1>
          <p className="max-w-xl text-gray-400 lg:max-w-2xl lg:text-xl">
            Join AGDF in pioneering sustainable innovation and transformative
            green growth. Together, we’re shaping a resilient, eco-friendly
            tomorrow.
          </p>
          <PrimaryButton text="learn more" link="/about" />
        </div>
      </Heading>

      <main>
        {/* OUR PROJECTS */}
        <section className="bg-black py-24 lg:py-48">
          <div className="brand-width">
            <SectionHeader
              isLight
              title={projectHeader.title}
              content={projectHeader.tagline}
            />
            <FlexCards projects={ourProject} />
          </div>
        </section>

        {/* OUR SERVICES */}
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
            <NumberedCards cards={ourMission.mission} columns="4" />
          </div>
        </section>

        {/* OUR TEAM */}
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
                  name={member.Name}
                  role={member.Role}
                  image={member.Name.toLowerCase().replace(" ", "_")}
                />
              ))}
            </TeamCards>
          </div>
        </section>
      </main>
    </>
  );
}
