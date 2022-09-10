import logo from './logo.svg';
import './App.css'
import Header from './components/Header/Header';
import { RelationshipBlock } from './components/RelathionshipBlock/RelationshipBlock';
import { DogsDoSpeakBlock } from './components/DogsDoSpeakBlock/DogsDoSpeakBlock';

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
