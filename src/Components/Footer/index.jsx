import { Layout } from "../Layout";
import logo from '../../assets/Logo/Logo.png'
import './styles.css'
const Footer = () => {

    return (
        <Layout>
            <hr className="section-divider" />
            <figure className='footer'>
                <img src={logo} alt="Footer" />
            </figure>
        </Layout>
    )
}

export { Footer };