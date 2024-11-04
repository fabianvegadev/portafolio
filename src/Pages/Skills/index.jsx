// import { Element } from 'react-scroll';
import { Layout } from "../../Components/Layout";
// import { ScrollNav } from "../../Components/ScrollNav";
import { SkillItem } from "../../Components/SkillItem";
import { frontendSkills, backendSkills } from "../../Data/SkillsData";
import './styles.css'

const Skills = () => {
    
    // const navSkills = [
    //     { key:'frontend', value:'Frontend'},
    //     { key:'testing', value:'Testing'},
    //     { key:'backend', value:'Backend'},
    //     { key:'tools', value:'Tools'},
    //     { key:'languajes', value:'Lenguajes'},
    //     { key:'certificates', value:'Cestificados'},
    // ]

return (
        <Layout>
            {/* <ScrollNav navItems={navSkills}/> */}
            <div id='frontend'>
                <h2>Frontend</h2>
                <div className="skills-list">
                {frontendSkills.map((skill, index) => (
                    <SkillItem key={index} {...skill}/>
                ))}
                </div>
            </div>
            <div id='backend'>
                <h2>Backend</h2>
                <div className="skills-list">
                {backendSkills.map((skill, index) => (
                    <SkillItem key={index} {...skill}/>
                ))}
                </div>
            </div>
        </Layout>
    );
};

export { Skills };
