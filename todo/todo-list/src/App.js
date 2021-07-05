import './App.css';
import React, { useState } from 'react';
import Header from './components/Header'
import Loginc from './components/Loginc'
import Signup from './components/Signup'
import Contact from './components/Contact';
import TodoList from './components/Task/TodoList'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
var cors = require('cors');


function App() {

  const [loginDetails, setLoginDetails] = useState([]);
  const [signUpDetails,setSignupDetails] = useState([]);

  const setLogKeys = (detail) => {
    console.log(detail)
    setLoginDetails(detail);
  }

  const setSignKeys = (detail) => {
    console.log(detail)
    setSignupDetails(detail);
  }

  console.log("login", loginDetails);
  console.log("sign",signUpDetails);


  return (
    <>
      <Router>
        <Header name={loginDetails.username} />
        <Switch>
          <Route path="/" exact render={(props) => (
            <Loginc {...props}  setKeys={setLogKeys}/>
          )} />

        <Route path="/signup" render={(props) => (
          <Signup {...props} setKeys={setSignKeys}/>
          )} />
          
          <Route path="/home" component={TodoList} />

          <Route path="/contact" component={Contact} />

        </Switch>
      </Router>
      
    </>
  );
}

export default App;
