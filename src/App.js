import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { Container } from '@material-ui/core';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <Navigation/>
      </BrowserRouter>
    </div>
  );
}

export default App;
