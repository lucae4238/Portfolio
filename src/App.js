import React, { Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import NoMatch from './components/404';
import About from './components/About';
import background from './components/Background';
import CVButton from './components/CVButton';
import Footer from './components/Footer';
import Landing from './components/Landing';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import ProductPage from "./components/Projects/MoreExamples/ProductPage"

function App() {
  const [isBackground, setIsBackground] = useState(false)

  return (
    <BrowserRouter>
      <Suspense fallback="loading">
        <Switch>
          <Route exact path="/sample-product-page" component={ProductPage} />
          < >
            <Route path="/" render={() => <NavBar setIsBackground={setIsBackground} isBackground={isBackground} />} />
            <Route exact path="/" component={Landing} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/" component={CVButton} />
            <Route path="/" component={Footer} />
            {isBackground && <Route path="/" component={background} />}
          </ >
          <Route component={NoMatch} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
