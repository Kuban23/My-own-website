import './scss/App.scss';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
   return (
      <div>
         <Navbar />
         <Home />
         <About />
         <Skills />
         <Portfolio/>
         <Contact/>
      </div>
   );
}

export default App;
