import React, {Suspense} from 'react';
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Landing from './components/Landing';
import Projects from './components/Projects';
import About from './components/About';
import CVButton from './components/CVButton';
import background from './components/Background';

function App() {
  return (
    <BrowserRouter>
       <Suspense fallback="loading">
    <Route path="/"  component={NavBar}/>
    <Route exact path="/"  component={Landing}/>
    <Route path="/projects" component={Projects}/>
    <Route path="/about" component={About}/>
    <Route path="/"  component={CVButton}/>
    <Route path="/"  component={Footer}/>
    {/* <Route path="/"  component={background}/> */}
       </Suspense>
    </BrowserRouter>
  );
}

export default App;
