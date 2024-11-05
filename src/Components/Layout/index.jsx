import PropTypes from 'prop-types';
import './styles.css';

const Layout = ({children, className}) => {
    Layout.propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
    };
    return (
        <>
            <section className={`layout ${className}`}>
                {children}
            </section>
        </>
    )
}

export { Layout };