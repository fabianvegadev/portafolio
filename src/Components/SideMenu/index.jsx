import { useContext } from 'react';
import { MostroDevContext } from '../../Context';
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
                        <li>SOBRE MI</li>
                        <li>STACK</li>
                        <li>PROYECTOS</li>
                        <li>HOJA DE VIDA</li>
                        <li>CONTACTO</li>
                    </ul>
                </aside>
            )
        } else { return (<></>)}
    }

    return handleSideMenu()
}

export { SideMenu };