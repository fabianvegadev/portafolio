import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './styles.css';

const SocialLinks = ({ className }) => {
    return (
        <div className={`social-links ${className}`}>
            <a href='https://www.linkedin.com/in/fabianvegadev/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin />
            </a>
            <a href='https://github.com/fabianvegadev' target='_blank' rel='noopener noreferrer'>
                <FaGithub />
            </a>
        </div>
    );
};

export { SocialLinks };
