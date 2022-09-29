import "./App.css";
import Header from "./components/Header/Header";
import { RelationshipBlock } from "./components/RelathionshipBlock/index";
import { DogsDoSpeakBlock } from "./components/DogsDoSpeakBlock/index";
import { DogFoodBlock } from "./components/DogFoodBlock/index";
import { InsightBlock } from "./components/InsightBlock/index";
import { BlockAboutCustomers } from "./components/BlockAboutCustomers";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header burgerStatus={true}/>
      <RelationshipBlock />
      <DogsDoSpeakBlock />
      <DogFoodBlock />
      <InsightBlock />
      <BlockAboutCustomers />
      <Footer />
    </div>
  );
}

export default App;
