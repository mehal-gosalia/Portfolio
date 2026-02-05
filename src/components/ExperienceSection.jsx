const experiences = [
  {
    role: "Product Data Manager",
    org: "Saayam For All",
    time: "Aug 2025 – Present",
    description: (
      <>
        Driving <span className="font-semibold">product analytics</span>,{" "}
        <span className="font-semibold">A/B experimentation</span>, and{" "}
        <span className="font-semibold">cohort insights</span> to measure
        engagement shifts.
      </>
    ),
    logo: "/src/logos/SFA.png",
  },
  {
    role: "SDE Intern",
    org: "Pirimid Fintech",
    time: "May 2024 – Sept 2024",
    description: (
      <>
        Built and optimized{" "}
        <span className="font-semibold">Python-based NLP pipelines</span> and web
        services, improving{" "}
        <span className="font-semibold">model accuracy</span> and system
        reliability.
      </>
    ),
    logo: "/src/logos/PF.png",
  },
  {
    role: "Teaching Assistant",
    org: "Illinois Institute of Technology",
    time: "Aug 2023 – May 2024",
    description: (
      <>
        Supported coursework delivery through{" "}
        <span className="font-semibold">instruction assistance</span>,{" "}
        <span className="font-semibold">grading</span>, and student mentoring.
      </>
    ),
    logo: "/src/logos/iitcc.png",
  },
  {
    role: "HR Student Assistant",
    org: "Illinois Institute of Technology",
    time: "Nov 2021 – May 2023",
    description: (
      <>
        Streamlined internal workflows using{" "}
        <span className="font-semibold">Excel automation</span> to reduce manual
        effort and improve reporting accuracy.
      </>
    ),
    logo: "/src/logos/iit.png",
  },
  {
    role: "Data Analyst Intern",
    org: "Manipal University",
    time: "Jul 2019 – Aug 2019",
    description: (
      <>
        Performed <span className="font-semibold">SQL-based analysis</span> and
        built <span className="font-semibold">Tableau dashboards</span> to surface
        KPI insights from multi-source data.
      </>
    ),
    logo: "/src/logos/MP.png",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Professional <span className="text-primary">Experience</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`
                group gradient-border card-hover
                w-full max-w-sm min-h-[200px]
                px-6 py-5
                flex flex-col
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-xl
                animate-experience
                ${index >= 3 ? "lg:translate-x-1/2" : ""}
              `}
            >
              {/* HEADER BLOCK — LOGO LEFT, TEXT STACKED CENTERED */}
                
                <div className="flex justify-center">
                <div className="flex items-center gap-4">
                    {/* LOGO (LEFT, FIXED) */}
                    <img
                    src={exp.logo}
                    alt={exp.org}
                    className="w-14 h-14 rounded-full object-contain text-primary"
                    />

                    {/* TEXT STACK — CENTERED, VERTICAL */}
                    <div className="flex flex-col items-center text-center">
                    {/* ROLE */}
                    <span className="px-4 py-1 mb-1 text-sm font-semibold rounded-full bg-primary/15 text-primary">
                        {exp.role}
                    </span>

                    {/* COMPANY */}
                    <p className="font-bold text-sm">{exp.org}</p>

                    {/* TIME */}
                    <p className="text-xs text-muted-foreground">
                        {exp.time}
                    </p>
                    </div>
                </div>
                </div>



              {/* DESCRIPTION */}
              <div className="mt-5 flex flex-1 items-center justify-center">
                <div className="bg-secondary/40 rounded-xl px-4 py-3 text-sm text-muted-foreground text-center">
                  {exp.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
