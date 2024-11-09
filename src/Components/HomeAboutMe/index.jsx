import { SocialLinks } from "../SocialLinks";
import { CustomLink } from "../CustomLink";
import { paths } from "../../Routes/Paths";
import Foto from "../../assets/Logo/foto.png";
import "./styles.css";

const HomeAboutMe = () => {
	return (
		<section className="section-home-about-me-container">
			<figure className="work-image-container">
				<img src={Foto} alt="Foto" />
				<SocialLinks className="home-about-me-social-links" />
			</figure>
			<div className="text-container">
				<h1>
					¡ Hola ! 👋 <br /> Soy Fabian Velasquez
				</h1>
				<strong>
					Desarrollador FullStack
					<br />
					en constante evolución
				</strong>
				<p>Apasionado por el desarrollo Frontend y el aprendizaje continuo.</p>
				<CustomLink to={paths.aboutMe} className="about-me-button-container">
					<button>Descubre más sobre mí</button>
				</CustomLink>
			</div>
		</section>
	);
};

export { HomeAboutMe };
