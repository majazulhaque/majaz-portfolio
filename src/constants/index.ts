import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets/index";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "BharatPod - AI Podcast Platform",
    desc: "BharatPod is a Software-as-a-Service platform that provides podcasting services using openAI. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate podcasts in multiple languages from a single text input.",
    subdesc:
      "Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, BharatPod is designed for optimal performance and scalability.",
    href: "https://bharat-pod-ku6n.vercel.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "SyncSpace - Real-Time meeting app",
    desc: "SyncSpace is a powerful collaborative app that elevates the capabilities of real-time video meetings. With multiple features like live streams, It supports multiple collaborators simultaneously, ensuring that every realtime video meeting is seamless.",
    subdesc:
      "With SyncSpace, users can experience the future of collaboration, where multiple contributors meet together in real time without any lag, by using the power of video conferencing.",
    href: "https://sync-space-weld.vercel.app/",
    texture: "/textures/project/project2.mp4",
    logo: "https://sync-space-weld.vercel.app/icons/logo.svg",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "ProVision - iphone 15 pro landing page",
    desc: "The iPhone 15 Pro is a groundbreaking smartphone that elevates performance, design, and user experience. It features an advanced A17 chip, stunning ProMotion display, and superior camera system.",
    subdesc:
      "Built with innovation at its core, the iPhone 15 Pro integrates cutting-edge technology like a 120Hz OLED display, enhanced photography with ProRAW, and improved battery life. Experience seamless performance with iOS, leveraging powerful hardware & software synergy.",
    href: "https://pro-vision-i-phone.vercel.app/",
    texture: "/textures/project/project3.mp4",
    logo: "https://pro-vision-i-phone.vercel.app/assets/images/apple.svg",
    logoStyle: {
      backgroundColor: "#000000",
      background:
        "linear-gradient(0deg, #00000050, #00000050), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.5)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

interface Sizes {
  deskScale: [number, number, number];
  deskPosition: [number, number, number];
  targetPosition: [number, number, number];
  reactLogoPosition: [number, number, number];
  ringPosition: [number, number, number];
  cubePosition: [number, number, number];
}

export const calculateSizes = (
  isSmall: boolean,
  isMobile: boolean,
  isTablet: boolean
): Sizes => {
  return {
    deskScale: isSmall
      ? [0.05, 0.05, 0.05]
      : isMobile
      ? [0.06, 0.06, 0.06]
      : [0.065, 0.065, 0.065],
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "CycleCircle",
    pos: "Full Stack Developer",
    duration: "2023 - Present",
    title:
      "As a full-stack developer at Cyclecircle for the past year, I have continued building upon the MERN stack foundation and taken the website to an advanced level. I focus on enhancing both front-end and back-end features, improving user experience, and optimizing functionality for the company's cycling parts B2B platform.",
    icon: "https://www.cyclecircle.one/static/media/Cycle-Circle-Logo-Orange-1.18b0a8525b53bce0ebd4.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "CycleCircle",
    pos: "Web Developer Intern",
    duration: "Aug-Oct,2023",
    title:
      "As a web developer intern at Cyclecircle, a B2B cycling parts company, I built the website from scratch using the MERN stack. While working on both front and back-end development, I primarily focused on the frontend, designing and implementing user interfaces to enhance customer experience and streamline product navigation.",
    icon: "https://www.cyclecircle.one/static/media/Cycle-Circle-Logo-White-1.d371c720871713f32fd9.png",
    animation: "clapping",
  },
];

export const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];
