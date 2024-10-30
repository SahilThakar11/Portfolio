import { FaAws } from "react-icons/fa";
import {
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiMongodb,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiMysql,
  SiFigma,
  SiCsharp,
  SiDotnet,
  SiVisualstudiocode,
  SiMicrosoftazure,
  SiTypescript,
  SiPostgresql,
  SiTailwindcss,
  SiBootstrap,
  SiDocker,
  SiUnity,
  SiGodotengine,
  SiAdobephotoshop,
  SiGithub,
} from "react-icons/si";

import NM1 from "../assets/NaxChat/NM1.png";
import NM2 from "../assets/NaxChat/NM2.png";
import NM3 from "../assets/NaxChat/NM3.png";
import NT1 from "../assets/NaxChat/NT1.png";
import ND1 from "../assets/NaxChat/ND1.png";

import SS1 from "../assets/SavorSpot/SS1.png";
import SS2 from "../assets/SavorSpot/SS2.png";
import SS3 from "../assets/SavorSpot/SS3.png";
import SS4 from "../assets/SavorSpot/SS4.png";
import SS5 from "../assets/SavorSpot/SS5.png";

import PD1 from "../assets/Portfolio/PD1.png";
import PT1 from "../assets/Portfolio/PT1.png";
import PM1 from "../assets/Portfolio/PM1.png";
import PM2 from "../assets/Portfolio/PM2.png";
import PM3 from "../assets/Portfolio/PM3.png";

const skills = [
  {
    title: "HTML",
    section: "Frontend",
    color: "primary",
    icon: <SiHtml5 className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "CSS",
    color: "primary",
    section: "Frontend",
    icon: <SiCss3 className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "JavaScript",
    color: "primary",
    section: "Language",
    icon: <SiJavascript className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "C#",
    color: "primary",
    section: "Language",
    icon: <SiCsharp className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: ".NET",
    color: "primary",
    section: "Backend",
    icon: <SiDotnet className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "React",
    color: "secondary",
    section: "Frontend",
    icon: <SiReact className="h-16 w-16 mx-2 my-2 fill-secondary" />,
  },
  {
    title: "Angular",
    color: "secondary",
    section: "Frontend",
    icon: <SiAngular className="h-16 w-16 mx-2 my-2 fill-secondary" />,
  },
  {
    title: "Node.js",
    color: "primary",
    section: "Backend",
    icon: <SiNodedotjs className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "Express",
    color: "primary",
    section: "Backend",
    icon: <SiExpress className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "MongoDB",
    color: "primary",
    section: "Database",
    icon: <SiMongodb className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "MySQL",
    color: "primary",
    section: "Database",
    icon: <SiMysql className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "Git",
    color: "primary",
    section: "Tools",
    icon: <SiGit className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "VS Code",
    color: "primary",
    section: "Tools",
    icon: <SiVisualstudiocode className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "MS Azure",
    color: "secondary",
    section: "Tools",
    icon: <SiMicrosoftazure className="h-16 w-16 mx-2 my-2 fill-secondary" />,
  },
  {
    title: "Figma",
    color: "secondary",
    section: "Design",
    icon: <SiFigma className="h-16 w-16 mx-2 my-2 fill-secondary" />,
  },
  {
    title: "Photoshop",
    color: "secondary",
    section: "Design",
    icon: <SiAdobephotoshop className="h-16 w-16 mx-2 my-2 fill-secondary" />,
  },

  {
    title: "TypeScript",
    color: "primary",
    section: "Language",
    icon: <SiTypescript className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "PostgreSQL",
    color: "secondary",
    section: "Database",
    icon: <SiPostgresql className="h-16 w-16 mx-2 my-2 fill-secondary" />,
  },
  {
    title: "Tailwind CSS",
    color: "primary",
    section: "Frontend",
    icon: <SiTailwindcss className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "Bootstrap",
    color: "primary",
    section: "Frontend",
    icon: <SiBootstrap className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "Docker",
    color: "secondary",
    section: "Testing",
    icon: <SiDocker className="h-16 w-16 mx-2 my-2 fill-secondary" />,
  },
  {
    title: "Unity",
    color: "secondary",
    section: "Game Development",
    icon: <SiUnity className="h-16 w-16 mx-2 my-2 fill-secondary" />,
  },
  {
    title: "Godot",
    color: "primary",
    section: "Game Development",
    icon: <SiGodotengine className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "GitHub",
    color: "primary",
    section: "Tools",
    icon: <SiGithub className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "AWS",
    color: "secondary",
    section: "Tools",
    icon: <FaAws className="h-16 w-16 mx-2 my-2 fill-secondary" />,
  },
];

export const workExperience = [
  {
    company: "Equitable",
    role: "Software Developer Co-op",
    duration: "September 2024 - April 2025",
    responsibilities: [
      "Assisted in the development and maintenance of web applications using AngularJS, .NET/ASP.NET, and SQL Server, focusing on improving application performance and scalability.",
      "Participated in Agile team activities, including sprint planning, daily stand-ups, and sprint reviews, helping the team stay organized and on track with project timelines",
      "Gained hands-on experience with CI/CD pipelines in Azure DevOps, learning how to support efficient code deployment and reduce manual errors.",
      "Worked alongside senior developers to address service requests and fix bugs, contributing to the overall reliability and functionality of internal applications..",
      "Took part in code reviews and unit tests to improve code quality and learn best practices in software development.",
    ],
  },
];

