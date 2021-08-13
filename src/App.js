import './App.css';
import { Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Landing from './components/Landing';
function App() {
  return (
    <>
    <Route path="/"  component={NavBar}/>
    <Route exact path="/"  component={Landing}/>
    <Route path="/"  component={Footer}/>
    </>
  );
}

export default App;
