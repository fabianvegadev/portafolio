import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./styles.css";

const ContactForm = () => {
	const form = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

		const serviceId = "service_gfhq5hv";
		const templateId = "template_lnvp1vw";
		const apikey = "J8agW02SKZhUusSPt";

		emailjs.sendForm(serviceId, templateId, form.current, {
			publicKey: apikey,
		});
		alert("¡Mensaje enviado!");
	};

	return (
		<form className="contact-form" ref={form} onSubmit={handleSubmit}>
			<input type="text" name="user_name" placeholder="Tu nombre" required />
			<input
				type="email"
				name="user_email"
				placeholder="Tu correo electrónico"
				required
			/>
			<textarea name="message" placeholder="Tu mensaje" required />
			<button type="submit">Enviar</button>
		</form>
	);
};

export { ContactForm };
