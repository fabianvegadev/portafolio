import { useRoutes } from 'react-router-dom'
import { paths } from './Paths'
import { Home } from '../Pages/Home'
import { AboutMe } from '../Pages/AboutMe/AboutMe'
import { Projects } from '../Pages/Projects'
import { Experience } from '../Pages/Experience'
import { Contact } from '../Pages/Contact'
import { Skills } from '../Pages/Skills'

const Routes = () => {

    let appRoutes = useRoutes([
        { path: paths.home, element: <Home/> },
        { path: paths.projects, element: <Projects/> },
        { path: paths.experience, element: <Experience/>},
        { path: paths.skills, element: <Skills/> },
        { path: paths.aboutMe, element: <AboutMe/> },
        { path: paths.contact, element: <Contact/> },
    ])
    return appRoutes
}

export {Routes}