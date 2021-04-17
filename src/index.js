import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//CSS
import "./index.css";

//Pages
import Home from "./pages/home/home";
import DetalhesDaBateria from "./pages/detalhes-da-bateria/detalhes-da-bateria";

console.log(process.env.PUBLIC_URL)

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/:idBateria" component={DetalhesDaBateria}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();