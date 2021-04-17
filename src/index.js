import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//CSS
import "./index.css";

//Pages
import Home from "./pages/home/home";
import DetalhesDaBateria from "./pages/detalhes-da-bateria/detalhes-da-bateria";

console.log(process.env.PUBLIC_URL)

const routing = (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/detalhes/:idBateria" component={DetalhesDaBateria}/>
    </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

serviceWorker.unregister();