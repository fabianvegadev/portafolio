import PropTypes from "prop-types";
import { Link } from "react-scroll";
import "./styles.css";

const ScrollNav = ({ navItems }) => {
	return (
		<nav className="scroll-nav">
			{navItems.map((item, index) => (
				<Link
					key={index}
					className="scroll-nav-link"
					to={item.key}
					smooth={true}
					uration={300}
					offset={-110}
				>
					{item.value}
				</Link>
			))}
		</nav>
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
