import { useContext } from "react";
import { MostroDevContext } from "../../Context";
import { experiences } from "../../Data/Experiences";
import { Layout } from "../../Components/Layout";
import { ExperienceCard } from "../../Components/ExperienceCard";
import { ExtendedExperienceCard } from "../../Components/ExtendedExperienceCard";
import "./styles.css";

const Experience = () => {
	const context = useContext(MostroDevContext);

	return (
		<Layout>
			<div name="tech" className="page-experience-cards-container">
				<h2>Experiencia Laboral</h2>
				{context.isMobile &&
					experiences.map((exp, index) => (
						<ExperienceCard key={index} {...exp} />
					))}
				{context.isDesktop &&
					experiences.map((exp, index) => (
						<ExtendedExperienceCard key={index} {...exp} />
					))}
			</div>
		</Layout>
	);
};

export { Experience };
