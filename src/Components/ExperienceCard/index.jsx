import PropTypes from 'prop-types';
import './styles.css';

const ExperienceCard = ({ company, role, period, time, description, skills }) => {

    return (
        <div className="experience-card">
            <h3><strong>{role}</strong></h3>
            <h4>{company}</h4>
            <p className='secundary-paragraph experience-period'>{period}</p>
            <p className='secundary-paragraph experience-time'>{time}</p>
            <p className='secundary-paragraph experience-description'>{description}</p>            
            <ul className="experience-skills">
                {skills.map((skill, index) => (
                    <li key={index} className='skills'>{skill}</li>
                ))}
            </ul>            
        </div>
    )
};

ExperienceCard.propTypes = {
    company: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { ExperienceCard };
