import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import './styles.css';

const CustomLink = ({ to, className, children}) => {

    CustomLink.propTypes = {
        to: PropTypes.string.isRequired,
        className: PropTypes.string,
        children: PropTypes.node,
    };

    return (
        <NavLink 
            to={to} 
            className={({ isActive}) => `${className} ${isActive ? 'active' : ''}`.trim()}>
                {children}
        </NavLink>
    )
}

export { CustomLink };