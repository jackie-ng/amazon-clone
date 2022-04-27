import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/checkout">Check Out</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> ---> <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/checkout">
          </Route>
          <Route path="/login">
          </Route>
          <Route path="/">
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
