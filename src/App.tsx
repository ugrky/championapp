import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider as ReduxProvider } from 'react-redux';

import { Color } from './colors';
import firebase from 'firebase';
import { firebaseConfig, reactReduxFirebaseConfig } from './configuration/firebase';

import MainScreen from './screens/main';
import { createStore} from './redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import LoginScreen from './screens/Login';
import SubmitCheerScreen from './screens/SubmitCheer';

firebase.initializeApp(firebaseConfig);

const store = createStore();

function App() {
  return (
    <ReduxProvider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={reactReduxFirebaseConfig}
        dispatch={store.dispatch}
      >
        <Router>
          <Switch>
            <Route path="/login">
              <LoginScreen />
            </Route>
            <Route path="/submit">
              <SubmitCheerScreen />
            </Route>
            <Route path="/">
              <MainScreen />
            </Route>
          </Switch>
        </Router>
      </ReactReduxFirebaseProvider>
    </ReduxProvider>
  );
}

export default App;
