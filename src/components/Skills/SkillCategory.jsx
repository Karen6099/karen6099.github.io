import './SkillCategory.css';

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="skill-category animate-on-scroll">
      <h3>{title}</h3>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">{skill}</div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
