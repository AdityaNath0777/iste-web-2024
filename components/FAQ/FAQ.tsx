import Image from "next/image";
import Accordion from "../Accordion";

const faqData = [
  {
    id: 12345678,
    summaryBgColors: "#fff",
    title: "What is BVP ISTE?",
    content:
      "BVP ISTE is the Bharatiya Vidyapeeth chapter of the Indian Society for Technical Education, a national organization that promotes technical education, innovation, and professional development among students and faculty.",
  },
  {
    id: 192649812,
    summaryBgColors: "#fefebb",
    title: "Who can join BVP ISTE?",
    content:
      "Any student enrolled in Bharati Vidyapeeth College of Engineering, Delhi, interested in technology, innovation, or professional development can join ISTE.",
  },
  {
    id: 281481284,
    summaryBgColors: "#aa2541",
    title: "What are the benefits of joining BVP ISTE?",
    content:
      "Opportunities to work on innovative projects and events.Networking with peers and industry professionals. Skill development through workshops, hackathons, and seminars. Certificates and recognition for participation and leadership roles.",
  },
  {
    id: 823482378,
    summaryBgColors: "#de0077",
    title: "What kind of events does BVP ISTE organize?",
    content:
      "ISTE organizes a wide range of events, including technical fests like BVEST, coding competitions, workshops, hackathons, and theme-based events like Tech Titans and Squid Game-themed activities.",
  },
  {
    id: 823482378,
    summaryBgColors: "#de0041",
    title: "How do I register for BVP ISTE events?",
    content:
      "Registrations are announced through the official social media handles and college notice boards. You can register via online forms shared during event promotions",
  },
];

const FAQ = () => {
  return (
    <div className="faq-section container py-16">
      <h2 className="spa pb-10 text-center text-2xl font-bold sm:text-3xl xl:text-4xl">
        FAQ Section
      </h2>
      <div className="flex flex-col justify-evenly gap-4 sm:gap-6 md:flex-row md:items-stretch lg:gap-10">
        <div className="flex flex-1 flex-col justify-center gap-y-6">
          {faqData.map((faq) => (
            <Accordion
              key={faq.id}
              summaryBgColor={faq.summaryBgColors}
              title={faq.title}
              content={faq.content}
            />
          ))}
        </div>
        <div className="img-container flex h-full w-full flex-1 items-center justify-center">
          <figure className="h-full w-[90%] rounded-[10px] border-8 border-border md:w-[300px]  lg:w-[450px] lg:p-6">
            <Image
              src={"/assets/subchapters/EM.png"}
              className="mx-auto aspect-video h-[300px] w-[300px]"
              alt="hehe"
              width={200}
              height={200}
            />
          </figure>
        </div>
      </div>
    </div>
  );
  //   <div className="container py-16 ">
  //   <div className="flex flex-col-reverse gap-16 sm:gap-y-20 lg:flex-row">
  //     <Form />
  //     <div className=" flex items-center justify-center lg:w-1/2">
  //       <figure className="rounded-[10px] border-8 border-border lg:p-6">
  //         <Image
  //           src="/assets/group_demo.png"
  //           alt=""
  //           height="324"
  //           width="546"
  //         />
  //       </figure>
  //     </div>
  //   </div>
  // </div>
};

export default FAQ;
