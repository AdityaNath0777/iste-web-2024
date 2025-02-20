import { Member, Speaker } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImageDoubleFrame } from "@/components/ImageDoubleFrame";

const MemberCard = ({ member }: { member: Member }) => {
  return (
    <div className="flex flex-col items-center justify-start lg:mx-auto">
      <div className="image-container">
        <ImageDoubleFrame>
          <Image
            src={member.imageSrc}
            width={204}
            height={204}
            alt=""
            className="h-[174px] w-[174px] rounded-[10px] object-cover lg:h-[240px] lg:w-[240px]"
            loading="lazy"
          />
        </ImageDoubleFrame>
      </div>

      <div className="flex w-[279px] flex-col justify-between gap-2 py-2">
        <div className="text-2xl font-semibold leading-[normal] text-black lg:text-[40px]">
          {member.name}
        </div>
        <div className="flex flex-col">
          <p className="text-base font-normal leading-[normal] text-black lg:text-lg">
            {`${member.designation}`}
          </p>
          <div className="flex w-fit items-center justify-center gap-4">
            {member.socials.map((social) => (
              <Link key={social.href} href={social.href} target="_blank">
                <Image
                  src={`/assets/icons/${social.platform}.svg`}
                  width={25}
                  height={25}
                  alt={social.platform}
                  loading="lazy"
                  className="transition-transform duration-200 ease-in-out hover:scale-[1.2]"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
