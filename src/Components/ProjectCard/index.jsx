import { useContext, useState } from 'react';
import { MostroDevContext } from '../../Context';
import PropTypes from 'prop-types';
import { HiArrowUturnRight } from "react-icons/hi2";
import { LuLink, LuGithub } from "react-icons/lu";
import '../../Utils/GeneralStyles/secundary-styles.css';
import './styles.css';

const ProjectCard = ({image, title, techs, description, status, linkGitHub, linkPreview}) => {
    const context = useContext(MostroDevContext)
    const [ isFlipped, setIsFlipped] = useState(false)
    
    const handleDescriptionClick = () => {
        setIsFlipped(!isFlipped)
    }
    
    return (
        <div className={`project-card-container ${isFlipped ? 'is-flipped' : ''}`.trim()}>
            <div className='face front'>
                <figure className="project-card-image-container">
                        {status !== '' && <span>{status}</span>}
                        <img src={image} alt='mustard-habit'/>
                </figure>
                <div className="front-detail-container">
                    <h3><strong>{title}</strong></h3>     
                    {context.isMobile && 
                    <u onClick={() => handleDescriptionClick()}
                    className='project-card-description'>Descripción</u>}                
                    <ul className="front-tech-container">
                        {techs.map((tech, index) => (
                            <li key={index} className='skills'>{tech}</li>
                        ))}
                    </ul>
                </div>
                <div className='buttons-container'>
                    <a href={linkGitHub} target='_blank'>
                        <button className='secundary-button'><LuGithub size={14}/> view code</button>
                    </a>
                    <a href={linkPreview} target='_blank'>
                        <button className='secundary-button'><LuLink size={14}/> live demo</button>
                    </a>
                </div>
            </div>
            <div className='face back'>
                <div className='back-description'>
                    <p className='secundary-paragraph'>{description}</p>
                </div> 
                {context.isMobile && 
                    <HiArrowUturnRight onClick={() => handleDescriptionClick()} className='return-icon'/>}                
                <h3>{title}</h3>            
                    <div className='buttons-container'>
                        <a href={linkGitHub} target='_blank'>
                            <button className='secundary-button'><LuGithub size={15}/> Project</button>
                        </a>
                        <a href={linkPreview} target='_blank'>
                            <button className='secundary-button'><LuLink size={15}/> Preview</button>
                        </a>
                    </div>
            </div>    
        </div>
    )
}

ProjectCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    techs: PropTypes.arrayOf(PropTypes.string).isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkGitHub: PropTypes.string.isRequired,
    linkPreview: PropTypes.string.isRequired,
};

export { ProjectCard };