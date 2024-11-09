import { useState } from "react";
import PropTypes from "prop-types";
import { FaAngleDown } from "react-icons/fa6";
import "./styles.css";

const SkillItem = ({ icon, name, description }) => {
	const [downDescription, setDownDescription] = useState(false);

	const handleDownDescription = () => {
		setDownDescription(!downDescription);
		console.log(downDescription);
	};

	return (
		<div className="skill-item">
			<div className="skill-item-down-container">
				<div className="skill-item-title-container">
					<figure className="skill-icon">{icon}</figure>
					<h4>{name}</h4>
				</div>
				<div>
					<FaAngleDown
						className={`${
							downDescription ? "down-icon__active" : "down-icon"
						}`.trim()}
						onClick={handleDownDescription}
					/>
				</div>
			</div>
			<p
				className={`${
					downDescription
						? "skill-item-description__active"
						: "skill-item-description"
				}`.trim()}
			>
				{description}
			</p>
		</div>
	);
};

SkillItem.propTypes = {
	icon: PropTypes.element.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export { SkillItem };
