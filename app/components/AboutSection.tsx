import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-white dark:bg-slate-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Recent Computer Science graduate with a passion for full-stack development. I enjoy building scalable web applications and learning new technologies. My experience spans from frontend frameworks to backend APIs and database design.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                I'm always eager to take on new challenges and contribute to innovative projects that make a positive impact. When I'm not coding, you can find me exploring new technologies, contributing to open source, or playing chess.
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
  );
}