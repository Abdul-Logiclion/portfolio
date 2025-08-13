import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Database, Globe, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Python", "Java", "Express.js", "Fast API"],
    database: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    tools: ["Git", "Docker","Kubernetes", "Vercel", "Linux", "Figma"],
  }

  const projects = [
  {
    title: "JobEase: AI Career Agent For IT Job Seekers",
    description: "Scraped job listings from 5 platforms and utilized Gemini APIs. Developed web and mobile interfaces, backed by a MongoDB database.",
    tech: ["Python", "React.js", "TypeScript", "Express.js", "MongoDB", "Google Gemini API"],
    github: "https://github.com/Abdul-logiclion", // Replace with actual GitHub link if available
    demo: "https://jobease-frontend-n3wo.vercel.app/", // As per resume, which might not be a direct URL. If you have a specific URL for the demo, replace this.
    image: "/jobease.png?height=200&width=400&text=JobEase+AI+Agent",
  },
  {
    title: "AI Product Scraper: Global Market Intelligence",
    description: "AI Assistant for Scraping Amazon Product Data using Keywords to Gather Market Intelligence. Implemented postal code processing and utilized Scrapy for contacts.",
    tech: ["Next.js", "Supabase", "PostgreSQL", "FastAPI", "Scrapy", "Pandas", "Selenium", "BeautifulSoup", "Python"],
    github: "https://github.com/Abdul-logiclion", // Replace with actual GitHub link if available
    demo: "https://global-market-intelligence-szxu.vercel.app/", // As per resume, which might not be a direct URL. If you have a specific URL for the demo, replace this.
    image: "/scraper.png?height=200&width=400&text=AI+Product+Scraper",
  },
];

const experience = [
  {
  "title": "MERN Stack Developer",
  "company": "India (Remote)",
  "period": "July 2024 - December 2024",
  "description": [
    "Consolidated data from three platforms (Jira, ServiceNow, and Salesforce) into a MERN stack application, which improved data accessibility and reporting efficiency.",
    "Built over five custom React-based reports for in-browser PDF generation, streamlining the data-sharing process for key stakeholders.",
    "Created three custom Jira plugins, extending Jira’s default functionality and reducing manual data retrieval time by an estimated 20%."
  ]
},
  {
    title: "Front end Intern",
    company: "National Incubation Center",
    period: "Oct 22 - Mar '23",
    description: "Developed the user interface for the MedPro Website.",
  },
];

const achievements = [
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
  {
    title: "Next js App Router Course, Vercel",
    description: "Certification for Next.js App Router Course from Vercel.",
    icon: "🎓",
    year: "Jul '24",
  },
  {
    title: "Introduction to MongoDB, MongoDB University",
    description: "Certification in Introduction to MongoDB from MongoDB University.",
    icon: "🎓",
    year: "May '24",
  },
  {
    title: "Back End Development and APIs, freeCodeCamp",
    description: "Certification in Back End Development and APIs from freeCodeCamp.",
    icon: "🎓",
    year: "Jul '25",
  },
  {
    title: "Problem Solving (Intermediate), HackerRank",
    description: "Certification in Problem Solving (Intermediate) from HackerRank.",
    icon: "🎓",
    year: "Apr '25",
  },
];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Abdul Jabar</h1>
          <div className="hidden md:flex space-x-6">
            <Link href="#about" className="hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-blue-600 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="hover:text-blue-600 transition-colors">
              Experience
            </Link>
            <Link href="#achievements" className="hover:text-blue-600 transition-colors">
              Achievements
            </Link>
            <Link href="#contact" className="hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/profile12.jpg?text=Profile"
              alt="Abdul Jabar"
              width={250}
              height={250}
              className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Abdul Jabbar Rahimoon
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6">
              Full-Stack Web  Developer & Computer Science Graduate
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              Passionate about creating innovative web applications and solving complex problems with clean, efficient
              code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <a
  href="https://drive.google.com/file/d/1mFDoHW2MLbPOLKbggZtNhORDq7SaQm2h/view?usp=drive_link"
  target="_blank" // Opens the link in a new tab
  rel="noopener noreferrer" // Essential for security when opening in a new tab
   className="cursor-pointer"
>
  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
    <Download className="w-4 h-4 mr-2" />
    Download Resume
  </Button>
</a>
              <div className="flex space-x-4">
                <Link href="https://github.com/Abdul-Logiclion" target="_blank" rel="noopener noreferrer">
    <Button variant="outline" size="icon">
      <Github className="w-4 h-4" />
    </Button>
  </Link>

   <Link href="https://www.linkedin.com/in/abdul-jabbar-rahimoon" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Linkedin className="w-4 h-4" />
                </Button>
                </Link>
                 <Link href="mailto:abduljabarsc01@gmail.com"  rel="noopener noreferrer">
                <Button  variant="outline" size="icon">
                  <Mail className="w-4 h-4" />
               
                </Button>
                </Link>
    
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  Recent Computer Science graduate with a passion for full-stack development. I enjoy building scalable
                  web applications and learning new technologies. My experience spans from frontend frameworks to
                  backend APIs and database design.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  I'm always eager to take on new challenges and contribute to innovative projects that make a positive
                  impact. When I'm not coding, you can find me exploring new technologies, contributing to open source,
                  or playing chess.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Problem Solver</Badge>
                  <Badge variant="secondary">Team Player</Badge>
                  <Badge variant="secondary">Quick Learner</Badge>
                  <Badge variant="secondary">Open Source Contributor</Badge>
                </div>
              </div>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Code className="w-5 h-5 mr-2 text-blue-600" />
                      <h3 className="font-semibold">Education</h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Bachelor of Science in Computer Science
                      <br />
                      Sukkur IBA University • May 2025
                      <br />
                     
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Globe className="w-5 h-5 mr-2 text-green-600" />
                      <h3 className="font-semibold">Location</h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Karachi, Pakistan
                      <br />
                      Open to remote opportunities
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-blue-600" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="w-5 h-5 mr-2 text-green-600" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="w-5 h-5 mr-2 text-purple-600" />
                  Database
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.database.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smartphone className="w-5 h-5 mr-2 text-orange-600" />
                  Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.github}>
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                     <ExternalLink className="w-4 h-4 mr-1" />
                        Try it here
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {experience.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-600">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Achievements & Recognition</h2>
          <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            Key milestones and recognitions that highlight my dedication to excellence and continuous learning.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{achievement.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {achievement.year}
                        </Badge>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
            to say hi, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="w-4 h-4 mr-2" />
              abduljabarsc01@gmail.com
            </Button>
            <Link href="https://www.linkedin.com/in/abdul-jabbar-rahimoon" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn Profile
            </Button>
            </Link>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-200 dark:border-slate-700">
        <div className="container mx-auto text-center">
          <p className="text-slate-500 dark:text-slate-400">
            © 2025 Abdul Jabar. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
