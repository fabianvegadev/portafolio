import { Layout } from "../../GeneralComponents/Layout";
import { CardProject } from "./CardProject";
import './styles.css';

const Projects = () => {

    return (
        <Layout>
            <h2>Proyectos principales</h2>
            <div className="projects-container">
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
            </div>
        </Layout>
    )
}

export { Projects };