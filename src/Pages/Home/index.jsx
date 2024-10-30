import { primaryProjects } from "../../Data/PrimaryProjects";
import { experiences } from '../../Data/Experiences'
import { HomeAboutMe } from "./Components/HomeAboutMe";
import { ProjectCard } from "../Projects/Components/ProjectCard";
import { HomeStack } from "./Components/HomeStack";
import { ExperienceCard } from "../Experience/Components/ExperienceCard";
import { Layout } from "../../GeneralComponents/Layout";

const Home = () => {

    return (
        <>
            <HomeAboutMe/>
            <Layout>
                <h2>Proyectos principales</h2>
                <div className="project-cards-container">
                    {primaryProjects.map((project, index) => (
                        <ProjectCard key={index} {...project}/>
                    ))}
                </div>
                <button>Ver más...</button>
            </Layout>
            <HomeStack/>
            <Layout>
                <h2>Experiencia</h2>
                <div className="experience-cards-container">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} {...exp}/>
                    ))}
                </div>
            </Layout>
        </>
    )
}

export { Home };