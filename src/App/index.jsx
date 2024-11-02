import { BrowserRouter } from 'react-router-dom'
import { MostroDevProvider } from '../Context';
import { Header } from '../Components/Header';
import { Routes } from '../Routes';
import { Footer } from '../Components/Footer';
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
          <Footer/>
        </div>
      </BrowserRouter>      
    </MostroDevProvider>    
  )
}

export { App };
