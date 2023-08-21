import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Headers from './components/Headers';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Headers/>
      <Home/>
    </div>
  );
}
export default App;