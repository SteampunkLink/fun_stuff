import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Projects from "./components/Projects.js";
import Demo from "./components/Demo";

import Test from "./demos/Test";
import WeatherApp from "./demos/WeatherApp/WeatherApp";
import WeatherState from "./demos/WeatherApp/context/WeatherState";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={Projects} path="/" exact />
          <Demo component={Test} context={Fragment} path="/demo/testing" />
          <Demo
            component={WeatherApp}
            context={WeatherState}
            path="/demo/retroweather"
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
