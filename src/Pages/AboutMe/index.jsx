import { Layout } from '../../Components/Layout';
import { FaDownload } from 'react-icons/fa';
import './styles.css';

const AboutMe = () => {
    return (
        <Layout className='aboutme-page'>
            <div className='aboutme-container'>
                <h1 className='aboutme-title'>Sobre Mí</h1>
                <p className='aboutme-description'>
                    ¡Hola! Soy un apasionado desarrollador con un gran interés en la creación de soluciones de software eficientes y elegantes. Tengo experiencia en React, JavaScript, y diseño de interfaces interactivas. Me gusta aprender y enfrentarme a nuevos retos tecnológicos.
                </p>
                <button className='download-button'>
                    <FaDownload /> Descargar CV
                </button>
            </div>

            <div className='skills-section'>
                <h2>Habilidades</h2>
                <ul className='skills-list'>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>HTML & CSS</li>
                    <li>Node.js</li>
                    <li>Git & GitHub</li>
                </ul>
            </div>

            <div className='interests-section'>
                <h2>Intereses</h2>
                <p className='interests-description'>
                    Además del desarrollo de software, disfruto de la fotografía, el senderismo, y explorar nuevas tecnologías. Me encanta colaborar en proyectos desafiantes que impulsen el aprendizaje y el crecimiento continuo.
                </p>
            </div>
        </Layout>
    );
};

export { AboutMe };