import { Layout } from '../Layout';
import { SocialLinks } from '../SocialLinks';
import { CustomLink } from '../CustomLink';
import { paths } from '../../Routes/Paths';
import Foto from '../../assets/foto.png';
import './styles.css';

const HomeAboutMe = () => {

    return (
        <Layout className='section-home-about-me-container'>
            <figure className='work-image-container'>
                <img src={Foto} alt='Foto' />
                <SocialLinks className='home-about-me-social-links'/>
            </figure>
            <div className='text-container'>
                <h1>¡ Hola ! 👋 <br/> Soy Fabian Velasquez</h1>
                <strong>Desarrollador FullStack<br/>en constante evolución</strong>
                <p>Apasionado por el desarrollo Frontend y el aprendizaje continuo.</p>
                <CustomLink to={paths.projects} className='about-me-button-container' >
                        <button>
                            Explora mis proyectos
                        </button>
                </CustomLink>
            </div>
        </Layout>
    )
}

export { HomeAboutMe };