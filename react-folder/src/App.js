import Navbar from "./partials/Navbar";
import Home from "./components/Home1";
import Cards from "./components/Cards";

import Home from "./components/Home";


import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/cards" exact component={Cards}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;