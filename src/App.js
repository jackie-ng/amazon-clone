import './App.css';
import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';

function App() {
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
