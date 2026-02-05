import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
       id: 1,
       title: "Cloud-based finance tracker and dashboard",
       description: "Cloud-native finance app with secure auth, real-time dashboards, and AI-powered financial insights.",
       image:"/projects/project1.png",
       tags: ["AWS, React"],
       githubUrl: "#",
   },

  {
    id: 2,
    title: "LinkedIn Outreach Automation",
    description: "AI-driven LinkedIn outreach automation, reducing outreach time by 80%.",
    image: "/projects/project2.png",
    tags: ["Agentic AI, Apify, n8n"],
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Modular Data Management & ETL Pipelines",
    description:
      "Modular ETL pipelines for secure, automated data copying and sanitization across environments.",
    image: "/projects/project3.png",
    tags: ["Python, Airflow, MySQL, MongoDB"],
    githubUrl: "https://github.com/mehal-gosalia/modular-data-management-etl/tree/main",
  },
  {
       id: 4,
       title: "GDP vs Poverty-Literacy Analysis",
       description: "Interactive Tableau analysis of global GDP, literacy, and poverty using Python-processed datasets.",
       image:"/projects/project4.png",
       tags: ["Tableau, Python"],
       githubUrl: "https://github.com/mehal-gosalia/GDP-vs-Poverty-Literacy-Analysis",
  },
  {
       id: 5,
       title: "Economic efficiency of TIF districts",
       description: "Analyzed TIF district efficiency using SQL and PCA on unified economic and geographic data.",
       image:"/projects/project5.jpeg",
       tags: ["SQL, NumPy, GeoPandas, PCA, R"],
       githubUrl: "https://github.com/mehal-gosalia/economic-efficiency-tif-districts/tree/main",
  },
  {
       id: 6,
       title: "Chicago Wikipedia Search Engine",
       description: "Built a Flask-based Wikipedia search engine using TF-IDF and cosine similarity using unstructured data.",
       image:"/projects/project6.png",
       tags: ["Python, Flask, Scikit-learn, Scrapy"],
       githubUrl: "https://github.com/mehal-gosalia/GDP-vs-Poverty-Literacy-Analysis",
   },


];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/mehal-gosalia"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};