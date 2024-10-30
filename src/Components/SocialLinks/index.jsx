import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <div className='social-links'>
            <a href='https://linkedin.com/in/fabianvelasquez' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin />
            </a>
            <a href='https://github.com/fabianvelasquez' target='_blank' rel='noopener noreferrer'>
                <FaGithub />
            </a>
            <a href='https://twitter.com/fabianvelasquez' target='_blank' rel='noopener noreferrer'>
                <FaTwitter />
            </a>
        </div>
    );
};

export default SocialLinks;
