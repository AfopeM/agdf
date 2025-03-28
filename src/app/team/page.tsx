import teamData from "@/data/team.json";
import {
  Title,
  Heading,
  TeamCards,
  MemberCard,
  FadeInBackground,
} from "@/components";
export default function page() {
  const ourTeam = teamData.team;
  return (
    <div>
      <Heading>
        <FadeInBackground direction="bottom" isDark />
        <div className="brand-width relative z-20 flex flex-col items-center justify-center gap-4 text-center md:mt-0">
          <Title text="Our Team" />
        </div>
      </Heading>
      <main className="brand-width">
        <section className="flex flex-wrap items-center gap-4">
          {ourTeam.members.map((member, index) => (
            <MemberCard
              key={index}
              name={member}
              image={member.toLowerCase().replace(" ", "_")}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
