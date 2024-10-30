// ExperienceCard.jsx
import PropTypes from 'prop-types';
import { CustomLink } from '../../../../GeneralComponents/CustomLink';
import { paths } from '../../../../Routes/Paths';
import './styles.css';

const ExperienceCard = ({ company, role, period, description, skills }) => {

    return (
        <div className="experience-card">
            <h3>{role}</h3>
            <h4>{company}</h4>
            <p className='secundary-paragraph'>{period}</p>
            <p className='secundary-paragraph'>{description}</p>
            <CustomLink to={paths.underConstruction}><u>Ver mas...</u></CustomLink>
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
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { ExperienceCard };
