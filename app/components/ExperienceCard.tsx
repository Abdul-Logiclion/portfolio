import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceCardProps {
  exp: {
    title: string;
    company: string;
    period: string;
    description: string | string[];
  };
}

export default function ExperienceCard({ exp }: ExperienceCardProps) {
  const renderDescription = () => {
    if (Array.isArray(exp.description)) {
      return (
        <ul className="list-disc list-inside text-slate-600 dark:text-slate-300">
          {exp.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p className="text-slate-600 dark:text-slate-300">{exp.description}</p>;
  };

  return (
    <Card>
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
        {renderDescription()}
      </CardContent>
    </Card>
  );
}