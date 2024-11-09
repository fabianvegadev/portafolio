import { FaCode, FaServer, FaBug, FaTools } from "react-icons/fa";
import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiReact,
	SiTailwindcss,
	SiSelenium,
	SiCucumber,
	SiVisualstudiocode,
	SiGit,
	SiGithub,
	SiAzuredevops,
	SiPostman,
} from "react-icons/si";
import java from "../assets/Icons/java.svg";
import python from "../assets/Icons/python.svg";
import flask from "../assets/Icons/flask.svg";
import linux from "../assets/Icons/linux.png";
import postgresql from "../assets/Icons/postgresql.svg";
import mysql from "../assets/Icons/mysql.svg";

export const stackItems = [
	{
		title: "Frontend",
		icon: <FaCode />,
		logos: [
			<SiHtml5 key="html5" color="#F16529" />,
			<SiCss3 key="css3" color="#2965F1" />,
			<SiJavascript key="javascript" color="#F7DF1E" />,
			<SiReact key="react" color="#61DAFB" />,
			<SiTailwindcss key="tailwindcss" color="#06B6D4" />,
		],
	},
	{
		title: "Backend",
		icon: <FaServer />,
		logos: [
			<img key="java" src={java} alt="java" />,
			<img key="python" src={python} alt="Python" />,
			<img key="flask" src={flask} alt="Flask" />,
			<img key="linux" src={linux} alt="Linux" />,
			<img key="postgresql" src={postgresql} alt="PostgresSQL" />,
			<img key="mysql" src={mysql} alt="MySQL" />,
		],
	},
	{
		title: "Testing",
		icon: <FaBug />,
		logos: [
			<SiSelenium key="selenium" color="#00D900" />,
			<SiCucumber key="cucumber" color="#23D96C" />,
		],
	},
	{
		title: "Tools",
		icon: <FaTools />,
		logos: [
			<SiGit key="git" color="#DE4C36" />,
			<SiGithub key="github" color="#FFFFFF" />,
			<SiAzuredevops key="azuredevops" color="#0078D4" />,
			<SiVisualstudiocode key="vsc" color="#3C99D4" />,
			<SiPostman key="postman" color="#FF6C37" />,
		],
	},
];
