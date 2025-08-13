import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Smartphone } from "lucide-react";

interface Skills {
  frontend: string[];
  backend: string[];
  database: string[];
  tools: string[];
}

interface SkillsSectionProps {
  skills: Skills;
}

const SkillCard = ({ title, icon, skills }: { title: string, icon: React.ReactNode, skills: string[] }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center">
        {icon}
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="outline">{skill}</Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard title="Frontend" icon={<Globe className="w-5 h-5 mr-2 text-blue-600" />} skills={skills.frontend} />
          <SkillCard title="Backend" icon={<Code className="w-5 h-5 mr-2 text-green-600" />} skills={skills.backend} />
          <SkillCard title="Database" icon={<Database className="w-5 h-5 mr-2 text-purple-600" />} skills={skills.database} />
          <SkillCard title="Tools" icon={<Smartphone className="w-5 h-5 mr-2 text-orange-600" />} skills={skills.tools} />
        </div>
      </div>
    </section>
  );
}