import { SectionHeading } from "@/components/ui/SectionHeading";
import { MEMBERS, TEAM_SECTION } from "@/lib/content";
import { MemberCard } from "./MemberCard";

export function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="team-title" {...TEAM_SECTION} underline />
        <div className="mt-14 space-y-8 lg:space-y-10">
          {MEMBERS.map((m, i) => (
            <MemberCard key={m.initials} member={m} index={i} flip={i === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
