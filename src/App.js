import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Productos from './components/ItemsListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Productos/>
      </header>
    </div>
  );
}

export default App;
