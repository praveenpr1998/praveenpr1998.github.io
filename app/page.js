import { personalData } from "../utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import { NewsCards } from "./components/homepage/news";
async function getData() {
  const res = await fetch(
    `https://v1.nocodeapi.com/${personalData.devUsername}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data.");
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.title);
  return filtered;
}

async function getNews() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=0e4532808942411185656d3d5a35ae0a`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data.");
  }

  const data = await res.json();
  return Array.isArray(data?.articles) ? data.articles : [];
}

export default async function Home() {
  const blogs = await getData();
  const news = await getNews();
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <NewsCards news={news} />
      <ContactSection />
    </>
  );
}
