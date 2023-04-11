import './scss/App.scss';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
    </div>
  );
}

export default App;
