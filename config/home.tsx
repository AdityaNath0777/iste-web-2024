import { Home } from "@/types";
import team2023_2024Image from "public/assets/teams/2023_2024/teamPic.jpg";
import htc3GroupImage from "public/assets/events/2023_2024/HTC_3.0/05.jpg";

export const HOMEPAGE: Home = {
  Achievements: [
    {
      title: "10,000+ Members",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      imgSrc: "/assets/achievement_1_v1.png",
    },
    {
      title: "100+ Workshops",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      imgSrc: "/assets/achievement_2_v1.png",
    },
    {
      title: "100+ Sponsers",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      imgSrc: "/assets/achievement_3_v1.png",
    },
    {
      title: "100+ Speakers",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
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
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis earum nihil sapiente?",
    },
    {
      date: "01 June 2022",
      title: "Electronika",
      imgSrc: "/assets/subchapters/electronika.png",
      speaker: "Arun Sharma",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis earum nihil sapiente?",
    },
    {
      date: "14 Jan 2024",
      title: "Softech",
      imgSrc: "/assets/subchapters/softech.png",
      speaker: "Prateek",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis earum nihil sapiente?",
    },
    {
      date: "20 May 2021",
      title: "Event Management",
      imgSrc: "/assets/subchapters/EM.png",
      speaker: "Ekaspreet Singh",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis earum nihil sapiente?",
    },
    {
      date: "20 May 2021",
      title: "Content Creation",
      imgSrc: "/assets/subchapters/Content.png",
      speaker: "Vrukshali",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis earum nihil sapiente?",
    },
    {
      date: "20 May 2021",
      title: "Sahitya",
      imgSrc: "/assets/subchapters/sahitya.png",
      speaker: "Neha Sharma",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis earum nihil sapiente?",
    },
  ],
  Workshop: {
    ImageSrcs: [team2023_2024Image, htc3GroupImage],
    speakerName: "Chulbul Pandey",
    speakerRole: "Frontend Architect at Apple",
    workshopTitle: "Introduction to Design System and Storybook",
    workshopDate: " On 24th October at 05:00 AM IST",
    workshopDescription: [
      "Founded in 2011, the BVP ISTE Student Chapter at Bharati Vidyapeeth's College of Engineering is a thriving hub for innovation and technical excellence. With 300+ active members, we offer leadership, professional growth, and hands-on learning opportunities in fields like web development, graphic design, machine learning, and AI. Through impactful seminars and workshops, we bridge the gap between academics and real-world applications, preparing students for a successful future.",
    ],
  },
};
