import PropTypes from 'prop-types';
import './styles.css';

const StackCard = ({ title, icon, logos = [] }) => {
    // Validación de tipos de propiedades
    StackCard.propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired,
        logos: PropTypes.arrayOf(PropTypes.element),
    };

    return (
        <div className='stack-item'>
            <figure className='stack-icon'>{icon}</figure>
            <h3>{title}</h3>
            <div className='stack-logos-container'>
            {logos.map((logo, index) => (
                <figure key={index}>{logo}</figure>                
            ))}
            </div>
        </div>
    )
}

export { StackCard };