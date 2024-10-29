// import { useContext } from 'react';
// import { MostroDevContext } from '../../Context';
import { CustomLink } from '../CustomLink';
import { Paths } from '../../Routes/Paths';
import './styles.css'

const Navbar = () => {
    // const context = useContext(MostroDevContext)

    return (
        <nav className='navbar-desktop'>
            <ul>
                <li>
                    <CustomLink to={Paths.contact} className='navbar-desktop-link'>
                        CONTACTO
                    </CustomLink>
                </li>
                <li>
                    <CustomLink to={Paths.aboutMe} className='navbar-desktop-link'>
                        SOBRE MI
                    </CustomLink>                
                </li>
                <li>
                    <CustomLink to={Paths.skills} className='navbar-desktop-link'>
                        CONOCIMIENTOS
                    </CustomLink>
                </li>
                <li>
                    <CustomLink to={Paths.experience} className='navbar-desktop-link'>
                        EXPERIENCIA
                    </CustomLink>
                </li>
                <li>
                    <CustomLink to={Paths.projects} className='navbar-desktop-link'>
                        <button className='navbar-projects-button'>
                            PROYECTOS
                        </button>
                    </CustomLink>
                </li>
            </ul>
        </nav>
        
    )
}

export { Navbar };