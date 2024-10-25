import './Navbar.css';
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'


const Navbar = () => {

    return (
        <nav className='navbar'>
            <div className='container-logo'>
                <figure className='figure-logo'>
                    <img  src={logo1} alt="Logo1" />
                </figure>              
                <figure className='figure-logo'>
                    <img src={logo2} alt="Logo2" />
                </figure>
            </div>             
            <ul className='ul-navbar'>
                <li className='li-others'>
                    SOBRE MI
                </li>
                <li className='li-others'>
                    CONTACTO
                </li>
                <li className='li-others'>
                    STACK
                </li>
                <li className='li-proyectos'>
                    PROYECTOS
                </li>
            </ul>
        </nav>
    )
}

export { Navbar };