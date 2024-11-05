import { Element } from 'react-scroll';
import { Layout } from "../../Components/Layout";
import { ScrollNav } from '../../Components/ScrollNav';
import { SkillItem } from "../../Components/SkillItem";
import { frontendSkills, backendSkills, testingSkills, toolsSkills, languagesSkills, databasesSkills, softSkills } from "../../Data/SkillsData";
import './styles.css'

const Skills = () => {
    
    const navSkills = [
        { key:'frontend', value:'Frontend'},
        { key:'backend', value:'Backend'},
        { key:'testing', value:'Testing'},
        { key:'tools', value:'Tools'},
        { key:'languajes', value:'Lenguajes'},
        { key:'databases', value:'Bases de datos'},
        { key:'soft-skills', value:'Habilidades blandas'},
    ]

return (
        <Layout>
            <ScrollNav navItems={navSkills}/>
            <Element id='frontend'>
                <h2>Frontend</h2>
                <div className="skills-list">
                {frontendSkills.map((skill, index) => (
                    <SkillItem key={index} {...skill}/>
                ))}
                </div>
            </Element>
            <Element id='backend'>
                <h2>Backend</h2>
                <div className="skills-list">
                {backendSkills.map((skill, index) => (
                    <SkillItem key={index} {...skill}/>
                ))}
                </div>
            </Element>
            <Element id='testing'>
                <h2>Testing</h2>
                <div className="skills-list">
                {testingSkills.map((skill, index) => (
                    <SkillItem key={index} {...skill}/>
                ))}
                </div>
            </Element>
            <Element id='tools'>
                <h2>Tools</h2>
                <div className="skills-list">
                {toolsSkills.map((skill, index) => (
                    <SkillItem key={index} {...skill}/>
                ))}
                </div>
            </Element>
            <Element id='languajes'>
                <h2>Lenguajes</h2>
                <div className="skills-list">
                {languagesSkills.map((skill, index) => (
                    <SkillItem key={index} {...skill}/>
                ))}
                </div>
            </Element>
            <Element id='databases'>
                <h2>Bases de datos</h2>
                <div className="skills-list">
                {databasesSkills.map((skill, index) => (
                    <SkillItem key={index} {...skill}/>
                ))}
                </div>
            </Element>
            <Element id='soft-skills'>
                <h2>Habilidades blandas</h2>
                <div className="skills-list">
                {softSkills.map((skill, index) => (
                    <SkillItem key={index} {...skill}/>
                ))}
                </div>
            </Element>
        </Layout>
    );
};

export { Skills };
