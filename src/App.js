import { Fragment } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.scss"
import Projects from "./components/Projects.js"
import Demo from "./components/Demo"

import WeatherApp from "./demos/WeatherApp/WeatherApp"
import WeatherState from "./demos/WeatherApp/context/WeatherState"

import ScratchCardApp from "./demos/ScratchCards/ScratchCardApp"
import ScratchState from "./demos/ScratchCards/context/scratchState"

import TodoApp from "./demos/TodoApp/TodoApp"
import TodoState from "./demos/TodoApp/context/TodoState"

import JunkDrawerApp from "./demos/JunkDrawer/JunkDrawerApp"
import JunkState from "./demos/JunkDrawer/context/JunkState"

import PaintApp from "./demos/PaintApp/PaintApp"

import SlamApp from "./demos/SlamApp/SlamApp"
import SlamState from "./demos/SlamApp/context/SlamState"

import PomodoroApp from "./demos/PomodoroPlus/PomodoroApp"
import PomState from "./demos/PomodoroPlus/context/PomState"

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
          <Demo component={JunkDrawerApp} context={JunkState} path="/demo/junkdrawer" />
          <Demo component={PaintApp} context={Fragment} path="/demo/splpaint" />
          <Demo component={SlamApp} context={SlamState} path="/demo/slamcoin" />
          <Demo component={PomodoroApp} context={PomState} path="/demo/pomodoro" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
