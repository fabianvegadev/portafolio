import { CustomLink } from "../CustomLink";
import { paths } from "../../Routes/Paths";
import Logo5 from "../../assets/Logo/Logo5.png";
import { BsArrowRight } from "react-icons/bs";
import "./styles.css";

const ContactMe = () => {
	return (
		<div className="stiker-contact-me">
			<BsArrowRight className="stiker-contact-me-arrow" />
			<CustomLink to={paths.contact}>
				<img src={Logo5} alt="¡Contáctame!" className="stiker-contact-me-img" />
			</CustomLink>
		</div>
	);
};

export { ContactMe };
