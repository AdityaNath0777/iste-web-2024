import { Home } from "@/types";
import speakerImage from "public/assets/hero_image_guest_v1.png";

export const HOMEPAGE: Home = {
  Achievements: [
    {
      title: "Hands-On Experience",
      description:
        "Participate in practical projects to obtain practical experience in your area of interest.",
      imgSrc: "/assets/achievement_1_v1.png",
    },
    {
      title: "Professional Connections",
      description:
        " Get in touch with alumni and industry professionals who can provide opportunities and advice..",
      imgSrc: "/assets/achievement_2_v1.png",
    },
    {
      title: "Develop Yourself",
      description:
        "Develop your technical and soft skills through workshops and sessions to prepare you for the workforce.",
      imgSrc: "/assets/achievement_3_v1.png",
    },
    {
      title: "Create Fun Memories",
      description:
        "Take pleasure in social gatherings, connect with like-minded people, and form friendships that will last a lifetime.",
      imgSrc: "/assets/achievement_4_v1.png",
    },
  ],
  PreviousTalks: [
    {
      date: "20 May 2021",
      title: "Pixelcraft",
      imgSrc: "/assets/subchapters/pixelkraft.png",
      speaker: "Arun Singh",
      description:
        "PixelCraft serves as your creative blank canvas. For those interested in graphic design who wish to experiment and develop in the field of visuals. ",
    },
    {
      date: "01 June 2022",
      title: "Electronika",
      imgSrc: "/assets/subchapters/electronika.png",
      speaker: "Arun Sharma",
      description:
        "The center of electronic innovation is Electronika. Fans of robotics, circuits, and innovation will love this section.",
    },
    {
      date: "14 Jan 2024",
      title: "Softech",
      imgSrc: "/assets/subchapters/softech.png",
      speaker: "Prateek",
      description:
        "Softech bridges innovation and technology, empowering students to transform creative ideas into real-world solutions by exploring the evolving tech landscape.",
    },
    {
      date: "20 May 2021",
      title: "Event Management",
      imgSrc: "/assets/subchapters/EM.png",
      speaker: "Ekaspreet Singh",
      description:
        "The backbone of our success lies in our dedicated event management team, a dynamic force that transforms ideas into impactful experiences.",
    },
    {
      date: "20 May 2021",
      title: "Content Creation",
      imgSrc: "/assets/subchapters/Content.png",
      speaker: "Vrukshali",
      description:
        "TThe content team boosts our digital presence through creative storytelling and strategic marketing, showcasing achievements and engaging the community.",
    },
    {
      date: "20 May 2021",
      title: "Sahitya",
      imgSrc: "/assets/subchapters/sahitya.png",
      speaker: "Neha Sharma",
      description:
        "Sahitya is for people who appreciate the craft of language. Literary endeavors and content writing are the focus of this subchapter",
    },
  ],
  Workshop: {
    speakerImageSrc: speakerImage,
    speakerName: "Chulbul Pandey",
    speakerRole: "Frontend Architect at Apple",
    workshopTitle: "Introduction to Design System and Storybook",
    workshopDate: " On 24th October at 05:00 AM IST",
    workshopDescription:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
};
