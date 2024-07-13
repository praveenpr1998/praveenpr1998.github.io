import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Sonic Vision",
    description:
      "This is an app built for a Techathon competition.This app can scan and highlighting features help delivery drivers in quick pick up and deliverying packages. Based on scanned packages , app suggests the nearest delivery location.Once reached they can use the scanner to easily find the specific package again",
    tools: [
      "Reat Native",
      "UI Library",
      "Google Maps",
      "Google ML Kit",
      "vision-camera-code-scanner",
    ],
    role: "App Developer",
    code: "",
    demo: "",
    image: crefin,
  },
    {
    id: 2,
    name: "React NPM package for handling listeners",
    tools: ["React", "JavaScript", "Webpack", "Babel", "NPM"],
    role: "Library Developer",
    link: "https://www.npmjs.com/package/react-event-listener-utils",
    demo: "test",
    description:
      "A custom React hook utility for managing event listeners on specified child elements based on a parent element or document directly. It provides flexible and efficient event handling by supporting dynamic callback functions, error handling, and optional attribute removal. This utility aims to simplify event management in React projects, making it easy to add, handle, and remove event listeners with minimal boilerplate code.",
  },
  {
    id: 3,
    name: "My Portfolio Site",
    description:
      "This project is my personal portfolio site, built using Next.js for a seamless and efficient web experience. It leverages MongoDB to dynamically fetch and display data, ensuring the content is always up-to-date. The styling is powered by Tailwind CSS, providing a modern and responsive design. Email functionality is integrated using EmailJS, with added Google reCAPTCHA to ensure security against spam. Google Analytics is included to track visitor metrics and gain insights into user interactions",
    tools: [
      "Next JS",
      "MonogDB",
      "Tailwind CSS",
      "EmailJS",
      "Google Analytics",
      "Google reCAPTCHA",
    ],
    role: "Web Developer",
    code: "",
    demo: "",
    image: crefin,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
