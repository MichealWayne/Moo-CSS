import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from 'react-router-dom';
import './index.scss';


ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>, document.getElementById('app'));

serviceWorker.unregister();
