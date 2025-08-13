import AchievementCard from "./AchievementCard";

interface Achievement {
  title: string;
  description: string;
  icon: string;
  year: string;
}

interface AchievementsSectionProps {
  achievements: Achievement[];
}

export default function AchievementsSection({ achievements }: AchievementsSectionProps) {
  return (
    <section id="achievements" className="py-16 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Achievements & Recognition</h2>
        <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
          Key milestones and recognitions that highlight my dedication to excellence and continuous learning.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}