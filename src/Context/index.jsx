import { createContext, useState} from 'react';
import { useMediaQuery } from '../Hooks/UseMediaQuery';

const MostroDevContext = createContext()

// eslint-disable-next-line react/prop-types
const MostroDevProvider = ({children}) => {
    // Stack Items - Array de logos e iconos
    
    // Tamaños de pantallas para diseño responsivo
    const isMovile = useMediaQuery('(max-width:850px)')
    const isDesktop = useMediaQuery('(min-width:851px)')

    // Window Width - Hook useWindowWith
    // Side Menu - Open/Close
    const [isOpenSideMenu, setIsOpenSideMenu] = useState(false) 
    const openSideMenu = () => {
        setIsOpenSideMenu(true)
    }
    const closeSideMenu = () => {
        setIsOpenSideMenu(false)
    }
    return (
        <MostroDevContext.Provider value={{
            isMovile,
            isDesktop,
            isOpenSideMenu,
            openSideMenu,
            closeSideMenu
        }}>
        {children}
        </MostroDevContext.Provider>
    )
}

export { MostroDevContext, MostroDevProvider };