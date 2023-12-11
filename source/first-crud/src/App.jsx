//components
import HeaderComponent from './components/HeaderComponent'
import FormComponent from './components/FormComponent'
import UsersTableComponent from './components/UsersTableComponent'

//styles
import './App.css';

function App() {
  return (
    <div className="App">
    <HeaderComponent/>

    <UsersTableComponent/>
    </div>
  );
}

export default App;
