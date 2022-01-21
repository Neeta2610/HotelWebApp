import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Rooms from "./components/Rooms";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Error from "./components/Error";
import Register from "./components/Register";
import Contact from "./components/Contact";
import SingleRoom from "./components/SingeRoom";
import Login from "./components//Login";

function App() {
  return (
    <div className="bg">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
