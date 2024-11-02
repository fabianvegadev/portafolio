import PropTypes from 'prop-types';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import './styles.css';

const SocialLinks = ({ className }) => {
    return (
        <div className={`social-links ${className}`}>
            <a href='https://www.linkedin.com/in/fabianvegadev/' target='_blank'>
                <FaLinkedin />
            </a>
            <a href='https://github.com/fabianvegadev' target='_blank'>
                <FaGithub />
            </a>
            <a href='https://wa.me/+573173382026' target='_blank'>
                <FaWhatsapp/>
            </a>
        </div>
    );
};

SocialLinks.propTypes = {
    className: PropTypes.string,
};


export { SocialLinks };
