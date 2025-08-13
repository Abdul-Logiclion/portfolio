import AboutSection from "./AboutSection";
import AchievementsSection from "./AchievementsSection";
import ContactSection from "./ContactSection";
import ExperienceSection from "./ExperienceSection";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

// Your data is kept here or can be moved to a separate data file for even better organization.
const portfolioData = {
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Python", "Java", "Express.js", "Fast API"],
    database: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    tools: ["Git", "Docker", "Kubernetes", "Vercel", "Linux", "Figma"],
  },
  projects: [
    {
      title: "JobEase: AI Career Agent For IT Job Seekers",
      description: "Scraped job listings from 5 platforms and utilized Gemini APIs. Developed web and mobile interfaces, backed by a MongoDB database.",
      tech: ["Python", "React.js", "TypeScript", "Express.js", "MongoDB", "Google Gemini API"],
      github: "https://github.com/Abdul-logiclion",
      demo: "https://jobease-frontend-n3wo.vercel.app/",
      image: "/jobease.png?height=200&width=400&text=JobEase+AI+Agent",
    },
    {
      title: "AI Product Scraper: Global Market Intelligence",
      description: "AI Assistant for Scraping Amazon Product Data using Keywords to Gather Market Intelligence. Implemented postal code processing and utilized Scrapy for contacts.",
      tech: ["Next.js", "Supabase", "PostgreSQL", "FastAPI", "Scrapy", "Pandas", "Selenium", "BeautifulSoup", "Python"],
      github: "https://github.com/Abdul-logiclion",
      demo: "https://global-market-intelligence-szxu.vercel.app/",
      image: "/scraper.png?height=200&width=400&text=AI+Product+Scraper",
    },
  ],
  experience: [
    {
      title: "MERN Stack Developer",
      company: "India (Remote)",
      period: "July 2024 - December 2024",
      description: [
        "Consolidated data from three platforms (Jira, ServiceNow, and Salesforce) into a MERN stack application, which improved data accessibility and reporting efficiency.",
        "Built over five custom React-based reports for in-browser PDF generation, streamlining the data-sharing process for key stakeholders.",
        "Created three custom Jira plugins, extending Jira’s default functionality and reducing manual data retrieval time by an estimated 20%.",
      ],
    },
    {
      title: "Front end Intern",
      company: "National Incubation Center",
      period: "Oct '22 - Mar '23",
      description: "Developed the user interface for the MedPro Website.",
    },
  ],
  achievements: [
    {
      title: "Winner, SibaFest25 speed programming Competition",
      description: "Speed programming competition winner at SibaFest25.",
      icon: "🏆",
      year: "May '25",
    },
    {
      title: "Runner-Up, CS Society Programming Competition",
      description: "Runner-Up in CS Society Programming Competition.",
      icon: "🥈",
      year: "Feb '25",
    },
  ],
};

export default function Portfolio() {
  const { skills, projects, experience, achievements } = portfolioData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ExperienceSection experience={experience} />
        <AchievementsSection achievements={achievements} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}