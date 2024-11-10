import { CustomLink } from "../CustomLink";
import { paths } from "../../Routes/Paths";
import { FaDownload } from "react-icons/fa";
// import cv from "../../assets/CV/CV_Fabian_Velasquez_Portafolio.pdf";
import "../../Utils/GeneralStyles/secundary-styles.css";
import "./styles.css";

const Navbar = () => {
	return (
		<nav className="navbar-desktop">
			<ul>
				<li>
					<a href="/CV/CV_Fabian_Velasquez_Portafolio.pdf" target="_blank">
						<FaDownload /> CV
					</a>
				</li>
				<li>
					<CustomLink to={paths.contact} className="navbar-desktop-link">
						<b>CONTACTO</b>
					</CustomLink>
				</li>
				<li>
					<CustomLink to={paths.aboutMe} className="navbar-desktop-link">
						SOBRE MÍ
					</CustomLink>
				</li>
				<li>
					<CustomLink to={paths.skills} className="navbar-desktop-link">
						CONOCIMIENTOS
					</CustomLink>
				</li>
				<li>
					<CustomLink to={paths.experience} className="navbar-desktop-link">
						EXPERIENCIA
					</CustomLink>
				</li>
				<li>
					<CustomLink to={paths.projects} className="navbar-desktop-link">
						<button className="navbar-projects-button">PROYECTOS</button>
					</CustomLink>
				</li>
			</ul>
		</nav>
	);
};

export { Navbar };
