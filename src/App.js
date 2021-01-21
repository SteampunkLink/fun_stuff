import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Projects from "./Projects.js";
import Demo from "./Demo.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={Projects} path="/" exact />
          <Route component={Demo} path="/demo" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
