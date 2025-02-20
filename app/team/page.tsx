import { TEAMS } from "@/config/teams";
import MemberCard from "@/components/Cards/MemberCard";

export default async function page() {
  return (
    <>
      <section className="container flex flex-col items-center gap-9 lg:flex-row-reverse lg:justify-around lg:gap-4">
        <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-start">
          <h1 className="page-heading w-full text-center text-5xl lg:text-7xl">
            Team 2024-2025
          </h1>

          <p className="max-w-2xl mx-auto text-center  text-base font-medium lg:text-lg">
            Meet the dedicated BVP-ISTE team leading the charge in 2024-25.
          </p>
        </div>
      </section>

      <section className="container py-16 text-center md:text-left">
        <h3 className="px-4 text-left text-6xl font-bold">Core</h3>
        <div className="flex max-w-full snap-x items-stretch gap-7 overflow-x-auto py-5 md:gap-x-4 md:gap-y-20 lg:grid lg:grid-cols-3 xl:grid-cols-4">
          {TEAMS.core.map((coreMember) => (
            <MemberCard key={coreMember.id} member={coreMember} />
          ))}
        </div>

        <h3 className="mt-10 px-4 text-left text-6xl font-bold">Heads</h3>
        <div className="flex max-w-full snap-x items-stretch gap-7 overflow-x-auto py-5 md:gap-x-4 md:gap-y-20 lg:grid lg:grid-cols-3 xl:grid-cols-4">
          {TEAMS.heads.map((head) => (
            <MemberCard key={head.id} member={head} />
          ))}
        </div>
        <h3 className="mt-10 px-4 text-left text-6xl font-bold">
          Faculty Mentor
        </h3>

        <div className="flex max-w-full snap-x items-stretch gap-7 overflow-x-auto py-5 md:gap-x-4 md:gap-y-20 lg:grid lg:grid-cols-3 xl:grid-cols-4">
          {TEAMS.facultyMentor.map((faculty) => (
            <MemberCard key={faculty.id} member={faculty} />
          ))}
        </div>
      </section>
    </>
  );
}
