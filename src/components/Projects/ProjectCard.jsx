import './ProjectCard.css';

const ProjectCard = ({ title, description, tags, link }) => {
  return (
    <div className="project-card animate-on-scroll">
      <div className="project-header">{title}</div>
      <p>{description}</p>
      <div className="project-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <a href={link} className="project-link">View Project →</a>
    </div>
  );
};

export default ProjectCard;
