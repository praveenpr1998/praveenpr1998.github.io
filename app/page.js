import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import dbConnect from "./lib/dbConnect";
async function getData() {
  const res = await fetch(
    `https://v1.nocodeapi.com/${personalData.devUsername}`,
    { cache: "no-cache" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data.");
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.title);
  return filtered;
}

export default async function Home() {
  await dbConnect();
  const blogs = await getData();
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </>
  );
}
