import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Talk } from "@/types";

const PreviousTalk = ({ data }: { data: Talk[] }) => {
  const createCardsList = () => {
    return data.map((item: Talk, index: number) => {
      return (
        <Link href="#" key={`previousTalk.title + ${index}`} className="mx-auto" >
          <div className={`carousel-item rounded-lg w-full max-w-xs sm:max-w-[auto] aspect-square h-full border-2 border-border px-5 py-3 xl:px-7 ${index%2 ? "bg-red-200" : "bg-blue-200"}`}>
            <div className="h-full sm:h-xs md:w-70 md:h-70  flex sm:w-60 flex-col justify-center xl:h-full xl:w-full sm:gap-2">
              <div className="flex h-2/3 items-center justify-center">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="aspect-video w-full object-contain"
                />
              </div>
              {/* <span className="text-[20px] font-medium">{item.date}</span> */}
              {/* 
              
              <h4 className="text-2xl font-semibold text-[6vw] text-center" style={{lineHeight: "8vw"}}>{item.title}</h4>
              <p className="text-text-sub-heading text-center text-[4vw] sm:text-sm font-semibold p-1" >
                {item.description}
              </p>
              */}
              <h4 className="text-2xl font-semibold text-center text-slate-900">{item.title}</h4>
              <p className="text-text-sub-heading text-center text-xs sm:text-sm font-semibold p-1 text-slate-700" >
                {item.description}
              </p>
            </div>
          </div>
        </Link>
      );
    });
  };
  return <>{data && createCardsList()}</>;
};

export default PreviousTalk;
