import { Layout } from "../../Components/Layout";
import { ContactForm } from '../../Components/ContactForm';
import ContactInfo from '../../Components/ContactInfo';
import { SocialLinks } from '../../Components/SocialLinks';
import './styles.css';

const Contact = () => {

    return (
        <Layout className='contact-page'>
            <h2>Contáctame</h2>
            <p>Estoy disponible para discutir sobre nuevas oportunidades y proyectos.</p>
            <div className='contact-container'>
                <ContactInfo />
                <ContactForm />
            </div>
            <SocialLinks />
        </Layout>
    );
};

export default Contact;


export { Contact };