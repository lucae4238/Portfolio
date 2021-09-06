import React, {Suspense, useState} from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Landing from './components/Landing';
import Projects from './components/Projects';
import About from './components/About';
import CVButton from './components/CVButton';
import background from './components/Background';
import NoMatch from './components/404';

function App() {
  const [isBackground, setIsBackground] = useState(true)



  return (
    <BrowserRouter>
       <Suspense fallback="loading">
    <Route path="/"  render={() => <NavBar setIsBackground={setIsBackground} isBackground={isBackground}/>}/>
         <Switch>
    <Route exact path="/"  component={Landing}/>
    <Route path="/projects" component={Projects}/>
    <Route path="/about" component={About}/>
    <Route  component={NoMatch}/>
         </Switch>
    <Route path="/"  component={CVButton}/>
    <Route path="/"  component={Footer}/>
    { isBackground && <Route path="/"  component={background}/> }
       </Suspense>
    </BrowserRouter>
  );
}

export default App;
