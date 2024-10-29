import { useRoutes } from 'react-router-dom'
import { Paths } from './Paths'
import { Home } from '../Pages/Home'
import { AboutMe } from '../Pages/AboutMe/AboutMe'
import { Projects } from '../Pages/Projects'
import { Experience } from '../Pages/Experience'
import { Contact } from '../Pages/Contact'
import { Skills } from '../Pages/Skills'
import { UnderConstruction } from '../Pages/UnderConstruction'

const Routes = () => {

    let appRoutes = useRoutes([
        { path: Paths.home, element: <Home/> },
        { path: Paths.projects, element: <Projects/> },
        { path: Paths.experience, element: <Experience/>},
        { path: Paths.skills, element: <Skills/> },
        { path: Paths.aboutMe, element: <AboutMe/> },
        { path: Paths.contact, element: <Contact/> },
        { path: Paths.underConstruction, element: <UnderConstruction/> },
    ])
    return appRoutes
}

export {Routes}