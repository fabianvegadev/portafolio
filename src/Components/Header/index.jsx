import { useContext } from "react";
import { MostroDevContext } from "../../Context";
import { paths } from "../../Routes/Paths";
import { CustomLink } from "../CustomLink";
import { SideMenu } from "../SideMenu";
import { Navbar } from "../Navbar";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/Logo/logo.png";
import "./styles.css";

const Header = () => {
	const context = useContext(MostroDevContext);

	return (
		<header>
			{context.isMobile && <SideMenu />}
			<CustomLink to={paths.home} className="header-logo-container">
				<img src={logo} alt="Logo" />
			</CustomLink>
			{(context.isDesktop || context.isTablet) && <Navbar />}
			{context.isMobile && (
				<FaBars
					onClick={() => context.openSideMenu()}
					size={32}
					style={{ color: "var(--c-xxl-white)" }}
				/>
			)}
		</header>
	);
};

export { Header };
