// ScrollButton.js
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './styles.css';

const ScrollButton = ({ direction, handleScroll }) => {
    const handleClick = () => {
        handleScroll(direction); // Llama a handleScroll con la dirección correcta
    };

    return (
        <>
            {direction === 'left' ? (
                <FaChevronLeft onClick={handleClick} className="scroll-button left" />
            ) : (
                <FaChevronRight onClick={handleClick} className="scroll-button right" />
            )}
        </>
    );
};

export { ScrollButton };