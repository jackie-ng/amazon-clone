import './App.css';
import React, {Fragment} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';

function App() {
  return (
    <Router>
      <Fragment>
        <div className="app">

          {/* A <Switch> ---> <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/checkout">
            </Route>
            <Route path="/login">
            </Route>
            {/* <Route exact path='/' element={<PrivateRoute/>}> */}
            <Route exact path='/' element={<Header/>}/>
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}
export default App;
