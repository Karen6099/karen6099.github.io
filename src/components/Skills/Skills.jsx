import SkillCategory from './SkillCategory';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Express', 'MongoDB', 'PostgreSQL']
    },
    {
      title: 'Tools',
      skills: ['Git', 'VS Code', 'Webpack', 'Docker', 'AWS']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
