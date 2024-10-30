import { experiences } from "../../Data/Experiences";
import { Layout } from "../../Components/Layout";
import { ExperienceCard } from "../../Components/ExperienceCard";
import './styles.css';

const Experience = () => (
    <Layout className="experience-section">
        <h2>Experiencia Laboral</h2>
        <div className="experience-cards-container">
            {experiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
            ))}
        </div>
    </Layout>
);

export { Experience };
