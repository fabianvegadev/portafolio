import { useContext } from "react";
import { MostroDevContext } from "../../Context";
import PropTypes from "prop-types";
import "./styles.css";

const ExtendedExperienceCard = ({
	company,
	role,
	period,
	time,
	description,
	skills,
}) => {
	const context = useContext(MostroDevContext);

	return (
		<div className="extended-experience-card">
			<h3>
				<strong>{role}</strong>
			</h3>
			<h4>{company}</h4>
			<p className="secundary-paragraph extended-experience-period">{period}</p>
			<p className="secundary-paragraph extended-experience-time">{time}</p>
			<p className="secundary-paragraph extended-experience-description">
				{description}
			</p>
			{!context.isMobile && (
				<ul className="extended-experience-skills">
					{skills.map((skill, index) => (
						<li key={index} className="skills">
							{skill}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

ExtendedExperienceCard.propTypes = {
	company: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
	period: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { ExtendedExperienceCard };
