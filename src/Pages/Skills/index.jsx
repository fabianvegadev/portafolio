import { Layout } from "../../Components/Layout";
import { SkillItem } from "../../Components/SkillItem";

const skillsData = [
    {
        name: 'React',
        level: 'Advanced',
        description: 'Experienced in building interactive UIs with React.',
        yearsOfExperience: 3,
    },
    {
        name: 'JavaScript',
        level: 'Intermediate',
        description: 'Solid understanding of JavaScript ES6+ features and best practices.',
        yearsOfExperience: 2,
    },
    {
        name: 'Python',
        level: 'Intermediate',
        description: 'Proficient in Python for backend development and data analysis.',
        yearsOfExperience: 2,
    },
];

const Skills = () => {
return (
        <Layout id="skills" className="skills-section">
            <h2>Skills</h2>
            <div className="skills-list">
            {skillsData.map((skill, index) => (
                <SkillItem
                key={index}
                name={skill.name}
                level={skill.level}
                description={skill.description}
                yearsOfExperience={skill.yearsOfExperience}
                />
            ))}
            </div>
        </Layout>
    );
};

export { Skills };
