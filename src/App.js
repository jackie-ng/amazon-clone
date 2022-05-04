import './App.css';
import React, { Fragment, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { projectAuth } from './fbConfig';


function App() {
  const [{ user }, dispatch] = useStateValue();

  //a piece of code which runs based on a given condition
  useEffect(() => {
    const unsubscribe = projectAuth.onAuthStateChanged(authUser => {
      if(authUser) {
        //the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return () => {
      //any cleanup actions go in here
      unsubscribe();
    }
  }, [])
  console.log('user', user);

  return (
    <Router>
      <Fragment>
        <div className="app">

          {/* A <Switch> ---> <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/checkout"
              element={<>
                <Header />
                <Checkout /></>} />
            <Route path="/login"
              element={
                <Login />
              } />
            <Route exact path='/'
              element={
                <>
                  <Header />
                  <Home />
                </>
              } />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}
export default App;
