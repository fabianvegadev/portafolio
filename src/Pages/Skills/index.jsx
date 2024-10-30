import { Layout } from "../../Components/Layout";
import { SkillItem } from "../../Components/SkillItem";
import { skillsData } from "../../Data/SkillsData";
import './styles.css'

const Skills = () => {
return (
        <Layout className="page-skills-section">
            <h2>Skills</h2>
            <div className="skills-list">
            {skillsData.map((skill, index) => (
                <SkillItem key={index} {...skill}/>
            ))}
            </div>
        </Layout>
    );
};

export { Skills };
