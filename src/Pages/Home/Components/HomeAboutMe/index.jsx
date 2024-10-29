import { Layout } from '../../../../GeneralComponents/Layout';
import { CustomLink } from '../../../../GeneralComponents/CustomLink';
import {Paths} from '../../../../Routes/Paths'
import Foto from '../../../../assets/foto.png'
import './styles.css'

const HomeAboutMe = () => {

    return (
        <Layout>
            <div className='section-home-about-me-container'>
                <figure className='work-image-container'>
                    <img src={Foto} alt='Foto' />
                </figure>
                <div>
                    <h1>¡ Hola ! 👋 <br/> Soy Fabian Velasquez</h1>
                    <strong>Desarrollador FullStack<br/>en constante evolución</strong>
                    <p>Apasionado por el desarrollo Frontend y el aprendizaje continuo.</p>
                    <CustomLink to={Paths.projects}>
                        <button>Explora mis proyectos</button>
                    </CustomLink>
                </div>
            </div>
        </Layout>
    )
}

export { HomeAboutMe };