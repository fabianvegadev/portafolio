import { Layout } from "../Layout";
import logo from '../../assets/Logo.png'
import './styles.css'
const Footer = () => {

    return (
        <Layout>
            <figure className='footer'>
                <img src={logo} alt="Footer" />
            </figure>
        </Layout>
    )
}

export { Footer };