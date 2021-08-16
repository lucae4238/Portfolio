import './App.css';
import { Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Landing from './components/Landing';
import Projects from './components/Projects';
import About from './components/About';
function App() {
  return (
    <>
    <Route path="/"  component={NavBar}/>
    <Route exact path="/"  component={Landing}/>
    <Route path="/projects" component={Projects}/>
    <Route path="/about" component={About}/>
    <Route path="/"  component={Footer}/>
    </>
  );
}

export default App;
