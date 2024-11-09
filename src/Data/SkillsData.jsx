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
import { BiSearchAlt2 } from "react-icons/bi";
import { IoIosChatbubbles } from "react-icons/io";
import { MdEngineering, MdTimelapse } from "react-icons/md";
import { FaPeopleCarryBox, FaUsers, FaRecycle } from "react-icons/fa6";
import java from "../assets/Icons/java.svg";
import csharp from "../assets/Icons/csharp.svg";
import python from "../assets/Icons/python.svg";
import flask from "../assets/Icons/flask.svg";
import postgresql from "../assets/Icons/postgresql.svg";
import mysql from "../assets/Icons/mysql.svg";

export const frontendSkills = [
	{
		name: "React",
		icon: <SiReact key="react" color="#61DAFB" />,
		description:
			"Desarrollo de interfaces de usuario dinámicas y componentes reutilizables en React, con manejo de estado y hooks para aplicaciones web interactivas.",
		yearsOfExperience: 1,
	},
	{
		name: "JavaScript",
		icon: <SiJavascript key="javascript" color="#F7DF1E" />,
		description:
			"Experiencia avanzada en JavaScript para crear funcionalidades complejas, incluyendo manipulación del DOM, programación asincrónica y buenas prácticas.",
		yearsOfExperience: 2,
	},
	{
		name: "HTML5",
		icon: <SiHtml5 key="html5" color="#F16529" />,
		description:
			"Construcción de estructuras semánticas con HTML5, optimizando el rendimiento, accesibilidad y compatibilidad en diversas plataformas.",
		yearsOfExperience: 2,
	},
	{
		name: "CSS3",
		icon: <SiCss3 key="css3" color="#2965F1" />,
		description:
			"Dominio en diseño y estilización responsiva con CSS3, empleando flexbox, grid y animaciones para mejorar la experiencia visual.",
		yearsOfExperience: 2,
	},
	{
		name: "Tailwind CSS",
		icon: <SiTailwindcss key="tailwindcss" color="#06B6D4" />,
		description:
			"Introducción al uso de Tailwind CSS para crear diseños eficientes y estilos predefinidos en aplicaciones web.",
		yearsOfExperience: 0.5,
	},
];

export const backendSkills = [
	{
		name: "Java",
		icon: <img key="java" src={java} alt="java" />,
		description:
			"Desarrollo de aplicaciones backend y pruebas automatizadas en Java, aplicando POO y buenas prácticas de codificación.",
		yearsOfExperience: 1,
	},
	{
		name: "Python",
		icon: <img key="python" src={python} alt="Python" />,
		description:
			"Conocimientos básicos de Python para desarrollo web y scripting, incluyendo Flask para aplicaciones backend simples.",
		yearsOfExperience: 0.5,
	},
	{
		name: "Flask",
		icon: <img key="flask" src={flask} alt="Flask" />,
		description:
			"Implementación de aplicaciones web sencillas con Flask, integrando rutas y bases de datos para funcionalidades backend básicas.",
		yearsOfExperience: 0.5,
	},
];

export const databasesSkills = [
	{
		name: "MySQL",
		icon: <img key="mysql" src={mysql} alt="MySQL" />,
		description:
			"Manejo de bases de datos relacionales con MySQL, realizando consultas y optimización para mejor rendimiento.",
		yearsOfExperience: 1,
	},
	{
		name: "PostgreSQL",
		icon: <img key="postgresql" src={postgresql} alt="PostgresSQL" />,
		description:
			"Experiencia en PostgreSQL para consultas relacionales, optimización de rendimiento y gestión de datos.",
		yearsOfExperience: 1,
	},
];

