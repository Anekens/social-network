import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import SocialNetworkApp from "./App";
import "./index.css"

ReactDOM.render(<SocialNetworkApp/>, document.getElementById('root'));

serviceWorker.unregister();
