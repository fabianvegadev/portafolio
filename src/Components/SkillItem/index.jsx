import { SkillLevelChart } from "../SkillLevelChart";

const SkillItem = ({ name, level, description, yearsOfExperience }) => {
    return (
        <div className="skill-item">
            <h3>{name}</h3>
            <SkillLevelChart level={level} />
            <p>{description}</p>
            <p>Years of Experience: {yearsOfExperience}</p>
        </div>
    );
};

export { SkillItem };