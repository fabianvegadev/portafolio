import mh from '../assets/mh.jpg';
import apimh from '../assets/apimh.jpg';
import logo from '../assets/foto.png';

export const primaryProjects = [
    {
        image: mh,
        title: 'Mustard Habit',
        techs: [
            'React.js',
            'HTML5',
            'CSS3'
        ],
        description: 'Aplicación web interactiva creada con React.js para gestionar hábitos personales y mejorar la productividad. Incluye funcionalidades como el registro de hábitos, visualización de estadísticas y personalización de rutinas diarias. La interfaz está diseñada con HTML5 y CSS3, brindando una experiencia de usuario intuitiva y visualmente atractiva. Este proyecto explora la persistencia de datos en el navegador y la implementación de componentes reutilizables.',
        linkGitHub: 'https://github.com/fabianvegadev/mustard-habit.app',
        linkPreview: 'https://fabianvegadev.github.io/mustard-habit.app'
    },
    {
        image: apimh,
        title: 'API Mustard Habit',
        techs: [
            'Python',
            'Flask'
        ],
        description: 'API desarrollada con Flask para gestionar el backend de la aplicación Mustard Habit. Permite la creación, actualización y eliminación de hábitos, así como la recuperación de estadísticas en tiempo real. La API está estructurada siguiendo los principios REST, facilitando una comunicación eficiente entre el frontend y el backend. Este proyecto destaca el uso de Python y Flask para manejar datos y mantener un flujo continuo en la aplicación.',
        linkGitHub: 'https://github.com/fabianvegadev/api-mustardhabit',
        linkPreview: 'https://api-mustardhabit.onrender.com/'
    },
    {
        image: logo,
        title: 'Próximamente',
        techs: [
            'Amor por la tecnología'
        ],
        description: 'Estoy trabajando en nuevos proyectos que estarán disponibles pronto. ¡Mantente al tanto para ver más de mi trabajo y explorar nuevas ideas y desarrollos!',
        linkGitHub: 'https://github.com/fabianvegadev',
        linkPreview: ''
    },
];
