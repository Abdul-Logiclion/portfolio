import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Abdul Jabar</h1>
        <div className="hidden md:flex space-x-6">
          <Link href="#about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="#skills" className="hover:text-blue-600 transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-blue-600 transition-colors">Projects</Link>
          <Link href="#experience" className="hover:text-blue-600 transition-colors">Experience</Link>
          <Link href="#achievements" className="hover:text-blue-600 transition-colors">Achievements</Link>
          <Link href="#contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}