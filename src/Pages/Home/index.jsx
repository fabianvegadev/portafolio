import { Layout } from '../../Components/Layout';
import Foto from '../../assets/logo1.png'
import './styles.css'

const Home = () => {

    return (
        <Layout>
            <section className='home-container'>
                <figure className='photoContainer'>
                    <img src={Foto} alt='Foto' />
                </figure>
                <div className='home-text-container'>
                    <h1>¡ Hola ! 👋<br/>Soy Fabian Velasquez</h1>
                    <h2>Desarrollador FullStack<br/>en constante evolución</h2>
                    <p>
                        Apasionado por el desarrollo Frontend y el aprendizaje continuo. Mi experiencia en pruebas automatizadas y mi enfoque en proyectos web full-stack me preparan para resolver problemas y aportar valor en cada desafío.
                    </p>
                </div>
                <div className='home-buttons-container'>
                    <button>Explora mis proyectos</button>
                </div>
            </section>
        </Layout>
    )
}

export { Home };