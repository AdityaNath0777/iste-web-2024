import Image from "next/image";
import Accordion from "../Accordion";

const faqData = [
  {
    id: 12345678,
    summaryBgColors: "#fff",
    title: "hehe",
    content: "hehehehehehe",
  },
  {
    id: 192649812,
    summaryBgColors: "#fefebb",
    title: "hehe",
    content: "hehehehehehe",
  },
  {
    id: 281481284,
    summaryBgColors: "#aa2541",
    title: "hehe",
    content: "hehehehehehe",
  },
  {
    id: 823482378,
    summaryBgColors: "#de0077",
    title: "hehe",
    content: "hehehehehehe",
  },
];

const FAQ = () => {
  return (
    <div className="faq-section container py-16">
      <h2 className="text-center font-bold text-2xl sm:text-3xl xl:text-4xl pb-10 spa">FAQ Section</h2>
      <div className="flex flex-col md:flex-row justify-evenly md:items-stretch gap-4 sm:gap-6 lg:gap-10">
        <div className="flex-1 flex flex-col justify-center sm:gap-y-6">
          {faqData.map((faq) => (
            <Accordion
              key={faq.id}
              summaryBgColor={faq.summaryBgColors}
              title={faq.title}
              content={faq.content}
            />
          ))}
        </div>
        <div className="img-container flex-1 flex justify-center items-center w-full h-full">
        <figure className="rounded-[10px] border-8 w-[90%] md:w-[300px] lg:w-[450px] h-full  border-border lg:p-6">
          <Image
            src={"/assets/subchapters/EM.png"}
            className="mx-auto aspect-video h-full w-full"
            alt="hehe"
            width={100}
            height={100}
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
