import { HashRouter } from 'react-router-dom'
import { MostroDevProvider } from '../Context';
import { Header } from '../Components/Header';
import { Routes } from '../Routes';
import { Footer } from '../Components/Footer';
import './styles.css'

const App = () => {

  return (
    <MostroDevProvider>
      <HashRouter>
        <div id='app'>
          <Header/>
          <main>
            <Routes/>
          </main>
          <Footer/>
        </div>
      </HashRouter>      
    </MostroDevProvider>    
  )
}

export { App };
