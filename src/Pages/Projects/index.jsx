import { primaryProjects } from "../../Data/PrimaryProjects";
import { Layout } from "../../GeneralComponents/Layout";
import { ProjectCard } from "./Components/ProjectCard";
import './styles.css';

const Projects = () => {

    return (
        <Layout>
            <h2>Proyectos principales</h2>
            <div className="project-cards-container">
                {primaryProjects.map((project, index) => (
                    <ProjectCard key={index}{...project}/>
                ))}                
            </div>
        </Layout>
    )
}

export { Projects };