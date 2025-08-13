import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-white dark:bg-slate-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
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
  );
}