import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <Image
          src="/profile12.jpg"
          alt="Abdul Jabar"
          width={250}
          height={250}
          className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Abdul Jabbar Rahimoon
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6">
          Full-Stack Web Developer & Computer Science Graduate
        </p>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8">
          Passionate about creating innovative web applications and solving complex problems with clean, efficient code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://drive.google.com/file/d/1mFDoHW2MLbPOLKbggZtNhORDq7SaQm2h/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </a>
          <div className="flex space-x-4">
            <Link href="https://github.com/Abdul-Logiclion" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon"><Github className="w-4 h-4" /></Button>
            </Link>
            <Link href="https://www.linkedin.com/in/abdul-jabbar-rahimoon" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon"><Linkedin className="w-4 h-4" /></Button>
            </Link>
            <Link href="mailto:abduljabarsc01@gmail.com" rel="noopener noreferrer">
              <Button variant="outline" size="icon"><Mail className="w-4 h-4" /></Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}