import { Achievement } from "@/types";
import Image from "next/image";

const FeatureStaticList = ({ cardData }: { cardData: Achievement[] }) => {
  const createList = (cardData: Achievement[]) => {
    return cardData.map((item: Achievement) => {
      return (
        <div key={item.title} className="flex flex-col">
          <dt className="text-center  text-xl mb-4 font-semibold xl:text-2xl">
            {item.title}
          </dt>
          <dd className="flex flex-col items-center">
            <div className="flex h-40 items-center">
              <Image
                src={item.imgSrc}
                alt={item.title}
                width={180}
                height={180}
              />
            </div>
            <p className="text-text-paragraph text-center mt-4 text-sm lg:text-base">
              {item.description}
            </p>
          </dd>
        </div>
      );
    });
  };

  return (
    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
      {cardData && createList(cardData)}
    </dl>
  );
};

export default FeatureStaticList;
