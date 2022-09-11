import './App.css'
import Header from './components/Header/Header';
import {RelationshipBlock} from './components/RelathionshipBlock/index';
import {DogsDoSpeakBlock} from './components/DogsDoSpeakBlock/index'
import { DogFoodBlock } from './components/DogFoodBlock';

function App() {
  return (
    <div className="App">
      <Header />
      <RelationshipBlock />
      <DogsDoSpeakBlock />
      <DogFoodBlock />
      <div className='mainContent'>

      </div>
    </div>
  );
}

export default App;
