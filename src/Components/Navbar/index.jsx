import { CustomLink } from '../CustomLink';
import { paths } from '../../Routes/Paths';
import '../../Utils/GeneralStyles/secundary-styles.css';
import './styles.css';

const Navbar = () => {

    return (
        <nav className='navbar-desktop'>
            <ul>
                <li>
                    <CustomLink to={paths.contact} className='navbar-desktop-link'>
                        CONTACTO
                    </CustomLink>
                </li>
                <li>
                    <CustomLink to={paths.aboutMe} className='navbar-desktop-link'>
                        SOBRE MÍ
                    </CustomLink>                
                </li>
                <li>
                    <CustomLink to={paths.skills} className='navbar-desktop-link'>
                        CONOCIMIENTOS
                    </CustomLink>
                </li>
                <li>
                    <CustomLink to={paths.experience} className='navbar-desktop-link'>
                        EXPERIENCIA
                    </CustomLink>
                </li>
                <li>
                    <CustomLink to={paths.projects} className='navbar-desktop-link'>
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