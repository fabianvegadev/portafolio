import { Layout } from '../../Components/Layout';
import { FaDownload } from 'react-icons/fa';
import cv from '../../assets/cv/CV_Fabian_Velasquez_Portafolio.pdf'
import './styles.css';

const AboutMe = () => {
    return (
        <Layout className='aboutme-page'>
            <div className='aboutme-container'>
                <h2>Sobre Mí</h2>
                <p className='aboutme-description'>
                    Soy Fabián Velásquez, <b>desarrollador web</b>, apasionado por la tecnología y el impacto positivo que puede tener en el mundo. Mi camino en este campo comenzó cuando descubrí la satisfacción de crear soluciones que realmente funcionan y resuelven problemas. Aunque tengo conocimientos en desarrollo fullstack, disfruto especialmente del trabajo en el frontend, donde me enfoco en ofrecer experiencias interactivas y atractivas para el usuario. Utilizo React como herramienta principal para construir soluciones eficientes y de alta calidad.
                </p>

                <p className='aboutme-description'>
                    Más allá del código, disfruto de los viajes en moto, un escape que me permite explorar nuevos lugares y sentir la libertad de la carretera. La mecánica es otro de mis intereses, ya que me apasiona entender cómo funcionan las cosas y trabajar con mis manos. Además, me interesa la fotografía, que me permite capturar momentos únicos, y los juegos de mesa, donde la estrategia y el trabajo en equipo hacen de cada partida una experiencia memorable.
                </p>

                <p className='aboutme-description'>
                    En el ámbito profesional, me conocen como &apos;mostroDev&apos;, un seudónimo que nace de un apodo cariñoso: &apos;el mostro&apos;. Este nombre refleja tanto mi estilo como mi compromiso con lo que hago, ya sea en el mundo del desarrollo o en los detalles de la vida.
                </p>

                <p className='aboutme-description'>
                    He tenido la oportunidad de trabajar como automatizador junior en proyectos de pruebas para Bancolombia, donde aprendí el valor de la precisión y el control de calidad en el desarrollo de software. Actualmente, estoy construyendo mi portafolio personal y desarrollando una tienda en línea como proyecto de aprendizaje en React, consolidando mis habilidades y explorando nuevas tecnologías.
                </p>

                <p className='aboutme-description'>
                    Mi meta es seguir creciendo como profesional, aportando mi conocimiento a proyectos innovadores y trabajando en equipos donde pueda aprender y contribuir con mi experiencia. Me motiva colaborar en proyectos de impacto, construyendo un futuro mejor con tecnología y buscando siempre ser &apos;el mostro&apos; en cada cosa que hago.
                </p>
                <a href={cv} target='_blank'>
                    <button className='download-cv-button'><FaDownload /> Descargar CV</button>
                </a>
            </div>
        </Layout>
    );
};

export { AboutMe };