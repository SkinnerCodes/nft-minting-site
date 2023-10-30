import './App.css';
import Minter from './Minter'

function App() {
  return (
    <div className="App">
      <div className="image-container">
        <img src="sepolia.png" alt="Sepolia Logo" />
      </div>
      <Minter></Minter>
    </div>
  );
}

export default App;
