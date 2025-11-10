import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of your first project goes here. Highlight the technologies used and the impact it made.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: '#'
    },
    {
      title: 'Project 2',
      description: 'Description of your second project goes here. Highlight the technologies used and the impact it made.',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Project 3',
      description: 'Description of your third project goes here. Highlight the technologies used and the impact it made.',
      tags: ['Vue', 'Firebase', 'Tailwind'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
