import { Layout } from '../../Components/Layout';
import Foto from '../../assets/logo1.png'
import './styles.css'

const Home = () => {

    return (
        <Layout>
            {/* <div className='home-container'>
                <div className='text-container'>
                    <h1>¡Hola! 👋<br/>Soy Fabian Velasquez</h1>
                    <h2>Desarrollador FullStack<br/>en constante evolución</h2>
                    <p>
                        Desarrollador FullStack autodidacta, apasionado por la tecnología y el aprendizaje continuo. Mi experiencia en pruebas automatizadas y mi enfoque en proyectos web full-stack me preparan para resolver problemas y aportar valor en cada desafío.
                    </p>
                    <div className='buttons-container'>
                        <button>Descubre más sobre mí</button>
                        <button>Explora mis proyectos</button>
                    </div>
                </div>
                <figure className='figure-photo'>
                    <img src={Foto} alt='Foto' />
                </figure>
            </div> */}
        </Layout>
    )
}

export { Home };