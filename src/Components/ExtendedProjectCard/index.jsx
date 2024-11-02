import PropTypes from 'prop-types';
import { LuGithub, LuLink } from 'react-icons/lu';
import './styles.css';

const ExtendedProjectCard = ({ image, title, techs, description, linkGitHub, linkPreview }) => {
    return (
        <div className='extended-project-card'>
            <div className='project-left-container'>
                <figure className='project-image-container' >
                    <img src={image} alt={title} />
                </figure>
                <h3 className='project-title'><strong>{title}</strong></h3>                
                <p className='project-tech'>Tech Stack: <br/>{techs.join(', ')}</p>
            </div>
            <div className='project-content'>
                <p className='project-description'>{description}</p>
                <div className='project-links'>
                    <a href={linkGitHub} target='_blank'>
                        <button className='secundary-button'><LuGithub size={14}/> view code</button>
                    </a>
                    <a href={linkPreview} target='_blank'>
                        <button className='secundary-button' ><LuLink size={14}/> live demo</button>
                    </a>
                </div>                    
            </div>
        </div>
    );
};

ExtendedProjectCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techs: PropTypes.arrayOf(PropTypes.string).isRequired,
    linkGitHub: PropTypes.string,
    linkPreview: PropTypes.string,
};

export { ExtendedProjectCard };
