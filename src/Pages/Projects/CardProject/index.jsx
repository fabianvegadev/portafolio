import { useContext, useState } from 'react';
import { MostroDevContext } from '../../../Context';
import PropTypes from 'prop-types';
import { CustomLink } from '../../../GeneralComponents/CustomLink';
import { paths } from '../../../Routes/Paths';
import { HiArrowUturnRight } from "react-icons/hi2";
import { LuLink, LuGithub } from "react-icons/lu";
import '../../../Utils/GeneralStyles/secundary-styles.css';
import './styles.css';

const CardProject = ({image, title, techs = [], description, linkGitHub, linkPreview}) => {
    const context = useContext(MostroDevContext)
    const [ isFlipped, setIsFlipped] = useState(false)
    
    const handleDescriptionClick = () => {
        setIsFlipped(!isFlipped)
        console.log(isFlipped)
    }
    
    return (
        <div className={`card-project-container ${isFlipped ? 'is-flipped' : ''}`.trim()}>
            <div className='face front'>
                <figure className="card-project-image-container">
                        <img src={image} alt='mustard-habit'/>
                </figure>
                    <h3>{title}</h3>     
                    {context.isMovile && 
                        <u onClick={() => handleDescriptionClick()}
                        className='card-project-description'>Descripción</u>}                
                <div className="front-detail-container">
                    <div className="front-tech-container">
                        {techs.map((tech, index) => {
                            <span key={index}>{tech}</span>
                        })}
                    </div>
                    <div className='buttons-container'>
                        <a href={linkGitHub}>
                            <button className='secundary-button'><LuGithub size={15}/> Project</button>
                        </a>
                        <a href={linkPreview}>
                            <button className='secundary-button'><LuLink size={15}/> Preview</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='face back'>
                <div className='back-description'>
                    <p className='secundary-paragraph'>{description}</p>
                </div> 
                {context.isMovile && 
                    <HiArrowUturnRight onClick={() => handleDescriptionClick()} className='return-icon'/>}                
                <CustomLink to={paths.underConstruction} className='description-link-ver-mas'>Ver más...</CustomLink>               
                <h3>{title}</h3>            
                    <div className='buttons-container'>
                        <a href={linkGitHub}>
                            <button className='secundary-button'><LuGithub size={15}/> Project</button>
                        </a>
                        <a href={linkPreview}>
                            <button className='secundary-button'><LuLink size={15}/> Preview</button>
                        </a>
                    </div>
            </div>    
        </div>
    )
}

CardProject.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    techs: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    linkGitHub: PropTypes.string.isRequired,
    linkPreview: PropTypes.string.isRequired,
};

export { CardProject };