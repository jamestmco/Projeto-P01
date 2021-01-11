import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Homepage from './Components/pages/Homepage';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/Projeto-P01' exact component={Homepage}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
