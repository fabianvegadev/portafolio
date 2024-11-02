import PropTypes from 'prop-types';
import './styles.css';

const ScrollNav = ({ navItems }) => {
    return (
        <div className='nav-items'>
            {navItems.map((item, index) => (
                <a key={index} href={`#${item.key}`} target='_blank'>{item.value}</a>            
            ))}
        </div>
    );
};

ScrollNav.propTypes = {
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export { ScrollNav };
