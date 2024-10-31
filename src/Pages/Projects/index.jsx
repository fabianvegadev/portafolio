import { useContext } from 'react';
import { MostroDevContext } from '../../Context';
import { primaryProjects } from '../../Data/PrimaryProjects';
import { Layout } from '../../Components/Layout';
import { ProjectCard } from '../../Components/ProjectCard';
import { ExtendedProjectCard } from '../../Components/ExtendedProjectCard';
import './styles.css';

const Projects = () => {
    const context = useContext(MostroDevContext)

    return (
        <Layout>
            <h2>Proyectos principales</h2>
            <div className="page-project-cards-container">
                {context.isMobile && primaryProjects.map((project, index) => (
                    <ProjectCard key={index}{...project}/>
                ))}
                {context.isDesktop && primaryProjects.map((project, index) => (
                    <ExtendedProjectCard key={index}{...project}/>
                ))}                
            </div>
        </Layout>
    )
}

export { Projects };