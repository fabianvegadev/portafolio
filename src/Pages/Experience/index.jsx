import { useContext } from "react";
import { MostroDevContext } from "../../Context";
import { experiences } from "../../Data/Experiences";
import { Layout } from "../../Components/Layout";
import { ScrollNav } from "../../Components/ScrollNav";
import { ExperienceCard } from "../../Components/ExperienceCard";
import { ExtendedExperienceCard } from "../../Components/ExtendedExperienceCard";
import './styles.css';

const Experience = () => {
    const context = useContext( MostroDevContext )
    const navItems = [
        {key:'tech', value:'Experiencias Tech'},
        {key:'others', value:'Otras Experiencias'},
    ]

    return (
        <Layout>
            <ScrollNav navItems={navItems}/>
            <div id='tech' className="page-experience-cards-container">
                <h2>Experiencias Tech</h2>
                {context.isMobile && experiences.map((exp, index) => (
                    <ExperienceCard key={index} {...exp} />
                ))}
                {context.isDesktop && experiences.map((exp, index) => (
                    <ExtendedExperienceCard key={index} {...exp}/>
                ))}
            </div>
            <div id='others'>
                <h2>Otras Experiencias</h2>
            </div>
        </Layout>
    )
};

export { Experience };
