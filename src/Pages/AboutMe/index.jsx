import { Layout } from "../../Components/Layout";
import { FaDownload } from "react-icons/fa";
import "./styles.css";

const AboutMe = () => {
	return (
		<Layout className="aboutme-page">
			<div className="aboutme-container">
				<h2>Sobre Mí</h2>
				<p className="aboutme-description">
					Soy Fabián Velásquez, <b>desarrollador web</b> enfocado en crear
					soluciones funcionales y de calidad. Mi objetivo es consolidarme como
					un experto en <b>desarrollo frontend</b>, aportando valor a proyectos
					innovadores y enriqueciendo mis conocimientos en entornos
					colaborativos.
				</p>
				<p className="aboutme-description">
					En mi carrera, he trabajado como <b>automatizador junior</b> en
					Bancolombia, donde implementé procesos de pruebas eficaces,
					contribuyendo a la calidad del software. Actualmente, desarrollo mi
					portafolio y una tienda en línea en React, afianzando mis habilidades
					en este framework y explorando nuevas tecnologías.
				</p>
				<a href="/CV/CV_Fabian_Velasquez_Portafolio.pdf" target="_blank">
					<button className="download-cv-button">
						<FaDownload /> Descargar CV
					</button>
				</a>
				<h3>Intereses Personales</h3>
				<p className="aboutme-interests">
					Más allá del trabajo, disfruto de los <b>viajes en moto</b>, la{" "}
					<b>mecánica</b> y la <b>fotografía</b>, además de los{" "}
					<b>juegos de mesa</b>, que fomentan la estrategia y el trabajo en
					equipo.
				</p>

				<h3>Mi Visión Profesional</h3>
				<p className="aboutme-goal">
					Busco crecer en entornos donde la tecnología y la innovación
					convergen, trabajando con equipos apasionados para aportar soluciones
					que impacten de manera positiva.
				</p>
			</div>
		</Layout>
	);
};

export { AboutMe };
