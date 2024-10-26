import { FaBars } from "react-icons/fa";
import logo1 from '../../assets/logo.png'
import './styles.css';

const Header = () => {

    return (
        <header>
            <figure className='header--logo-container'>
                <img src={logo1} alt='Logo' />
            </figure>
            <FaBars style={{color: 'var(--c-xxl-white)'}} size={32}/>
        </header>            
    )
}

export { Header };