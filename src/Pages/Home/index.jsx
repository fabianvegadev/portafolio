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
                <CardProject/>
            </Layout>
            <HomeStack/>
        </>
    )
}

export { Home };