import { useState } from 'react';
import { CheckMessage } from '../CheckMessage';
import { FaRegCopy } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";
import { RiFlowerLine } from "react-icons/ri";
import './styles.css';

const ContactInfo = () => {
    const [copyMessage, setCopyMessage] = useState('')

    const copyEmail = () => {
        navigator.clipboard.writeText('fabianvegadev@gmail.com')
            .then(() => {
                setCopyMessage('Copiado')
                setTimeout(() => setCopyMessage(''), 2000)
            })
            .catch(() => {
                setCopyMessage('Error al copiar el correo')
                setTimeout(() => setCopyMessage(''), 2000)
            });
    };

    return (
        <div className='contact-info'>
            <h3>Información de Contacto</h3>
            <AiOutlineMail size={16} className="contact-info-email-icon"/>
            <input 
                className='contact-info-email-input' 
                value='fabianvegadev@gmail.com' 
                readOnly 
            />
            <button onClick={copyEmail} aria-label="email-copy" className='contact-info-email-button'>
                <FaRegCopy size={15}/>
                {copyMessage && <CheckMessage>{copyMessage}</CheckMessage>}
            </button>

            <FaWhatsapp size={16} className="contact-info-whatsapp-icon"/>
            <p className='contact-info-whatsapp-p'> +57 - 317 338 2026</p>
            <a href='https://wa.me/+573173382026' target='_blank'>
                <button className='contact-info-whatsapp-button' aria-label="whatsapp"><FaWhatsapp size={16}/></button>            
            </a>

            <div className="contact-info-address">
                <RiFlowerLine size={16}/>
                <p> Medellín, Colombia</p>
            </div>
        </div>
    );
};

export { ContactInfo };
