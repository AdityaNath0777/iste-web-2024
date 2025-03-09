import { HeroCarousel } from "@/types";
import Image from "next/image";
import { CarouselSection } from "../CarouselSection";
import { CarouselItem } from "../ui/carousel";
import { ImageDoubleFrame } from "../ImageDoubleFrame";

export default function Hero({ data }: { data: HeroCarousel }) {
  return (
    <section className="flex flex-col justify-center space-y-6 bg-[#feeedc] p-10 md:flex-row md:items-center md:gap-4 md:space-y-0 md:p-12 lg:p-16">
      {/* Text Section */}
      <div className="space-y-4 md:w-1/2">
        <h1
          className="text-5xl font-bold text-[#013D4D]"
          style={{ fontFamily: "Spicy Rice, cursive", color: "" }}
        >
          BVP ISTE
        </h1>
        <h2
          className="text-xl font-semibold text-[#013D4D]"
          style={{ fontFamily: "Spicy Rice, cursive", color: "" }}
        >
          Indian Society for Technical Education
        </h2>
        {data.workshopDescription?.map((paragraph, index) => (
          <p
            className="mb-1 text-justify text-base md:mb-3 md:text-lg"
            key={`event-para-${index}`}
          >
            {paragraph ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam expedita laborum itaque beatae placeat eius unde, tenetur vero maiores illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe explicabo consequuntur excepturi possimus tempora vel aliquam est assumenda velit sunt deserunt adipisci magnam odit, dolore, voluptas eius beatae commodi sed at! Provident consequuntur possimus qui esse aspernatur ducimus saepe iusto."}
          </p>
        ))}
        {/* <p
          className="text-[#013D4D] text-lg"
          style={{ fontFamily: "Work Sans, sans-serif", color: "" }}
        >
          Since its founding in 2011 at Bharati Vidyapeeth&apos;s College of
          Engineering, the BVP ISTE Student Chapter has developed into a vibrant
          hub where creative innovation and technical brilliance thrive
          together. As our campus&apos;s premier chapter of the Indian Society for
          Technical Education, we&apos;ve established an environment that uses
          hands-on education to turn ambitious students into professionals
          prepared for the workforce.
          <br />
          <br />
          BVP ISTE, which has more than 300 active members, is your one-stop
          destination for leadership opportunities, professional development,
          and technical advancement. Our extensive program covers cutting-edge
          fields including web development, graphic design, machine learning,
          and artificial intelligence, providing students with the ideal balance
          of academic understanding and real-world experience. We close the
          knowledge gap between classroom instruction and practical applications
          through impactful seminars and well-curated workshops.
        </p> */}
      </div>

      {/* Image Section with Double Frame Effect */}
      {/* <div className="flex justify-center md:w-1/2 md:justify-end">
        <div className="relative p-4"> */}
      {/* Outer Frame with rounded bottom-right corner */}
      {/* <div className="absolute bottom-0 right-0 h-full w-full translate-x-2 translate-y-2 rounded-br-2xl border-b-8 border-r-8 border-[#013D4D]"></div> */}

      {/* Inner Frame */}
      {/* <div className="relative rounded-2xl border-8 border-[#013D4D] bg-[#FEEEDD] p-2">
            <Image
              src="/assets/story_image.png"
              alt="Story Image"
              width={600}
              height={350}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div> */}
      <div className="flex shrink-0 flex-col items-center md:w-1/2">
        <CarouselSection>
          {data.ImageSrcs.map((image, i) => (
            <CarouselItem key={i}>
              <ImageDoubleFrame>
                <Image
                  src={image}
                  width={381}
                  height={226}
                  alt={data.speakerName}
                  className="w-[250px] rounded-[10px] lg:w-[381px]"
                  loading="lazy"
                />
              </ImageDoubleFrame>
            </CarouselItem>
          ))}
        </CarouselSection>
      </div>
    </section>
  );
}