export const languagesSkills = [
	{
		name: "JavaScript",
		icon: <SiJavascript key="javascript" color="#F7DF1E" />,
		description:
			"Lenguaje principal para desarrollo frontend y backend, con experiencia en manipulación del DOM y programación asincrónica.",
		yearsOfExperience: 2,
	},
	{
		name: "Java",
		icon: <img key="java" src={java} alt="java" />,
		description:
			"Desarrollo backend con Java, aplicando POO y buen uso de estructuras de datos.",
		yearsOfExperience: 1,
	},
	{
		name: "C#",
		icon: <img key="csharp" src={csharp} alt="csharp" />,
		description:
			"Experiencia en C# para desarrollo de aplicaciones orientadas a objetos.",
		yearsOfExperience: 1,
	},
	{
		name: "Python",
		icon: <img key="python" src={python} alt="Python" />,
		description:
			"Conocimientos básicos en Python para scripting y desarrollo web simple.",
		yearsOfExperience: 0.5,
	},
];

export const testingSkills = [
	{
		name: "Selenium",
		icon: <SiSelenium key="selenium" color="#00D900" />,
		description:
			"Automatización de pruebas de interfaz con Selenium, escribiendo scripts para validación de funcionalidades.",
		yearsOfExperience: 1,
	},
	{
		name: "Cucumber",
		icon: <SiCucumber key="cucumber" color="#23D96C" />,
		description:
			"Pruebas de comportamiento (BDD) con Cucumber, utilizando Gherkin para casos de prueba comprensibles por todos los involucrados.",
		yearsOfExperience: 1,
	},
];

export const toolsSkills = [
	{
		name: "VS Code",
		icon: <SiVisualstudiocode key="vsc" color="#3C99D4" />,
		description:
			"Experiencia en Visual Studio Code para desarrollo eficiente, con configuración de extensiones y optimización del flujo de trabajo.",
		yearsOfExperience: 1,
	},
	{
		name: "Postman",
		icon: <SiPostman key="postman" color="#FF6C37" />,
		description:
			"Uso de Postman para pruebas de API, validación de respuestas y automatización de pruebas básicas.",
		yearsOfExperience: 1,
	},
	{
		name: "Azure DevOps",
		icon: <SiAzuredevops key="azuredevops" color="#0078D4" />,
		description:
			"Introducción a Azure DevOps para gestión de proyectos y colaboración en el desarrollo.",
		yearsOfExperience: 1,
	},
	{
		name: "Git",
		icon: <SiGit key="git" color="#DE4C36" />,
		description:
			"Dominio en control de versiones con Git, incluyendo trabajo con ramas, resolución de conflictos y buen manejo de commits.",
		yearsOfExperience: 2,
	},
	{
		name: "GitHub",
		icon: <SiGithub key="github" color="#FFFFFF" />,
		description:
			"Manejo avanzado de GitHub para colaboración, pull requests, manejo de issues y despliegue de proyectos.",
		yearsOfExperience: 2,
	},
];
export const softSkills = [
	{
		name: "Comunicación efectiva",
		icon: <IoIosChatbubbles />,
		description:
			"Transmito ideas claramente, promoviendo comprensión y colaboración.",
		yearsOfExperience: 8,
	},
	{
		name: "Liderazgo",
		icon: <FaUsers />,
		description:
			"Motivo y dirijo equipos hacia objetivos comunes, adaptando el enfoque según las necesidades.",
		yearsOfExperience: 8,
	},
	{
		name: "Resolución de problemas",
		icon: <MdEngineering />,
		description:
			"Identifico y resuelvo problemas con soluciones prácticas e innovadoras.",
		yearsOfExperience: 8,
	},
	{
		name: "Adaptabilidad",
		icon: <FaRecycle />,
		description:
			"Me ajusto rápidamente a cambios y nuevos desafíos con flexibilidad.",
		yearsOfExperience: 8,
	},
	{
		name: "Pensamiento crítico",
		icon: <BiSearchAlt2 />,
		description:
			"Analizo información objetivamente para tomar decisiones informadas.",
		yearsOfExperience: 8,
	},
	{
		name: "Gestión del tiempo",
		icon: <MdTimelapse />,
		description:
			"Organizo y priorizo tareas para maximizar productividad y cumplir plazos.",
		yearsOfExperience: 8,
	},
	{
		name: "Trabajo en equipo",
		icon: <FaPeopleCarryBox />,
		description:
			"Colaboro de manera efectiva, valorando cada aporte para lograr objetivos comunes.",
		yearsOfExperience: 8,
	},
];
