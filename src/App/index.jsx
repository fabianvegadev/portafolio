import { MostroDevProvider } from '../Context';
import { Header } from '../GeneralComponents/Header';
import { Home } from '../Pages/Home';
import './styles.css'

const App = () => {

  return (
    <MostroDevProvider>
      <div id='app'>
        <Header/>
        <main>
          <Home/>
        </main>
      </div>
    </MostroDevProvider>
    
  )
}

export { App };
