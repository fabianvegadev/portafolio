import { Layout } from '../../Components/Layout';
import { FaCode, FaServer, FaBug, FaTools } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiSelenium, SiCucumber, SiVisualstudiocode, SiGit, SiGithub, SiAzuredevops, SiPostman } from "react-icons/si";
import java from '../../assets/java.svg'
import python from '../../assets/python.svg'
import flask from '../../assets/flask.svg'
import linux from '../../assets/linux.svg'
import postgresql from '../../assets/postgresql.svg'
import mysql from '../../assets/mysql.svg'
import './styles.css'

const Stack = () => {

    return (
        <Layout>
            <section className='stack-container'>
                <div>
                    <FaCode className='stack-icons'/>
                    <h2>Frontend</h2>
                    <div className='stack-logos-container'>
                        <SiHtml5 color='#F16529'/>
                        <SiCss3 color='#2965F1'/>
                        <SiJavascript color='#F7DF1E'/>
                        <SiReact color='#61DAFB'/>
                        <SiTailwindcss color='#06B6D4'/>
                    </div>
                </div>
                <div>
                    <FaServer className='stack-icons'/>
                    <h2>Backend</h2>
                    <div className='stack-logos-container'>
                        <img src={java} alt='java'/>
                        <img src={python} alt='Python'/>
                        <img src={flask} alt='Flask' />
                        <img src={linux} alt='Linux' />
                        <img src={postgresql} alt='PostgresSQL' />
                        <img src={mysql} alt='MySQL' />
                    </div>
                </div>
                <div>
                    <FaBug className='stack-icons'/>
                    <h2>Testing</h2>
                    <div className='stack-logos-container'>
                        <SiSelenium color='#00D900'/>
                        <SiCucumber color='#23D96C'/>
                    </div>
                </div>
                <div>
                    <FaTools className='stack-icons'/>
                    <h2>Herramientas</h2>
                    <div className='stack-logos-container'>
                        <SiGit color='#DE4C36'/>
                        <SiGithub color='#FFFFFF'/>
                        <SiAzuredevops color='#0078D4'/>
                        <SiVisualstudiocode color='#3C99D4'/>
                        <SiPostman color='#FF6C37'/>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export { Stack };