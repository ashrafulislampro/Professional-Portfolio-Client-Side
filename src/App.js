import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Home from './PortfolioPages/Home/Home';
import NotFound from './PortfolioPages/NotFound/NotFound';
import './App.css';
function App() {
  return (
    <div className="App">
    <Router>
     <Switch>
       <Route path="/home">
          <Home/>
       </Route>
       <Route exact path="/">
          <Home/>
       </Route>
       <Route path="/*">
         <NotFound/>
       </Route>
     </Switch>
    </Router>
    </div>
  );
}

export default App;
