import { Layout } from '../../../../GeneralComponents/Layout';
import { MainButton } from '../../../../GeneralComponents/MainButton';
import Foto from '../../../../assets/foto.png'
import './styles.css'

const HomeAboutMe = () => {

    return (
        <Layout>
            <div className='home-about-me-container'>
                <figure className='photoContainer'>
                    <img src={Foto} alt='Foto' />
                </figure>
                <div className='home-about-me-text-container'>
                    <h1>¡ Hola ! 👋<br/>Soy Fabian Velasquez</h1>
                    <h2>Desarrollador FullStack<br/>en constante evolución</h2>
                    <p>
                        Apasionado por el desarrollo Frontend y el aprendizaje continuo. Mi experiencia en pruebas automatizadas y mi enfoque en proyectos web full-stack me preparan para resolver problemas y aportar valor en cada desafío.
                    </p>
                    <MainButton value='Explora mis proyectos'/>
                </div>
            </div>
        </Layout>
    )
}

export { HomeAboutMe };