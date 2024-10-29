import { primaryProjects } from "../../Data/PrimaryProjects";
import { Layout } from "../../GeneralComponents/Layout";
import { CardProject } from "./CardProject";
import './styles.css';

const Projects = () => {

    return (
        <Layout>
            <h2>Proyectos principales</h2>
            <div className="projects-container">
                {primaryProjects.map((project, index) => (
                    <CardProject
                        key={index}
                        image={project.image}
                        title={project.title}
                        techs={project.techs}
                        description={project.description}
                        linkGitHub={project.linkGitHub}
                        linkPreview={project.linkPreview}/>
                ))}                
            </div>
        </Layout>
    )
}

export { Projects };