import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Color } from './colors';
import firebase from 'firebase';
import { firebaseConfig } from './configuration/firebase';

function App() {

  // Initialize firebase config
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/login"></Route>
        <Route path="/submit"></Route>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
