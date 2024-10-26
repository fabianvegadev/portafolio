import { Header } from '../Components/Header';
import { Home } from '../Pages/Home';
import { Stack } from '../Pages/Stack';
import './styles.css'

const App = () => {

  return (
    <div id='app'>
      <Header/>
      <main>
        <Home/>
        <Stack/>        
      </main>
    </div>
  )
}

export { App };
