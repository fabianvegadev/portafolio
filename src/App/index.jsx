import { BrowserRouter } from 'react-router-dom'
import { MostroDevProvider } from '../Context';
import { Header } from '../Components/Header';
import { Routes } from '../Routes';
import { ContactMe } from '../Components/ContactMe';
import './styles.css'

const App = () => {

  return (
    <MostroDevProvider>
      <BrowserRouter>
        <div id='app'>
          <Header/>
          <main>
            <Routes/>
          </main>
          <ContactMe/>
        </div>
      </BrowserRouter>      
    </MostroDevProvider>    
  )
}

export { App };
