import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario.
        alert('¡Mensaje enviado!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <form className='contact-form' onSubmit={handleSubmit}>
        <input
            type='text'
            name='name'
            placeholder='Tu nombre'
            value={formData.name}
            onChange={handleChange}
            required
        />
        <input
            type='email'
            name='email'
            placeholder='Tu correo electrónico'
            value={formData.email}
            onChange={handleChange}
            required
        />
        <textarea
            name='message'
            placeholder='Tu mensaje'
            value={formData.message}
            onChange={handleChange}
            required
        />
        <button type='submit'>Enviar</button>
        </form>
    );
};

export default ContactForm;
