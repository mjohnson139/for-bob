import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import ControlledCarousel from "./components/carousel/Carousel";
import EagleHome from "./components/eaglehome/EagleHome";
import EagleBehavior from "./components/eaglebehavior/EagleBehavior";
import EagleDiet from "./components/eaglediet/EagleDiet";
import ImageGallery from "./components/imagegallery/ImageGallery";
import MatingAndReproduction from "./components/matingandreproduction/MatingAndReproduction";
import NameAndClassification from "./components/nameandclassification/NameAndClassification";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ControlledCarousel />
        <Switch>
          <Route exact path="/" component={EagleHome} />
          <Route path="/eaglehome" component={EagleHome} />
          <Route path="/eaglebehavior" component={EagleBehavior} />
          <Route path="/eaglediet" component={EagleDiet} />
          <Route path="/matingandreproduction" component={MatingAndReproduction} />
          <Route path="/nameandclassification" component={NameAndClassification} />
          <Route path="/imagegallery" component={ImageGallery} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
