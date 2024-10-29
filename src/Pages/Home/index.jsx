import { primaryProjects } from "../../Data/PrimaryProjects";
import { HomeAboutMe } from "./Components/HomeAboutMe";
import { HomeStack } from "./Components/HomeStack";
import { CardProject } from "../Projects/CardProject";
import { Layout } from "../../GeneralComponents/Layout";

const Home = () => {

    return (
        <>
            <HomeAboutMe/>
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
            <HomeStack/>
        </>
    )
}

export { Home };