import { EventProps } from "@/types";

interface events {
  currentTenure: EventProps[];
  allEvents: EventProps[];
}

export const EVENTS: events = {
  currentTenure: [
    {
      name: "Tech Titans",
      date: "18th October, 2024",
      description: [
        "Tech Titans turned the traditional product pitch approach into a dynamic exhibit of ideas for the future. On our stage, more than 20 groups of budding creative minds showcased innovative solutions related to digital transformation, sustainability, and healthcare.",
        "The event's rigorous assessment approach was what made it unique. Instead of traditional presentations, teams were faced with intense cross-examination sessions from our panel of seasoned business professionals, which included prominent entrepreneurs and accomplished founders. Participants showed off their technological viability, in-depth market knowledge, and established execution strategies in addition to their professional pitches. Teams were forced to clarify their go-to-market plans, improve their business models, and justify their assumptions throughout the rigorous Q&A rounds.",
      ],
      imageList: [
        "/assets/events/2024_2025/TechTitans/Poster.jpeg",
        "/assets/events/2024_2025/TechTitans/01.png",
        "/assets/events/2024_2025/TechTitans/02.png",
        "/assets/events/2024_2025/TechTitans/03.png",
        "/assets/events/2024_2025/TechTitans/04.png",
      ],
    },
    {
      name: "Squid Game REBOOT",
      date: "16th October, 2024",
      description: [
        "Our fun-filled take on the popular Netflix show turned traditional kid-friendly games into a memorable strategic and skill-building event. From Red Light Green Light to team-based games, participants from all around the community gathered to put their wits and agility to the test through a variety of creatively recreated obstacles.",
        "As contestants progressed through each round, the excitement of the evening grew rapidly, and despite the competitive atmosphere, competitors encouraged one another. The ambiance produced an immersive experience that held everyone's attention throughout the event.",
      ],
      imageList: [
        "/assets/events/2024_2025/SquidGame_Reboot/Poster.jpg",
        "/assets/events/2024_2025/SquidGame_Reboot/01.jpg",
        "/assets/events/2024_2025/SquidGame_Reboot/02.jpg",
        "/assets/events/2024_2025/SquidGame_Reboot/03.jpg",
        "/assets/events/2024_2025/SquidGame_Reboot/04.jpg",
      ],
    },
    {
      name: "Upgrad Elevate Seminar",
      date: "15th October, 2024",
      description: [
        "In an engaging and insightful session, participants came together to explore endless possibilities for pursuing higher education at top-tier global universities. From comprehensive guidance by study abroad experts to exclusive scholarship opportunities worth INR 40 lakhs, the seminar was packed with value-driven takeaways.",
        "Attendees gained actionable insights on preparing for the IELTS exam for free, enrolling in the world’s top 2% universities, and navigating a hybrid learning model designed to fit their busy lives. The seamless blend of online and on-campus education showcased how participants could fast-track their global career goals without compromising on flexibility.",
      ],
      imageList: [
        "/assets/events/2024_2025/Upgrad_Seminar/Poster.jpg",
        "/assets/events/2024_2025/Upgrad_Seminar/01.jpg",
        "/assets/events/2024_2025/Upgrad_Seminar/02.jpg",
        "/assets/events/2024_2025/Upgrad_Seminar/03.jpg",
      ],
    },
  ],
  allEvents: [
    {
      name: "Squid Game",
      date: "16th October 2024",
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam expedita laborum itaque beatae placeat eius unde, tenetur vero maiores illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe explicabo consequuntur excepturi.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam expedita laborum itaque beatae placeat eius unde, tenetur vero maiores illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe explicabo consequuntur excepturi.",
      ],
      imageList: ["/assets/subchapters/EM.png"],
    },
  ],
};
