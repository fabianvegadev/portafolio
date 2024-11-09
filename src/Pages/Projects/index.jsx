import { Element } from "react-scroll";
import { useContext } from "react";
import { MostroDevContext } from "../../Context";
import { primaryProjects, othersProjects } from "../../Data/Projects";
import { Layout } from "../../Components/Layout";
import { ScrollNav } from "../../Components/ScrollNav";
import { ProjectCard } from "../../Components/ProjectCard";
import { ExtendedProjectCard } from "../../Components/ExtendedProjectCard";
import "./styles.css";

const Projects = () => {
	const context = useContext(MostroDevContext);

	const navProjects = [
		{ key: "primary-projects", value: "Proyectos principales" },
		{ key: "others-projects", value: "Otros proyectos" },
	];

	return (
		<Layout>
			<ScrollNav navItems={navProjects} />
			<Element id="primary-projects">
				<h2>Proyectos principales</h2>
				<div className="page-project-cards-container">
					{context.isMobile &&
						primaryProjects.map((project, index) => (
							<ProjectCard key={index} {...project} />
						))}
					{context.isDesktop &&
						primaryProjects.map((project, index) => (
							<ExtendedProjectCard key={index} {...project} />
						))}
				</div>
			</Element>
			<Element id="others-projects">
				<h2>Otros Proyectos</h2>
				<div className="page-project-cards-container">
					{othersProjects.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))}
				</div>
			</Element>
		</Layout>
	);
};

export { Projects };
