import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import {RelationshipBlock} from './components/RelathionshipBlock/RelationshipBlock';

function App() {
  return (
    <div className="App">
      <Header />
      <RelationshipBlock />
      <div className='mainContent'>

      </div>
    </div>
  );
}

export default App;
