import { Navbar } from '../Components/Navbar/Navbar';
import { Home } from '../Pages/Home';
import './styles.css'

const App = () => {

  return (
    <div id='app'>
      <Navbar/>
      <Home/>
    </div>
  )
}

export { App };
