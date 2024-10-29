import { useContext, useState } from 'react';
import { MostroDevContext } from '../../../Context';
import { CustomLink } from '../../../GeneralComponents/CustomLink';
import { Paths } from '../../../Routes/Paths';
import mh from '../../../assets/mh.jpg';
import { HiArrowUturnRight } from "react-icons/hi2";
import { LuLink, LuGithub } from "react-icons/lu";
import '../../../Utils/GeneralStyles/secundary-styles.css';
import './styles.css'

const CardProject = () => {
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
                        <img src={mh} alt='mustard-habit'/>
                </figure>
                    <h3>Mustard Habit</h3>     
                    {context.isMovile && 
                        <u onClick={() => handleDescriptionClick()}
                            className='card-project-description'>Descripción</u>}                
                <div className="front-detail-container">
                    <div className="front-tech-container">
                        <span>React.js</span>
                        <span>HTML5</span>
                        <span>CSS3</span>
                    </div>
                    <div className='buttons-container'>
                        <a href='https://github.com/fabianvegadev/mustard-habit.app'>
                            <button className='secundary-button'><LuGithub size={15}/> Project</button>
                        </a>
                        <a href='https://fabianvegadev.github.io/mustard-habit.app'>
                            <button className='secundary-button'><LuLink size={15}/> Preview</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='face back'>
                <div className='back-description'>
                    <p className='secundary-paragraph'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error voluptas expedita animi tenetur consectetur, exercitationem voluptate reiciendis maxime ratione corrupti adipisci est inventore eum, beatae iusto deleniti nulla sed aperiam!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore possimus molestias aperiam quisquam quod corrupti eos distinctio architecto. Quasi sit, dolor dolorum recusandae ipsum rem ratione beatae repellendus qui!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quibusdam sit recusandae neque reiciendis vitae voluptate omnis cupiditate praesentium aut at corrupti odio fuga maxime amet beatae nostrum, quos quisquam.
                    </p>
                </div> 
                {context.isMovile && 
                    <HiArrowUturnRight onClick={() => handleDescriptionClick()} className='return-icon'/>}                
                <CustomLink to={Paths.underConstruction} className='description-link-ver-mas'>Ver más...</CustomLink>               
                <h3>Mustard Habit</h3>            
                    <div className='buttons-container'>
                        <a href='https://github.com/fabianvegadev/mustard-habit.app'>
                            <button className='secundary-button'><LuGithub size={15}/> Project</button>
                        </a>
                        <a href='https://fabianvegadev.github.io/mustard-habit.app'>
                            <button className='secundary-button'><LuLink size={15}/> Preview</button>
                        </a>
                    </div>
            </div>    
        </div>
    )
}

export { CardProject };