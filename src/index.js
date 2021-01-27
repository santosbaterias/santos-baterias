import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//CSS
import "./index.css";

//Pages
import Home from "./pages/home/home";

ReactDOM.render(
  <Home/>,
  document.getElementById('root')
);

serviceWorker.unregister();