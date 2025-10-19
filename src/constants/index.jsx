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
  SiKotlin,
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

import RP1 from "../assets/RecipeApp/RP3.png";
import RP2 from "../assets/RecipeApp/RP1.png";
import RP3 from "../assets/RecipeApp/RP2.png";
import RP4 from "../assets/RecipeApp/RP4.png";
import RP5 from "../assets/RecipeApp/RP6.png";
import RP6 from "../assets/RecipeApp/RP5.png";
import RP7 from "../assets/RecipeApp/RP7.png";
import RPP1 from "../assets/RecipeApp/ux/p1.png";
import RPP2 from "../assets/RecipeApp/ux/p2.png";
import RPS1 from "../assets/RecipeApp/ux/s1.png";
import RPS2 from "../assets/RecipeApp/ux/s2.png";
import RPW from "../assets/RecipeApp/ux/wireframes.png";
import RPPF from "../assets/RecipeApp/ux/final-pro.png";

const skills = [
  {
    title: "HTML",
    section: "Frontend",
    icon: <SiHtml5 className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "CSS",
    section: "Frontend",
    icon: <SiCss3 className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "JavaScript",
    section: "Language",
    icon: <SiJavascript className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "C#",
    section: "Language",
    icon: <SiCsharp className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: ".NET",
    section: "Backend",
    icon: <SiDotnet className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "React",
    section: "Frontend",
    icon: <SiReact className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "Angular",
    section: "Frontend",
    icon: <SiAngular className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "Node.js",
    section: "Backend",
    icon: <SiNodedotjs className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "Express",
    section: "Backend",
    icon: <SiExpress className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "MongoDB",
    section: "Database",
    icon: <SiMongodb className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "MySQL",
    section: "Database",
    icon: <SiMysql className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "Git",
    section: "Tools",
    icon: <SiGit className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "VS Code",
    section: "Tools",
    icon: <SiVisualstudiocode className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "MS Azure",
    section: "Tools",
    icon: <SiMicrosoftazure className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "Figma",
    section: "Design",
    icon: <SiFigma className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "Photoshop",
    section: "Design",
    icon: <SiAdobephotoshop className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },

  {
    title: "TypeScript",
    section: "Language",
    icon: <SiTypescript className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "PostgreSQL",
    section: "Database",
    icon: <SiPostgresql className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "Tailwind CSS",
    section: "Frontend",
    icon: <SiTailwindcss className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "Bootstrap",
    section: "Frontend",
    icon: <SiBootstrap className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "Docker",
    section: "Testing",
    icon: <SiDocker className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "Unity",
    section: "Game Development",
    icon: <SiUnity className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "Godot",
    section: "Game Development",
    icon: <SiGodotengine className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "GitHub",
    section: "Tools",
    icon: <SiGithub className="h-16 w-16 mx-2 my-2 fill-primary" />,
  },
  {
    title: "Kotlin",
    section: "Language",
    icon: <SiKotlin className="h-16 w-16 mx-2 my-2 fill-primary" />,
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
    title: "Let's Cook and Share",
    category: "UI/UX",
    categoryColor: "bg-blue-600",
    description:
      "A recipe sharing web app where users can share their recipes with others. The app has features like user authentication, recipe creation, and recipe sharing. The app is built using Figma and Adobe Photoshop.",
    mobileImgs: [RP1, RP2, RP3, RP4],
    isOnlyMobile: true,

    techStack: ["Figma"],
    comingsoon: false,
    githubAvailable: false,
    isCaseStudy: true,
    caseStudyLink: "/case-study/lets-cook-and-share",
  },
  {
    title: "Nax Chat",
    category: "FullStack",
    categoryColor: "bg-violet-600",
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
    categoryColor: "bg-red-600",
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
    categoryColor: "bg-pink-600",
    description:
      "A personal portfolio website showcasing my skills, projects, and work experience. The website is built using React, Tailwind CSS, and React Icons. The website is responsive and works on all devices.",
    techStack: ["React", "Tailwind CSS", "React Icons"],
    liveLink: "/",
    githubLink: "https://github.com/SahilThakar11/Portfolio",
    comingsoon: false,
    githubAvailable: true,
    buttonName: "Live Demo",
  },
  {
    title: "Galactic Conquest",
    category: "Game",
    categoryColor: "bg-fuchsia-600",
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

export const caseStudies = [
  {
    id: "lets-cook-and-share",
    title: "Let's Cook and Share",
    projectOverview:
      "This project focused on designing a recipe and cooking application that simplifies meal preparation and enhances the overall cooking experience. The goal was to create a user-friendly platform that allows people to easily search for recipes, manage their ingredients, and share their culinary creations. From initial sketches to high-fidelity prototypes, the project followed a structured design process to ensure the solution was both functional and enjoyable to use.",
    problemStatement:
      "Cooking at home often becomes overwhelming due to difficulties in finding recipes, keeping track of ingredients, and managing time efficiently. Many existing recipe apps lack intuitive navigation, clutter-free layouts, or features that connect recipes directly to users’ pantry items. The challenge was to design a solution that reduced decision fatigue, improved accessibility, and empowered users to cook with confidence while avoiding food waste.",
    userInterview:
      "User research involved interviews with different types of home cooks, from busy students to family-oriented individuals. Insights revealed key frustrations such as complicated interfaces, difficulty finding recipes that matched available ingredients, and lack of reminders for expiring groceries. These findings shaped the personas and guided the design toward features that prioritize convenience, personalization, and clarity.",
    marketAnalysis:
      "An analysis of popular cooking apps showed that while many offer large recipe databases, they often fail to integrate smart ingredient management or user-friendly interfaces. Competitors also tend to overload users with options, leading to decision fatigue. This gap in the market provided an opportunity to build a platform that balances simplicity with functionality, standing out by connecting recipe discovery with real-time inventory tracking.",
    solutions:
      "Create a clean, intuitive interface that makes navigation seamless. Provide smart search and categorization to reduce cognitive load. Incorporate notifications for expiring groceries to reduce waste. Enable personalization through user profiles and saved recipes. Solutions included a search-driven homepage, detailed recipe pages with step-by-step instructions, and a notification system tied to ingredient management.",
    userTesting:
      "Prototypes were tested with potential users to validate usability and design choices. Feedback confirmed that the search feature was clear and effective, while the notification system was appreciated for its practicality. Iterations focused on improving visual hierarchy, reducing clutter, and ensuring accessibility through scalable fonts and contrasting colors.",
    finalSolution:
      "The final design is a recipe and cooking platform that integrates recipe discovery, ingredient tracking, and personalized user features. By applying principles from cognitive psychology—such as Hick’s Law, Miller’s Law, and Gestalt principles—the app reduces decision fatigue, organizes information logically, and ensures smooth navigation. The solution delivers a seamless cooking experience, catering to both novice and experienced users.",
    theDesignBrief:
      "The design brief called for a digital solution that enhances the home cooking experience by reducing stress, saving time, and cutting down on food waste. The application needed to be visually appealing, easy to use, and adaptable for a wide range of users. The final product reflects these requirements by blending functional features with a clean design system, ensuring accessibility and engagement throughout the user journey.",
    sketchesImgs: [RPS1, RPS2],
    wireframeImgs: [RPW],
    prototypeImgs: [RPPF],
    personaImgs: [RPP1, RPP2],
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

  return { section, skills: sectionSkills };
});
