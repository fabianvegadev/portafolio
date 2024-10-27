import PropTypes from 'prop-types';
import './styles.css';

const StackItem = ({ title, icon, logos = [] }) => {
    // Validación de tipos de propiedades
    StackItem.propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired,
        logos: PropTypes.arrayOf(PropTypes.element),
    };

    return (
        <div className='stack-container-item'>
            <figure className='stack-icon'>{icon}</figure>
            <h2>{title}</h2>
            <div className='stack-logos-container'>
            {logos.map((logo, index) => (
                <figure key={index}>{logo}</figure>                
            ))}
            </div>
        </div>
    )
}

export { StackItem };