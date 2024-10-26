import { createContext} from 'react';
import { FaCode } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss} from "react-icons/si";
import java from '../../assets/java.svg'
import python from '../../assets/python.svg'
import flask from '../../assets/flask.svg'
import linux from '../../assets/linux.svg'
import postgresql from '../../assets/postgresql.svg'
import mysql from '../../assets/mysql.svg'

const MostroDevContext = createContext()

// eslint-disable-next-line react/prop-types
const MostroDevProvider = ({children}) => {
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
            title: 'FrontEnd',
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
            title: 'FrontEnd',
            icon: <FaCode/>, 
            logos: [
                <SiHtml5 key="html5" color='#F16529'/>, 
                <SiCss3 key="css3" color='#2965F1'/>, 
                <SiJavascript key="javascript" color='#F7DF1E'/>, 
                <SiReact key="react" color='#61DAFB'/>, 
                <SiTailwindcss key="tailwindcss" color='#06B6D4'/>
            ]        
        },
    ];

    return (
        <MostroDevContext.Provider value={{
        
        }}>
        {children}
        </MostroDevContext.Provider>
    )
}

export { MostroDevContext, MostroDevProvider };