import './App.css';
import Header from './components/Header'
import React, { useState } from 'react';

import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  const [isLogin, setLogin] = useState(false);
  return (
    <>
      <Router>
        <Switch>
            <Route path="/" exact render={(props) => (
            <Header {...props} isLogin={false}/>
          )} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
