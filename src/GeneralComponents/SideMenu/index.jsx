import { useContext } from 'react';
import { MostroDevContext } from '../../Context';
import { CustomLink } from '../CustomLink';
import { paths } from '../../Routes/Paths';
import { FaXmark } from "react-icons/fa6";
import './styles.css'

const SideMenu = () => {
    const context = useContext(MostroDevContext)
    
    const handleSideMenu = () => {
        if (context.isOpenSideMenu) {
            return (
                <aside className= 'side-menu-container animation'>
                    <FaXmark
                        onClick={() => context.closeSideMenu()}
                        className='side-menu-icon-close'/>
                    <ul>
                        <li onClick={() => context.closeSideMenu()}>
                            <CustomLink to={paths.projects} className='side-menu-li'>
                                PROYECTOS
                            </CustomLink>
                        </li>
                        <li onClick={() => context.closeSideMenu()}>
                            <CustomLink to={paths.experience} className='side-menu-li'>
                                EXPERIENCIA
                            </CustomLink>
                        </li>
                        <li onClick={() => context.closeSideMenu()}>
                            <CustomLink to={paths.skills} className='side-menu-li'>
                                CONOCIMIENTOS
                            </CustomLink>
                        </li>
                        <li onClick={() => context.closeSideMenu()}>
                            <CustomLink to={paths.aboutMe} className='side-menu-li'>
                                SOBRE MI
                            </CustomLink>
                        </li>                        
                        <li onClick={() => context.closeSideMenu()}>
                            <CustomLink to={paths.contact} className='side-menu-li'>
                                CONTACTO
                            </CustomLink>
                        </li>
                    </ul>
                </aside>
            )
        } else { return (<></>)}
    }

    return handleSideMenu()
}

export { SideMenu };