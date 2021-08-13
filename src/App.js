import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Projects from "./components/Projects.js";
import Demo from "./components/Demo";

import WeatherApp from "./demos/WeatherApp/WeatherApp";
import WeatherState from "./demos/WeatherApp/context/WeatherState";

import ScratchCardApp from "./demos/ScratchCards/ScratchCardApp";
import ScratchState from "./demos/ScratchCards/context/scratchState";

import TodoApp from "./demos/TodoApp/TodoApp";
import TodoState from "./demos/TodoApp/context/TodoState";

import PogApp from "./demos/PogApp/PogApp";

import JunkDrawerApp from "./demos/JunkDrawer/JunkDrawerApp";
import JunkState from "./demos/JunkDrawer/context/JunkState";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={Projects} path="/" exact />
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
          <Demo component={PogApp} context={Fragment} path="/demo/caps" />
          <Demo component={JunkDrawerApp} context={JunkState} path="/demo/junkdrawer" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
