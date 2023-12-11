//components
import MainComponent from './components/MainComponent';
import Balanco from "./assets/balanco.jpeg"
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
//Style
import './App.css';


function App() {
  return (
    <div className="App">
      <MainComponent />
      <div>
        <img src="/montanhas.jpeg" alt="montanhas" />
      </div>
      <div className="second-image">
        <img src={Balanco} alt="montanhas" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
    </div>
  );
}

export default App;
