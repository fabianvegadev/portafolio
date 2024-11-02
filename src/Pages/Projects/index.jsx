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
            <div className="page-project-cards-container">
                <h2>Proyectos principales</h2>
                {context.isMobile && primaryProjects.map((project, index) => (
                    <ProjectCard key={index}{...project}/>
                ))}
                {context.isDesktop && primaryProjects.map((project, index) => (
                    <ExtendedProjectCard key={index}{...project}/>
                ))}                
            </div>
            <h2>Otros Proyectos</h2>
        </Layout>
    )
}

export { Projects };