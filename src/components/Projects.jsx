import ProjectCard from './ProjectCard';
import { projectsData } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#7600bc] mb-12">Projects</h2>
      <div className="space-y-8 max-w-3xl mx-auto">
        {projectsData.map((project, index) => (
          <div key={project.id}>
            <ProjectCard {...project} />
            {index < projectsData.length - 1 && <hr className="my-8 border-gray-200" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;