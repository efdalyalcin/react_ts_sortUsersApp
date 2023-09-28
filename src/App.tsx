import './global.scss';
import Home from './pages/Home';

function App() {
  return (
    <div className="App" data-testid="app">
      <Home data-testid="home" />
    </div>
  );
}

export default App;
