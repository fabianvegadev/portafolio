import { createContext, useState} from 'react';
import { useMediaQuery } from '../Hooks/UseMediaQuery';
import { FaCode, FaServer, FaBug, FaTools } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiSelenium, SiCucumber, SiVisualstudiocode, SiGit, SiGithub, SiAzuredevops, SiPostman } from "react-icons/si";
import java from '../assets/java.svg'
import python from '../assets/python.svg'
import flask from '../assets/flask.svg'
import linux from '../assets/linux.svg'
import postgresql from '../assets/postgresql.svg'
import mysql from '../assets/mysql.svg'

const MostroDevContext = createContext()

// eslint-disable-next-line react/prop-types
const MostroDevProvider = ({children}) => {
    // Stack Items - Array de logos e iconos
    const stackItems = [
        {
            title: 'Frontend',
            icon: <FaCode/>, 
            logos: [
                <SiHtml5 key="html5" color='#F16529'/>, 
                <SiCss3 key="css3" color='#2965F1'/>, 
                <SiJavascript key="javascript" color='#F7DF1E'/>, 
                <SiReact key="react" color='#61DAFB'/>, 
                <SiTailwindcss key="tailwindcss" color='#06B6D4'/>
            ]        
        },
        {
            title: 'Backend',
            icon: <FaServer/>, 
            logos: [
                <img key='java' src={java} alt='java'/>, 
                <img key='python' src={python} alt='Python'/>, 
                <img key='flask' src={flask} alt='Flask'/>, 
                <img key='linux' src={linux} alt='Linux' />,
                <img key='postgresql' src={postgresql} alt='PostgresSQL'/>, 
                <img key='mysql' src={mysql} alt='MySQL'/>
            ]        
        },
        {
            title: 'Testing',
            icon: <FaBug/>, 
            logos: [
                <SiSelenium key='selenium' color='#00D900'/>,
                <SiCucumber key='cucumber' color='#23D96C'/>
            ]        
        },
        {
            title: 'Tools',
            icon: <FaTools/>, 
            logos: [
                <SiGit key='git' color='#DE4C36'/>,
                <SiGithub key='github' color='#FFFFFF'/>,
                <SiAzuredevops key='azuredevops' color='#0078D4'/>,
                <SiVisualstudiocode key='vsc' color='#3C99D4'/>,
                <SiPostman key='postman' color='#FF6C37'/>,
            ]        
        },
    ];

    // Tamaños de pantallas para diseño responsivo
    const isMovile = useMediaQuery('(max-width:800px)')
    const isDesktop = useMediaQuery('(min-width:801px)')

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
            stackItems,
            isOpenSideMenu,
            openSideMenu,
            closeSideMenu
        }}>
        {children}
        </MostroDevContext.Provider>
    )
}

export { MostroDevContext, MostroDevProvider };