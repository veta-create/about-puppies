import './App.css'
import Header from './components/Header/Header';
import { RelationshipBlock } from './components/RelathionshipBlock/index';
import { DogsDoSpeakBlock } from './components/DogsDoSpeakBlock/index';

function App() {
  return (
    <div className="App">
      <Header />
      <RelationshipBlock />
      <DogsDoSpeakBlock />
      <div className='mainContent'>

      </div>
    </div>
  );
}

export default App;
