import './App.css';
import React, {Fragment} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
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
            <Route path="/checkout" element={<h1>Checkout</h1>}>
            </Route>
            <Route path="/login" element={<h1>Login</h1>}>
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
