import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex-col justify-center space-y-6 bg-[#feeedc] p-10 md:flex-row md:items-center md:space-y-0 md:p-12 lg:flex lg:p-16">
      {/* Text Section */}
      <div className="space-y-4 lg:w-1/2">
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
        <p
          className="text-justify text-lg text-[#013D4D]"
          style={{ fontFamily: "Work Sans, sans-serif", color: "" }}
        >
          Since its founding in 2011 at Bharati Vidyapeeth&apos;s College of
          Engineering, the BVP ISTE Student Chapter has developed into a vibrant
          hub where creative innovation and technical brilliance thrive
          together. As our campus&apos;s premier chapter of the Indian Society
          for Technical Education, we&apos;ve established an environment that
          uses hands-on education to turn ambitious students into professionals
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
        </p>
      </div>

      {/* Image Section with Double Frame Effect */}
      <div className="mt-9 flex justify-center lg:w-1/2 lg:justify-end">
        <div className="relative p-4">
          {/* Outer Frame with rounded bottom-right corner */}
          <div className="absolute bottom-0 right-0 h-full w-full translate-x-2 translate-y-2 rounded-br-2xl border-b-8 border-r-8 border-[#013D4D]"></div>

          {/* Inner Frame */}
          <div className="relative rounded-2xl border-8 border-[#013D4D] bg-[#FEEEDD] p-2">
            <Image
              src="/assets/story_image.png"
              alt="Story Image"
              width={600}
              height={350}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
