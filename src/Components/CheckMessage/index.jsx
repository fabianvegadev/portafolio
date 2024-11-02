import PropTypes from 'prop-types';
import './styles.css';

const CheckMessage = ({children}) => {

    return (
        <span className='check-message-container'>
            {children}
        </span>
    )
}

CheckMessage.propTypes = {
    children: PropTypes.node.isRequired,
};

export { CheckMessage };