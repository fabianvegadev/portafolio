import ProtoStore from '../assets/ProjectsImages/proto-store.jpg';
import AppMustardHabit from '../assets/ProjectsImages/app-mustard-habit.jpg';
import APIMustardHabit from '../assets/ProjectsImages/api-mustard-habit.jpg';
import Calculator from '../assets/ProjectsImages/calculator.jpg';
import Logo7 from '../assets/Logo/Logo7.png';

export const primaryProjects = [
    {
        image: ProtoStore,
        title: "Proto Store",
        techs: [
            "React.js",
            "API REST",
            "Tailwind CSS"
        ],
        status: "En desarrollo",
        description: "Proto Store es una tienda en línea interactiva creada durante un curso en Platzi, utilizando React y Tailwind CSS. Incluye funcionalidades de carrito de compras para una experiencia de usuario completa y dinámica. Además, consume una API REST pública y gratuita para cargar productos en tiempo real.",
        linkGitHub: "https://github.com/fabianvegadev/proto-store-react-platzi",
        linkPreview: "https://fabianvegadev.github.io/proto-store-react-platzi",
    },
    {
        image: AppMustardHabit,
        title: 'Mustard Habit',
        techs: [
            'React.js',
            'HTML5',
            'CSS3'
        ],
        status: 'En desarrollo',
        description: 'Aplicación web interactiva creada con React.js para gestionar hábitos personales y mejorar la productividad. Incluye funcionalidades como el registro de hábitos, visualización de estadísticas y personalización de rutinas diarias. La interfaz está diseñada con HTML5 y CSS3, brindando una experiencia de usuario intuitiva y visualmente atractiva. Este proyecto explora la persistencia de datos en el navegador y la implementación de componentes reutilizables.',
        linkGitHub: 'https://github.com/fabianvegadev/app-mustard-habit',
        linkPreview: 'https://fabianvegadev.github.io/app-mustard-habit'
    },
    {
        image: APIMustardHabit,
        title: 'API Mustard Habit',
        techs: [
            'Python',
            'Flask'
        ],
        status: 'O.K.',
        description: 'API desarrollada con Flask para gestionar el backend de la aplicación Mustard Habit. Permite la creación, actualización y eliminación de hábitos, así como la recuperación de estadísticas en tiempo real. La API está estructurada siguiendo los principios REST, facilitando una comunicación eficiente entre el frontend y el backend. Este proyecto destaca el uso de Python y Flask para manejar datos y mantener un flujo continuo en la aplicación.',
        linkGitHub: 'https://github.com/fabianvegadev/api-mustardhabit',
        linkPreview: 'https://api-mustardhabit.onrender.com/'
    },
    {
        image: Logo7,
        title: 'Próximamente',
        techs: [
            'Amor por la tecnología'
        ],
        status: '',
        description: 'Estoy trabajando en nuevos proyectos que estarán disponibles pronto. ¡Mantente al tanto para ver más de mi trabajo y explorar nuevas ideas y desarrollos!',
        linkGitHub: 'https://github.com/fabianvegadev',
        linkPreview: ''
    },
];

export const othersProjects = [
    {
        image: Calculator,
        title: "Calculadora",
        techs: [
            "React.js",
            "HTML5",
            "CSS3"
        ],
        status: "O.K.",
        description: "Calculadora básica desarrollada en React como parte de un proyecto en TalentoTech. Permite realizar operaciones matemáticas esenciales de forma rápida e intuitiva, con un diseño limpio y funcional.",
        linkGitHub: "https://github.com/fabianvegadev/calculator-react-talentotech",
        linkPreview: "https://fabianvegadev.github.io/calculator-react-talentotech",
    },
]
