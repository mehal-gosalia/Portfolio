import { useState } from "react";
import { cn } from "@/lib/utils";
import { Layout, Server, Wrench } from "lucide-react";

const skillGroups = {
  frontend: {
    icon: Layout,
    skills: [
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  backend: {
    icon: Server,
    skills: [
      "Python",
      "SQL",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "GraphQL",
      "Node.js",
      "Java",
      "Spring Boot",
      "R",
    ],
  },
  tools: {
    icon: Wrench,
    skills: [
      "Git/GitHub",
      "AWS",
      "Docker",
      "CI/CD",
      "Excel",
      "Power BI",
      "Tableau",
      "NLP & RAG",
      "VS Code",
      "Figma",
    ],
  },
};

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleGroups =
    activeCategory === "all"
      ? Object.entries(skillGroups)
      : [[activeCategory, skillGroups[activeCategory]]];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* FILTER BUTTONS */}
        <div className="flex justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full capitalize text-sm transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/60 text-muted-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* SKILL TILES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          {visibleGroups.map(([group, data], index) => {
            const Icon = data.icon;
            const isTools = group === "tools";

            return (
              <div
                key={group}
                className={cn(
                  `
                  w-full max-w-md
                  h-[320px]
                  rounded-2xl
                  bg-card/60 backdrop-blur-md
                  border border-white/5
                  px-6 py-6
                  flex flex-col items-center
                  transition-all duration-500
                  hover:shadow-lg hover:shadow-primary/10
                  animate-fade-up
                  `,
                  isTools && "md:col-span-2 md:mx-auto"
                )}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/* TITLE */}
                <h3 className="text-lg font-semibold text-primary capitalize mb-2">
                  {group}
                </h3>

                {/* ICON */}
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* SKILLS */}
                <div className="flex flex-wrap justify-center gap-3 overflow-hidden">
                  {data.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        px-4 py-2 rounded-full text-sm
                        bg-secondary/50
                        border border-white/5
                        hover:bg-primary/20 hover:text-primary
                        transition-all duration-300
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
