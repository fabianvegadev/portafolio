import PropTypes from 'prop-types';
import { SkillLevelChart } from "../SkillLevelChart";
import './styles.css'

const SkillItem = ({ name, level, description, yearsOfExperience }) => {

    return (
        <div className="skill-item">
            <h3>{name}</h3>
            <SkillLevelChart className='skill-level-chart'level={level} />
            <div className='skill-item-description-container'>
                <p className='secundary-paragraph'>{description}</p>
            </div>
            <h4>Años de experiencia: <strong>{yearsOfExperience}</strong></h4>
        </div>
    );

};

SkillItem.propTypes = {
    name: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    yearsOfExperience: PropTypes.number.isRequired,
};

export { SkillItem };