import {
  Tagline,
  Heading,
  FlexCards,
  TeamCards,
  MemberCard,
  NumberedCard,
  PrimaryButton,
  SectionHeader,
  FadeInBackground,
} from "@/components";
import homeData from "@/data/pages/home.json";
import teamData from "@/data/team.json";

export default function Home() {
  const ourTeam = teamData.team;
  const ourMission = homeData["our-mission"];
  const ourProject = homeData["our-project"];

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
              title={ourProject.title}
              content={ourProject.tagline}
            />
            <FlexCards projects={ourProject.projects} />
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
                  name={member}
                  image={member.toLowerCase().replace(" ", "_")}
                />
              ))}
            </TeamCards>
          </div>
        </section>
      </main>
    </>
  );
}