export const education = [
  {
    company: "Conestoga College",
    role: "IT Innovation & Design",
    duration: "September 2022 - Present",
    responsibilities: [
      "Maintained 3.94 GPA throught the program",
      "Coursework in software development, UX/UI design, and Mobile Development",
      "Developed web and mobile applications using React, Angular, .NET, and C#.",
      "Participated in team-based projects, focusing on agile methodologies and user-centered design.",
      "Engaged in extracurricular activities such as the Indie Game Jam, where I led a team in creating a game using Godot and C#.",
    ],
  },
];

export const projects = [
  {
    title: "Nax Chat",
    category: "FullStack",
    categoryColor: "bg-orange-400",
    description:
      "A web app for real-time messaging, where users can create conversation with other users and send messages to each other. The app has features like user authentication, encrypted messages/passwords, and Image/Video support. The app is built using React, Express, NodeJs, MongoDB, Socket.io, Jsonwebtoken, cloudinary, and Tailwind CSS.",
    mobileImgs: [NM1, NM2, NM3],
    tabletImg: NT1,
    desktopImg: ND1,

    techStack: [
      "React",
      "Tailwind CSS",
      "Express",
      "NodeJs",
      "MongoDB",
      "Socket.io",
      "Jsonwebtoken",
    ],
    isResponsive: true,
    githubLink: "https://github.com/SahilThakar11/Nax-Chat",
    liveLink: "https://nax-chat.onrender.com/",
    buttonName: "Live Demo",
    comingsoon: false,
    githubAvailable: true,
  },

  {
    title: "Savor Spot",
    category: "Mobile",
    mobileImgs: [SS1, SS2, SS3, SS4, SS5],
    isResponsive: false,
    isOnlyMobile: true,
    categoryColor: "bg-red-400",
    description:
      "A mobile app made using Angular, Bootstrap, IndexedDb, and Cordova. Its a food ordering app where users can view the menu, add items to the cart, and place an order. The app uses IndexedDB to store the cart items locally on the device. Also save the user's order history.",
    imageUrl: "https://placehold.co/600x400?text=Project+Templete",
    techStack: ["Angular", "Cordova", "IndexedDB", "Bootstrap", "TypeScript"],
    githubLink: "https://github.com/SahilThakar11/",
    liveLink: "/SavorSpot.apk",
    buttonName: "Install APK",
    comingsoon: false,
    githubAvailable: false,
  },
  {
    title: "Portfolio Website",
    category: "Frontend",
    isResponsive: true,
    desktopImg: PD1,
    mobileImgs: [PM1, PM2, PM3],
    tabletImg: PT1,
    categoryColor: "bg-pink-400",
    description:
      "A personal portfolio website showcasing my skills, projects, and work experience. The website is built using React, Tailwind CSS, and React Icons. The website is responsive and works on all devices.",
    techStack: ["React", "Tailwind CSS", "React Icons"],
    liveLink: "/",
    imageUrl: "https://placehold.co/600x400?text=Project+Templete",
    githubLink: "https://github.com/SahilThakar11/Portfolio",
    comingsoon: false,
    githubAvailable: true,
    buttonName: "Live Demo",
  },
  {
    title: "Galactic Conquest",
    category: "Game",
    categoryColor: "bg-green-400",
    description:
      "A 2D space shooter game made using Monogame, .Net and C#. The game offers boos fights and endless survival mode. There are 4 different bosses available now. With the feautes of shop where player can buy new ships and weapons. The game has a leaderboard to track the high scores. The game is available for Windows. ",
    imageUrl:
      "https://github.com/SahilThakar11/Galactic-Conquest-Space-Shooter-Game/blob/master/Imgs/g4.png?raw=true",
    techStack: ["C#", ".Net Core", "Monogame"],
    githubLink:
      "https://github.com/SahilThakar11/Galactic-Conquest-Space-Shooter-Game",
    liveLink: "/Galactic-Conquest.zip",
    buttonName: "Install Game",
    comingsoon: false,
    githubAvailable: true,
  },
];

const order = [
  "Language",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  "Design",
  "Game Development",
];

export const sortedSkills = order.map((section) => {
  const sectionSkills = skills.filter((skill) => skill.section === section);

  const primarySkills = sectionSkills.filter(
    (skill) => skill.color === "primary"
  );
  const secondarySkills = sectionSkills.filter(
    (skill) => skill.color === "secondary"
  );

  const interleavedSkills = [];
  const maxLength = Math.max(primarySkills.length, secondarySkills.length);

  for (let i = 0; i < maxLength; i++) {
    if (primarySkills[i]) {
      interleavedSkills.push(primarySkills[i]);
    }
    if (secondarySkills[i]) {
      interleavedSkills.push(secondarySkills[i]);
    }
  }

  return {
    section,
    skills: interleavedSkills,
  };
});
