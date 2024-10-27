import { useContext } from "react";
import { MostroDevContext } from "../../Context";
import { SideMenu } from "../SideMenu";
import { FaBars } from "react-icons/fa";
import logo1 from '../../assets/logo.png'
import './styles.css';

const Header = () => {
    const context = useContext(MostroDevContext)

    return (
        <header>
            <SideMenu/>
            <figure className='header--logo-container'>
                <img src={logo1} alt='Logo' />
            </figure>
            <FaBars 
                onClick={() => context.openSideMenu()}
                size={32} 
                style={{color: 'var(--c-xxl-white)'}}/>
        </header>            
    )
}

export { Header };