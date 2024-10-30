import { primaryProjects } from '../../Data/PrimaryProjects';
import { stackItems } from '../../Data/StackItems';
import { experiences } from '../../Data/Experiences';
import { paths } from '../../Routes/Paths';
import { CustomLink } from '../../Components/CustomLink';
import { HomeAboutMe } from '../../Components/HomeAboutMe';
import { ProjectCard } from '../../Components/ProjectCard';
import { StackItem } from '../../Components/StackItem';
import { ExperienceCard } from '../../Components/ExperienceCard';
import { Layout } from '../../Components/Layout';
import { ScrollButton } from '../../Components/ScrollButton';
import { useScrollButtons } from '../../Hooks/useScrollButtons';
import './styles.css';

const Home = () => {
    const {
        containerRef: projectContainerRef,
        scrollState: projectScrollState,
        handleScroll: handleProjectScroll,
    } = useScrollButtons();

    const {
        containerRef: stackContainerRef,
        scrollState: stackScrollState,
        handleScroll: handleStackScroll,
    } = useScrollButtons();

    const {
        containerRef: experienceContainerRef,
        scrollState: experienceScrollState,
        handleScroll: handleExperienceScroll,
    } = useScrollButtons();

    return (
        <>
            <HomeAboutMe />
            <Layout>
                <h2>Proyectos principales</h2>
                {projectScrollState.showLeftButton && (
                    <ScrollButton direction="left" handleScroll={handleProjectScroll} />
                )}
                <div className="project-cards-container" ref={projectContainerRef}>
                    {primaryProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
                {projectScrollState.showRightButton && (
                    <ScrollButton direction="right" handleScroll={handleProjectScroll} />
                )}
                <br />
                <CustomLink to={paths.projects}>
                    <button>Ver más...</button>
                </CustomLink>
            </Layout>

            <Layout className="section-stack-items">
                <h2>Stack</h2>
                {stackScrollState.showLeftButton && (
                    <ScrollButton direction="left" handleScroll={handleStackScroll} />
                )}
                <div className="stack-items-container" ref={stackContainerRef}>
                    {stackItems.map((item, index) => (
                        <StackItem key={index} {...item} />
                    ))}
                </div>
                {stackScrollState.showRightButton && (
                    <ScrollButton direction="right" handleScroll={handleStackScroll} />
                )}
                <br/>
                <CustomLink to={paths.skills}>
                    <button>Ver más...</button>
                </CustomLink>
            </Layout>

            <Layout>
                <h2>Experiencia</h2>
                {experienceScrollState.showLeftButton && (
                    <ScrollButton direction="left" handleScroll={handleExperienceScroll} />
                )}
                <div className="experience-cards-container" ref={experienceContainerRef}>
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} />
                    ))}
                </div>
                {experienceScrollState.showRightButton && (
                    <ScrollButton direction="right" handleScroll={handleExperienceScroll} />
                )}
                <br />
                <CustomLink to={paths.experience}>
                    <button>Ver más...</button>
                </CustomLink>
            </Layout>
        </>
    );
};

export { Home };