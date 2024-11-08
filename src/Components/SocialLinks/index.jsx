import PropTypes from 'prop-types';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import './styles.css';

const SocialLinks = ({ className }) => {
    return (
        <div className={`social-links ${className}`}>
            <a href='https://www.linkedin.com/in/fabianvegadev/' aria-label="Visitar perfil de LinkedIn" target='_blank'>
                <FaLinkedin />
            </a>
            <a href='https://github.com/fabianvegadev' aria-label="Visitar perfil de GitHub" target='_blank'>
                <FaGithub />
            </a>
            <a href='https://wa.me/+573173382026' aria-label="Enviar mensaje por Whatsapp" target='_blank'>
                <FaWhatsapp/>
            </a>
        </div>
    );
};

SocialLinks.propTypes = {
    className: PropTypes.string,
};


export { SocialLinks };
