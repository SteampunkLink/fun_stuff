import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Projects from "./components/Projects.js";
import Demo from "./components/Demo";

import Test from "./demos/Test";
import WeatherApp from "./demos/WeatherApp/WeatherApp";
import WeatherState from "./demos/WeatherApp/context/WeatherState";

import ScratchCardApp from "./demos/ScratchCards/ScratchCardApp";
import ScratchState from "./demos/ScratchCards/context/ScratchState";

import TodoApp from "./demos/TodoApp/TodoApp";
import TodoState from "./demos/TodoApp/context/TodoState";

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
          <Demo
            component={ScratchCardApp}
            context={ScratchState}
            path="/demo/scratchcard"
          />
          <Demo component={TodoApp} context={TodoState} path="/demo/todo" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
