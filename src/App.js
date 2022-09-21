import './App.css';
import Reload from './components/ReloadButton/Reload';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Reload></Reload>
       <Users></Users>
      </header>
    </div>
  );
}

export default App;
