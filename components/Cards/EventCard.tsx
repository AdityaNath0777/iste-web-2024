import Image from "next/image";
import { ImageDoubleFrame } from "../ImageDoubleFrame";
import { EventProps } from "@/types";
import { CarouselSection } from "../CarouselSection";
import { CarouselItem } from "../ui/carousel";

export default function EventCard({ event }: { event: EventProps }) {
  return (
    <div className="flex w-full flex-col-reverse gap-4 md:flex-row md:gap-10">
      <div className="md:w-1/2">
        <h3 className="text-2xl font-bold md:text-4xl">
          {event?.name || "Event Name"}
        </h3>
        <h4 className="mb-2 mt-1 text-lg md:mb-4 md:mt-2 md:text-2xl">
          {event?.date || "16th October 2024"}
        </h4>
        {event.description?.map((paragraph, index) => (
          <p
            className="mb-1 text-justify text-base md:mb-3 md:text-lg"
            key={`event-para-${index}`}
          >
            {paragraph ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam expedita laborum itaque beatae placeat eius unde, tenetur vero maiores illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe explicabo consequuntur excepturi possimus tempora vel aliquam est assumenda velit sunt deserunt adipisci magnam odit, dolore, voluptas eius beatae commodi sed at! Provident consequuntur possimus qui esse aspernatur ducimus saepe iusto."}
          </p>
        ))}
      </div>
      <div className="shrink-0 md:w-1/2 flex flex-col items-center">
        <CarouselSection>
          {event.imageList.map((image, i) => (
            <CarouselItem key={i}>
              <ImageDoubleFrame>
                <Image
                  src={image}
                  width={381}
                  height={226}
                  alt={event.name}
                  className="w-[250px] rounded-[10px] lg:w-[381px]"
                  loading="lazy"
                />
              </ImageDoubleFrame>
            </CarouselItem>
          ))}
        </CarouselSection>
      </div>
    </div>
  );
}
