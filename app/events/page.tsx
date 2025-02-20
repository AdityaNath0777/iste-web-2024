import EventCard from "@/components/Cards/EventCard";
import { EVENTS } from "@/config/events";

export default function page() {
  return (
    <>
      <section className="w-full px-4 md:container flex flex-col items-center gap-9 lg:flex-row-reverse lg:justify-around lg:gap-4">
        <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-start">
          <h1 className="page-heading w-full text-center text-3xl md:text-5xl lg:text-7xl">
            Events 2024-2025
          </h1>

          <p className="mx-auto max-w-2xl text-center  text-base font-medium lg:text-lg">
            Amazing Events organized by BVP-ISTE in 2024-2025
          </p>
        </div>
      </section>

      <section className="container py-16 text-center md:text-left">
        <div className="flex flex-col items-center justify-center gap-10">
          {EVENTS.currentTenure.map((event, index) => (
            <EventCard event={event} key={`event-${index + 1}`} />
          ))}
        </div>
      </section>
    </>
  );
}
